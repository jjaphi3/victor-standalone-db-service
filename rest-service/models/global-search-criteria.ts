import { Criteria } from './criteria';

export class GlobalSearchCriteria extends Criteria { 

    constructor(

        //
        // ObjectTypeFullName
        typeFullName = '',

        //
        // whereClause(Example: "Name = ?")
        whereClause = '',

//
        // Argument Types
        argTypes: string[] = [],

        //
        // Arguments for the where clause
        Arguments: object[] = [],

        //
        // Only the properties that wants to be displayed or returned back
        displayProperties: string[] = [],

        //
        // Size of the page. Indicates the number of records to be returned
        loadCollection: number | undefined = undefined,

        //
        // Number of the page to be returned.
        pageSize: number | undefined = undefined,

        //
        // True to just get count of the records that match the criteria.
        countOnly: boolean | undefined = undefined,

        //
        // types to be included.
        public types: string[] = [],

        //
        // ??.
        public queryType: string = '',

        //
        // 
        public query: string = ''
    ) {
        super(typeFullName, whereClause, argTypes, Arguments, displayProperties, loadCollection, pageSize, countOnly);
    }
}
