import bodyParser from 'body-parser';

import { AuthController } from '../controllers/auth-controller';
import { GenericController } from '../controllers/generic-controller';
import { Login } from '../models/login';
import { BaseRoute } from './base-route';

export class GenericRoute extends BaseRoute {

    protected static genericRoute: GenericRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.route('/version')
            .get((req, res, next) => {
                console.log(`url:${req?.url}`);
                this.sendResponse(res, GenericController.instance.version());
            }).post((req, res, next) => {
                console.log(`url:${req?.url}`);
                this.sendResponse(res, GenericController.instance.version());
            });

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/generic';
    }

    //
    // GenericRoute instance
    public static get instance(): GenericRoute {
        return GenericRoute.genericRoute 
            ? GenericRoute.genericRoute
            : GenericRoute.genericRoute = new GenericRoute();
    }
}