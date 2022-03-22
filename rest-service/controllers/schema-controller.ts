import { StatusCodes } from 'http-status-codes';
import { DbController } from '../../database/db-controller';
import { HttpResponse } from '../models/http-response';

export class SchemaController {

    private static schemaController: SchemaController;

    public constructor() { 
        console.log('SchemaController');
    }

    //
    // GenericController instance
    public static get instance(): SchemaController {
        return SchemaController.schemaController 
            ? SchemaController.schemaController
            : SchemaController.schemaController = new SchemaController();
    }

    //
    // Gets a description of the schema for a given class type.
    public get(typeName: string): HttpResponse {
        console.log(`schemaController:get: ${typeName}`);
        const schema = DbController.instance.getSchema(typeName);
        if (schema) {
            return new HttpResponse(StatusCodes.OK, schema);
        }
        return new HttpResponse(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}