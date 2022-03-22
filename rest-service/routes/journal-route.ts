import { ObjectsController } from '../controllers/objects-controller';
import { Criteria } from '../models/criteria';
import { Utils } from '../utils';
import { BaseRoute } from './base-route';

export class JournalRoute extends BaseRoute {

    protected static journalRoute: JournalRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.get('/getReport', (req, res, next) => {
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
        return '/journal';
    }

    //
    // JournalRoute instance
    public static get instance(): JournalRoute {
        return JournalRoute.journalRoute 
            ? JournalRoute.journalRoute
            : JournalRoute.journalRoute = new JournalRoute();
    }
}