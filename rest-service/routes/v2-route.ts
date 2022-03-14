import { ApiRoute } from './api-route';
import { BaseRoute } from './base-route';

export class V2Route extends BaseRoute {

    protected static v2Route: V2Route | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {
        ApiRoute.setApiRoutes(this);

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/v2';
    }

    //
    // V2Route instance
    public static get instance(): V2Route {
        return V2Route.v2Route 
            ? V2Route.v2Route
            : V2Route.v2Route = new V2Route();
    }
}