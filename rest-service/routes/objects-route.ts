import { ObjectsController } from '../controllers/objects-controller';
import { Criteria } from '../models/criteria';
import { Utils } from '../utils';
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

            const criteria = Utils.setObjectFromRequestBody(req, new Criteria()) as Criteria;
            const response = ObjectsController.instance.findObjsWithCriteriaFilter(criteria);
            this.sendResponse(req, res, response);
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