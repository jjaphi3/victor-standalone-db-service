import { AuthRoute } from './auth-route';
import { BaseRoute } from './base-route';
import { GenericRoute } from './generic-route';
import { JournalRoute } from './journal-route';
import { ObjectsRoute } from './objects-route';
import { SchemaRoute } from './schema-route';
import { V2Route } from './v2-route';

export class ApiRoute extends BaseRoute {

    protected static apiRoute: ApiRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        // this.router.use(bodyParser.json());
        // this.router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        //     extended: true
        // })); 

        ApiRoute.setApiRoutes(this);
        this.AddRoute(V2Route.instance);

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/api';
    }

    //
    // ApiRoute instance
    public static get instance(): ApiRoute {
        return ApiRoute.apiRoute 
            ? ApiRoute.apiRoute
            : ApiRoute.apiRoute = new ApiRoute();
    }

    //
    // Set the ApiRoutes (can be set for each version) 
    public static setApiRoutes(router: BaseRoute): void {
        router.AddRoute(AuthRoute.instance);
        router.AddRoute(ObjectsRoute.instance);
        router.AddRoute(GenericRoute.instance);
        router.AddRoute(SchemaRoute.instance);
        router.AddRoute(JournalRoute.instance);
    }
}