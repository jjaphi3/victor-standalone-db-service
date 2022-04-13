import express from 'express';
import { VictorStandaloneServiceRoute } from './routes/victor-standalone-service-route';

import { VictorWebServiceRoute } from './routes/victor-web-service-route';

export class ApiService {

    private expressApp: express.Application;

    public constructor(public port: number) {
        this.expressApp = express();
    }

    //
    // express.Application
    public get app(): express.Application {
        return this.expressApp;
    }

    //
    // start the api service 
    public startServer(): void {

        const victorStandaloneService = VictorStandaloneServiceRoute.instance;
        this.app.use(victorStandaloneService.path, victorStandaloneService.router);

        const victorWebService = VictorWebServiceRoute.instance;
        this.app.use(victorWebService.path, victorWebService.router);
        this.app.listen(this.port, () => {
            console.log(`Starting api service on port ${this.port}`);
        });
    }

    //
    // create & start the api service 
    public static startServer(port: number): ApiService {

        const apiService = new ApiService(port);   
        apiService.startServer();
        return apiService;
    }
}