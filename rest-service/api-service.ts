import express from 'express';

import { VictorWebServiceRoute } from './routes/victorWebService-route';

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