import bodyParser from 'body-parser';

import { AuthController } from '../controllers/auth-controller';
import { Login } from '../models/login';
import { SessionManager } from '../session-manager';
import { BaseRoute } from './base-route';

export class AuthRoute extends BaseRoute {

    protected static authRoute: AuthRoute | undefined = undefined;

    constructor() {
        super();
    }

    protected initRoutes() {

        // const videoApp = VideoAppRoute.Instance;
        // this.AddRoute(videoApp.Path, videoApp.Router);


        this.router.use(bodyParser.json());
        this.router.use(bodyParser.text());
        this.router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
          })); 

        this.router.post('/login', (req, res, next) => {
            console.log(`url:${req?.url}`);
            // const login = req.body as Login;
            // console.log(login);

            const loginParams = new URLSearchParams(req.body);
            const login = Object.fromEntries(loginParams) as Login;
            this.sendResponse(res, AuthController.instance.Login(login));

            // res.json({'response': 123});
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