import { JournalController } from '../controllers/journal-controller';
import { BaseRoute } from './base-route';

export class JournalRoute extends BaseRoute {

    protected static journalRoute: JournalRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.get('/getReports', (req, res, next) => {
            console.log(`url:${req?.url}`);

            const response = JournalController.instance.getReports();
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