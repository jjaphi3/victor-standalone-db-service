import { GlobalSearchController } from '../controllers/global-search-controller';
import { ObjectsController } from '../controllers/objects-controller';
import { Criteria } from '../models/criteria';
import { GlobalSearchCriteria } from '../models/global-search-criteria';
import { Utils } from '../utils';
import { BaseRoute } from './base-route';

export class GlobalSearchRoute extends BaseRoute {

    protected static globalSearchRoute: GlobalSearchRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.post('/PostGlobalSearchByQuery', (req, res, next) => {
            console.log(`url:${req?.url}`);

            const criteria = Utils.setObjectFromRequestBody(req, new GlobalSearchCriteria()) as GlobalSearchCriteria;
            const response = GlobalSearchController.instance.performSearchByQuery(criteria);
            this.sendResponse(req, res, response);
        });

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/globalsearch';
    }

    //
    // ApiRoute instance
    public static get instance(): GlobalSearchRoute {
        return GlobalSearchRoute.globalSearchRoute 
            ? GlobalSearchRoute.globalSearchRoute
            : GlobalSearchRoute.globalSearchRoute = new GlobalSearchRoute();
    }
}