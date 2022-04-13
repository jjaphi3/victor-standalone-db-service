import { GenericController } from '../controllers/generic-controller';
import { SessionManager } from '../session-manager';
import { Utils } from '../utils';
import { BaseRoute } from './base-route';

export class GenericRoute extends BaseRoute {

    protected static genericRoute: GenericRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        this.router.route('/version')
            .get((req, res, next) => {
                console.log(`url:${req?.url}`);
                this.sendResponse(req, res, GenericController.instance.version());
            }).post((req, res, next) => {
                console.log(`url:${req?.url}`);
                this.sendResponse(req, res, GenericController.instance.version());
            });
        
        this.router.post('/executeCrossfireMethod', (req, res, next) => {

            type XfireMethodQueryParams = {
                requestService: string;
                methodName: string;
            };
            type ArgumentValuesParams = {
                ArgumentValues: string;
            };

            const requestParams: XfireMethodQueryParams = req.query as XfireMethodQueryParams;
            const methodArgsParams = new URLSearchParams(req.body);
            const methodArgsValues = Utils.fromParams(methodArgsParams) as ArgumentValuesParams;

            // methodArgsValues.ArgumentValues = methodArgsValues.ArgumentValues?.replaceAll('\\r\\n', '');
            let args = {};
            try {
                args = JSON.parse(methodArgsValues.ArgumentValues);
            }
            catch (e) {
                console.log(`JSON.parse(methodArgsValues.ArgumentValues) Exception:${e}`);
            }

            const response = GenericController.instance.executeCrossfireMethod(requestParams.requestService, requestParams.methodName, args);
            this.sendResponse(req, res, response);
        });

        this.router.get('/isCCureLicensed', (req, res, next) => {
            this.sendResponse(req, res, GenericController.instance.isCCureLicensed());
        });

        this.router.get('/culture', (req, res, next) => {

            type CultureQueryParams = {
                culture: string;
            };
            const requestParams: CultureQueryParams = req.query as CultureQueryParams;
            const session = SessionManager.instance.getSessionFromRequest(req);
            const response = GenericController.instance.setCulture(session, requestParams.culture);
            this.sendResponse(req, res, response);
        });

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/generic';
    }

    //
    // GenericRoute instance
    public static get instance(): GenericRoute {
        return GenericRoute.genericRoute 
            ? GenericRoute.genericRoute
            : GenericRoute.genericRoute = new GenericRoute();
    }
}