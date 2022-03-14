import { StatusCodes } from 'http-status-codes';
import { HttpResponse } from '../models/http-response';
import { Login } from '../models/login';
import { SessionManager } from '../session-manager';

export class AuthController {

    private static authController: AuthController;

    public constructor() { 
        console.log('AuthController');
    }

    //
    // ObjectsController instance
    public static get instance(): AuthController {
        return AuthController.authController 
            ? AuthController.authController
            : AuthController.authController = new AuthController();
    }

    //
    // Logs into the system using the data passed in the Login object. 
    public Login(login: Login): HttpResponse {
        console.log(`Login:${login}`);

        const session = SessionManager.instance.getSession(login);
        if (session) {
            return new HttpResponse(StatusCodes.OK, session.sessionId);
        } 
        return new HttpResponse(StatusCodes.UNAUTHORIZED);
    }

    //
    // Custom Login into the system using the userName and password, and customKey passed in.
    // Note, this is only used in unusual cases where login is not by a normal operator.
    public LoginCustom(login: Login): HttpResponse {
        console.log(`Login:${login}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Logs into the system using the data passed in the Login object. 
    public Logout(): HttpResponse {
        console.log('Logout');
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

}