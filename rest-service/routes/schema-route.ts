import { SchemaController } from '../controllers/schema-controller';
import { Utils } from '../utils';
import { BaseRoute } from './base-route';

export class SchemaRoute extends BaseRoute {

    protected static schemaRoute: SchemaRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.post('/', (req, res, next) => {

            type ClassType = {
                classType: string;
            };

            const schemaClassType: ClassType = Utils.getObjectFromFormData(req) as ClassType;
            const response = SchemaController.instance.get(schemaClassType.classType);
            this.sendResponse(req, res, response);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/schema';
    }

    //
    // SchemaRoute instance
    public static get instance(): SchemaRoute {
        return SchemaRoute.schemaRoute 
            ? SchemaRoute.schemaRoute
            : SchemaRoute.schemaRoute = new SchemaRoute();
    }
}