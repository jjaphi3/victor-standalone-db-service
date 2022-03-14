import express from 'express';

import { HttpResponse } from '../models/http-response';

export abstract class BaseRoute {

    protected expressRouter = express.Router();

    constructor() {
        this.initRoutes();
    }

    //
    // Init the routes
    protected abstract initRoutes(): void;

    //
    // send the response
    protected sendResponse(res: express.Response, response: HttpResponse) {
        res.status(response.status).json(response.body);
    }

    //
    // basepPath for the route
    public abstract get path(): string;

    //
    // router
    public get router(): express.Router {
        return this.expressRouter;
    }

    //
    // add the route to path //address:port/[route]
    public AddRoute(route: BaseRoute): void {
        this.router.use(route.path, route.router);
    } 
}