import { StatusCodes } from 'http-status-codes';
import { HttpResponse } from '../models/http-response';
import { version } from '../../package.json';
import { Session } from '../models/login';

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

    //
    // This method makes a ServiceRequest call to CrossFire
    public executeCrossfireMethod(serviceName: string, methodName: string, args: object): HttpResponse {
        if (serviceName == 'SoftwareHouse.CrossFire.Common.Shared.IConsentAuthority') {
            if (methodName == 'IsOptionLicensed') {
                return new HttpResponse(StatusCodes.OK, true);
            }
        }
        else if(serviceName == 'SoftwareHouse.NextGen.Common.SecurityObjects.SystemVariable') {
            if (methodName == 'GetSystemMaxClearPerGlobalPerson') {
                return new HttpResponse(StatusCodes.OK, 0);
            }
        }

        return new HttpResponse(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    //
    // Gets the request if system is licensed for CCure.
    public isCCureLicensed(): HttpResponse {
        return new HttpResponse(StatusCodes.OK, true);
    }

    //
    // Set the culture.
    public setCulture(session: Session | undefined, culture: string): HttpResponse {

        if (session) {
            session.culture = culture;
            return new HttpResponse(StatusCodes.OK, 'Culture changed successfully');
        }
        return new HttpResponse(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}