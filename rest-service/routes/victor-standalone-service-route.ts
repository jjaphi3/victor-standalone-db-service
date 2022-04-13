import bodyParser from 'body-parser';

import { ClientConnection, ServiceManager } from '../../service-manager';
import { BaseRoute } from './base-route';

export class VictorStandaloneServiceRoute extends BaseRoute {

    protected static victorStandaloneServiceRoute: VictorStandaloneServiceRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.use(bodyParser.text());
        this.router.use(bodyParser.json());
        this.router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
        })); 

        
        this.router.get('/status', (req, res, next) => {
            const response = ServiceManager.instance.getStatus();
            this.sendResponse(req, res, response);
        });

        this.router.get('/connectedClients', (req, res, next) => {
            const response = ServiceManager.instance.getConnectedClients();
            this.sendResponse(req, res, response);
        });

        this.router.post('/register', (req, res, next) => {
            const connection = req.body as ClientConnection;
            const response = ServiceManager.instance.register(connection);
            this.sendResponse(req, res, response);
        });

        this.router.post('/unregister', (req, res, next) => {
            const connection = req.body as ClientConnection;
            const response = ServiceManager.instance.unregister(connection);
            this.sendResponse(req, res, response);
        });

        this.router.post('/shutdown', (req, res, next) => {
            const response = ServiceManager.instance.shutdown();
            this.sendResponse(req, res, response);
        });

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/victorStandaloneService';
    }

    //
    // VictorStandaloneServiceRouteute instance
    public static get instance(): VictorStandaloneServiceRoute {
        return VictorStandaloneServiceRoute.victorStandaloneServiceRoute 
            ? VictorStandaloneServiceRoute.victorStandaloneServiceRoute
            : VictorStandaloneServiceRoute.victorStandaloneServiceRoute = new VictorStandaloneServiceRoute();
    }
}