import { Criteria } from '../rest-service/models/criteria';
import { MockDb } from './mock-db/mock-db';

export class DbController {

    private static authController: DbController;

    public constructor() { 
        console.log('DbController');
    }

    //
    // DbController instance
    public static get instance(): DbController {
        return DbController.authController 
            ? DbController.authController
            : DbController.authController = new DbController();
    }

    //
    // getObjects
    public getObjects(criteria: Criteria): [] | undefined {
        return undefined;
    }

    //
    // getObjects
    public getSchema(typeName: string): object | undefined {
        return MockDb.getSchema(typeName);
    }
}