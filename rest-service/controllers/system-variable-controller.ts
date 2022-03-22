import { StatusCodes } from 'http-status-codes';
import { DbController } from '../../database/db-controller';
import { Criteria } from '../models/criteria';
import { HttpResponse } from '../models/http-response';

export class SystemVariablesController {

    private static systemVariablesController: SystemVariablesController;

    public constructor() { 
        console.log('SchemaController');
    }

    //
    // SystemVariablesController instance
    public static get instance(): SystemVariablesController {
        return SystemVariablesController.systemVariablesController 
            ? SystemVariablesController.systemVariablesController
            : SystemVariablesController.systemVariablesController = new SystemVariablesController();
    }

    //
    // Gets all system varibles 
    public getAll(): HttpResponse {
        console.log('SystemVariablesController:getAll');

        const criteria = new Criteria('SoftwareHouse.CrossFire.Common.Objects.SystemVariables');
        const systemVariables = DbController.instance.getObjects(criteria);
        if (systemVariables) {
            return new HttpResponse(StatusCodes.OK, systemVariables);
        }
        return new HttpResponse(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    //
    // Gets system varible with name.
    public get(name: string): HttpResponse {
        console.log(`SystemVariablesController:get: ${name}`);

        const criteria = new Criteria('SoftwareHouse.CrossFire.Common.Objects.SystemVariables', 'Name = ?', [name]);
        const systemVariables = DbController.instance.getObjects(criteria);
        if (systemVariables) {
            return new HttpResponse(StatusCodes.OK, systemVariables);
        }
        return new HttpResponse(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}