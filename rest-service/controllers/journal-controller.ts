import { StatusCodes } from 'http-status-codes';
import { DbController } from '../../database/db-controller';
import { Criteria } from '../models/criteria';
import { HttpResponse } from '../models/http-response';

export class JournalController {

    private static journalController: JournalController;

    public constructor() { 
        console.log('JournalController');
    }

    //
    // GenericController instance
    public static get instance(): JournalController {
        return JournalController.journalController 
            ? JournalController.journalController
            : JournalController.journalController = new JournalController();
    }

    //
    //  Gets all the reports that can be run.
    public getReports(): HttpResponse {
        console.log('JournalController:getReports');
        const criteria = new Criteria('Reports');
        const reports = DbController.instance.getObjects(criteria);
        if (reports) {
            return new HttpResponse(StatusCodes.OK, reports);
        }
        return new HttpResponse(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}