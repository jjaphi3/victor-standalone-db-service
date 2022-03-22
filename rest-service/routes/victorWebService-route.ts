import bodyParser from 'body-parser';
import { ApiRoute } from './api-route';

import { AuthRoute } from './auth-route';
import { BaseRoute } from './base-route';
import { GenericRoute } from './generic-route';
import { ObjectsRoute } from './objects-route';
import { V2Route } from './v2-route';

export class VictorWebServiceRoute extends BaseRoute {

    protected static victorWebServiceRoute: VictorWebServiceRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.use(bodyParser.text());
        this.router.use(bodyParser.json());
        this.router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
        })); 

        this.AddRoute(ApiRoute.instance);

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/victorWebService';
    }

    //
    // ApiRoute instance
    public static get instance(): VictorWebServiceRoute {
        return VictorWebServiceRoute.victorWebServiceRoute 
            ? VictorWebServiceRoute.victorWebServiceRoute
            : VictorWebServiceRoute.victorWebServiceRoute = new VictorWebServiceRoute();
    }
}