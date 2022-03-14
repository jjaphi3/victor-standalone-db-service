import { StatusCodes } from 'http-status-codes';
import { HttpResponse } from '../models/http-response';
import { version } from '../../package.json';

export class GenericController {

    private static genericController: GenericController;

    public constructor() { 
        console.log('GenericController');
    }

    //
    // GenericController instance
    public static get instance(): GenericController {
        return GenericController.genericController 
            ? GenericController.genericController
            : GenericController.genericController = new GenericController();
    }

    //
    // Gets the version of web service.
    public version(): HttpResponse {
        console.log('version');
        return new HttpResponse(StatusCodes.OK, version);
    }

    //
    // Gets the version of web service.
    public versions(): HttpResponse {
        console.log('versions');
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }
}