import { SystemVariablesController } from '../controllers/system-variable-controller';
import { Utils } from '../utils';
import { BaseRoute } from './base-route';

export class SystemVariableRoute extends BaseRoute {

    protected static systemVariableRoute: SystemVariableRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.get('/', (req, res, next) => {

            type SystemVariablesParams = {
                name: string;
            };

            const systemVariablesParams = req.query as SystemVariablesParams;
            if (systemVariablesParams.name) {
                const response = SystemVariablesController.instance.get(systemVariablesParams.name);
                this.sendResponse(req, res, response);
            }
            else {
                const response = SystemVariablesController.instance.getAll();
                this.sendResponse(req, res, response);  
            }          
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/systemVariables';
    }

    //
    // SystemVariableRoute instance
    public static get instance(): SystemVariableRoute {
        return SystemVariableRoute.systemVariableRoute 
            ? SystemVariableRoute.systemVariableRoute
            : SystemVariableRoute.systemVariableRoute = new SystemVariableRoute();
    }
}