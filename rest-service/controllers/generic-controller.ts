import { StatusCodes } from 'http-status-codes';
import { HttpResponse } from '../models/http-response';
import { version } from '../../package.json';
import { Session } from '../models/login';
import { Criteria } from '../models/criteria';
import { DbController } from '../../database/db-controller';

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
        else if (serviceName == 'SoftwareHouse.CrossFire.Common.Shared.IEnhancedDataAccessService') {
            if (methodName == 'FindCollection') {

                type FindCollectionCriteria = {
                    args: object[];
                    className: string;
                    explicitPropertyList: unknown;
                    pageNumber: number;
                    pageSize: number;
                    propertyList: string[];
                    sortColumnName: string;
                    whereClause: string;
                };
                const findCollectionCriteria = args as FindCollectionCriteria;
                const criteria = new Criteria(findCollectionCriteria.className, findCollectionCriteria.whereClause, undefined, findCollectionCriteria.args);
                const objects = DbController.instance.getSortedObjects(criteria, findCollectionCriteria.propertyList, findCollectionCriteria.sortColumnName);
                return new HttpResponse(StatusCodes.OK, objects);

            }
            else if (methodName == 'GetLookupIdValues') {
                return new HttpResponse(StatusCodes.OK, [
                    {
                        'TypeName': 'SoftwareHouse.CrossFire.Common.Objects.Partition',
                        'Value': 1,
                        'DisplayName': 'Default',
                        '__propertyType': 'lookup'
                    }
                ]);
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