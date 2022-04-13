import axios from 'axios';
import * as childProcess from 'child_process';
import fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import path from 'path';

import { HttpResponse } from './rest-service/models/http-response';

export type ClientConnection = {
    clientProcessId: number;
}

export class ServiceManager {

    private static readonly serviceName: string = 'server54/server.js';

    protected static serviceManager: ServiceManager | undefined = undefined;
    private clients: ClientConnection[] = [];
    private server54: childProcess.ChildProcess | undefined = undefined;

    public constructor() { 
        console.log('ServiceManager');
    }

    private static getFullPathIfFileExists(filepath: string, filename: string): string | undefined {
        try {
            if (filepath && filename) {
                const fullPath = path.join(filepath, filename);
                if (fs.existsSync(fullPath)){
                    return fullPath;
                }
            }
        }
        catch (error) {
          console.log(`ServiceManager::getFullPathIfFileExists - ${error}`);
        }
        return undefined;
    }

    private static getServer54Path(): string | undefined { 

        let servicePath = ServiceManager.getFullPathIfFileExists('./resources/', ServiceManager.serviceName);

		/* So we can use it in npm run start-run-electron as long as C-CURE client is installed */
		if (!servicePath){
			servicePath = ServiceManager.getFullPathIfFileExists('C:/ProgramData/Tyco/C-CURE/resources/', ServiceManager.serviceName);
		}
        if (!servicePath){
            servicePath = ServiceManager.getFullPathIfFileExists('D:/TFSWork/CCure_Web/WebClient/', ServiceManager.serviceName);
        }

        console.log(`ServiceManager::getServer54Path - ${servicePath}`);
        return servicePath;
    }

    private isServer54Local(server54Address: string): boolean {
        switch (server54Address.toLocaleLowerCase()) {
            case 'localhost':
            case '127.0.0.1':
                return true;
        }
        return false;
    }

    private isServer54Running(server54Address: string, server54Port: number): Promise<boolean> {
        return new Promise(resolve => {
            console.log(`ServiceManager:isServer54Running http://${server54Address}:${server54Port}`);
            const client = axios.create({ baseURL: `http://${server54Address}:${server54Port}`});
            client.get('/appMode')
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }

    private startServer54(port: number | undefined = undefined) {

        console.log(`ServiceManager:server54Address startServer54:${port}`);
        const startServer = () => {
            const path = ServiceManager.getServer54Path();
            console.log(`ServiceManager:server54Address startServer54: path:${path}`);
            if (path) {
                this.server54 = childProcess.fork(path, [], {
                    detached: true,
                    stdio: 'ignore',
                    env: {
                        ELECTRON_RUN_AS_NODE: '1'
                    }
                });
                console.log(this.server54);
            }
        };

        if (port) {
            this.setServer54Port(port)
                .then(() => startServer())
                .catch(error => console.log(error));
        }
        else {
            startServer();
        }
    }

    private setServer54Port(port: number): Promise<void> {
        return new Promise((resolve, reject) => {
            let path = ServiceManager.getServer54Path() as string;
            if (path) {
                path = path.replace('server.js', 'installer_setting_test.js');
                fs.rm(path, error => {
                    console.log(error);

                    const installerSettings = `
                        exports.serverMode = 'node';
                        exports.useIpv6 = ${false};
                        exports.useHttps = ${false};
                        exports.seedDatabase = ${true};
                        exports.logLevel = 'INFO';
                        exports.eventPollingInterval = 0;
                        exports.allowRemoteConnections = ${true};
                        exports.webServiceDevice = 'localhost';
                        exports.webServicePort = ${port}
                    `;

                    fs.writeFile(path, installerSettings, {flag: 'a+'}, error => {
                        console.log(error);

                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve();
                        }
                    });
                });
            }
        });
    }

    private stopServer54() {
        if (this.server54) {
            this.server54.kill();
        }
        this.server54 = undefined;
    }

    //
    // SessionManager instance
    public static get instance(): ServiceManager {
        return ServiceManager.serviceManager 
            ? ServiceManager.serviceManager
            : ServiceManager.serviceManager = new ServiceManager();
    }

    //
    // get service status
    public getStatus(): HttpResponse {
        const status = {
            pid: process.pid,
            server54Pid: this.server54?.pid,
            clients: this.clients
        };
        return new HttpResponse(StatusCodes.OK, status);
    } 

    //
    // Connected clients
    public getConnectedClients(): HttpResponse {
        return new HttpResponse(StatusCodes.OK, this.clients);
    } 

    //
    // register client
    public register(connection: ClientConnection) : HttpResponse {
        const clientProcessId = connection?.clientProcessId;
        if (!this.clients.find(c => c.clientProcessId == clientProcessId)) {
            this.clients.push({ clientProcessId });
        }
        return new HttpResponse(StatusCodes.OK);
    }

    //
    // unregister client
    public unregister(connection: ClientConnection) : HttpResponse {
        const clientProcessId = connection?.clientProcessId;
        const pos = this.clients.findIndex(c => c.clientProcessId == clientProcessId);
        if (pos != -1) {
            this.clients.splice(pos, 1);
        }
        if (!this.clients.length) {
            this.shutdown();
        }
        return new HttpResponse(StatusCodes.OK);
    }

    //
    // shutdown service
    public shutdown() : HttpResponse {
        
        setTimeout(() => {
            console.log('stopping process...');
            this.stopServer54();
            process.exit(0);
        }, 1000);

        return new HttpResponse(StatusCodes.OK);
    }

    //
    // start service manager
    public start(server54Address = 'localhost', server54Port = 4000) {
        this.isServer54Running(server54Address, server54Port)
            .then(running => {
                console.log(`ServiceManager:server54Address running:${running}`);
                if (!running && this.isServer54Local(server54Address)) {
                    this.startServer54();
                }
            })
            .catch(e => console.log(e));
    }
}