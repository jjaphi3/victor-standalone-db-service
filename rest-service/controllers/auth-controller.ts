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

        if (!login.username) {
            return new HttpResponse(StatusCodes.BAD_REQUEST, { 'Message':'Invalid Username'});
        }
        if (!login.password) {
            return new HttpResponse(StatusCodes.BAD_REQUEST, { 'Message':'Invalid Password'});
        }
        if (!login.clientName) {
            return new HttpResponse(StatusCodes.BAD_REQUEST, { 'Message':'The name of the client for the connection is invalid'});
        }
        if (!login.clientId) {
            return new HttpResponse(StatusCodes.BAD_REQUEST, { 'Message':'The clientID for the client is invalid'});
        }

        const session = SessionManager.instance.getSessionFromLogin(login);
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
    public Logout(sessionId: string | undefined): HttpResponse {
        console.log('Logout');

        const session = SessionManager.instance.getSessionFromId(sessionId);
        if (session) {
            SessionManager.instance.removeSession(session);
            return new HttpResponse(StatusCodes.OK, {'Error':'','Response':'Success'});
        }

        return new HttpResponse(StatusCodes.INTERNAL_SERVER_ERROR, 'Error logging out');
    }

}