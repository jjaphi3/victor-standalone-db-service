import { BaseRoute } from './base-route';

export class ObjectsRoute extends BaseRoute {

    protected static objectsRoute: ObjectsRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        // const videoApp = VideoAppRoute.Instance;
        // this.AddRoute(videoApp.Path, videoApp.Router);

        this.router.post('/FindObjsWithCriteriaFilter', (req, res, next) => {
            console.log(`url:${req?.url}`);
        });

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/objects';
    }

    //
    // ApiRoute instance
    public static get instance(): ObjectsRoute {
        return ObjectsRoute.objectsRoute 
            ? ObjectsRoute.objectsRoute
            : ObjectsRoute.objectsRoute = new ObjectsRoute();
    }
}