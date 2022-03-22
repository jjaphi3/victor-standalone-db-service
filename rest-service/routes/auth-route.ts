import bodyParser from 'body-parser';
import { StatusCodes } from 'http-status-codes';

import { AuthController } from '../controllers/auth-controller';
import { Login } from '../models/login';
import { SessionManager } from '../session-manager';
import { Utils } from '../utils';
import { BaseRoute } from './base-route';

export class AuthRoute extends BaseRoute {

    protected static authRoute: AuthRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        // const videoApp = VideoAppRoute.Instance;
        // this.AddRoute(videoApp.Path, videoApp.Router);


        // this.router.use(bodyParser.json());
        // this.router.use(bodyParser.text());
        // this.router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        //     extended: true
        //   })); 

        this.router.post('/login', (req, res, next) => {
            console.log(`url:${req?.url}`);

            const login = Utils.setObjectFromRequestBody(req, new Login()) as Login; 
            const response = AuthController.instance.Login(login);

            if (response.status == StatusCodes.OK) {
                const session = SessionManager.instance.getSessionFromLogin(login);
                if (session) {
                    res.set('session-id', session.sessionId);
                }
            }

            res.status(response.status).json(response.body);
        });

        this.router.post('/logout', (req, res, next) => {
            console.log(`url:${req?.url}`);
            
            const sessionId = req?.get('session-id');
            const response = AuthController.instance.Logout(sessionId);
            if (sessionId) {
                res.set('session-id', sessionId);
            }

            res.status(response.status).json(response.body);
        });

        this.router.all('/*', (req, res, next) => {
            console.log(`${this.path} - unknown endpoint: ${req.method} - ${req.originalUrl}`);
        });
    }

    //
    // path for this route
    public get path(): string {
        return '/authenticate';
    }

    //
    // ApiRoute instance
    public static get instance(): AuthRoute {
        return AuthRoute.authRoute 
            ? AuthRoute.authRoute
            : AuthRoute.authRoute = new AuthRoute();
    }
}