import express from 'express';

import { HttpResponse } from '../models/http-response';
import { Session } from '../models/login';
import { SessionManager } from '../session-manager';

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
    protected sendResponse(req: express.Request, res: express.Response, response: HttpResponse) {
        
        const session = SessionManager.instance.getSessionFromRequest(req);
        if (session) {
            res.set('session-id', session.sessionId);
        }
        
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