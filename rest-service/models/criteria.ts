export class Criteria { 

    constructor(

        //
        // ObjectTypeFullName
        public typeFullName: string = '',

        //
        // whereClause(Example: "Name = ?")
        public whereClause: string = '',

        //
        // Argument Types
        public argTypes: string[] = [],

        //
        // Arguments for the where clause
        public Arguments: object[] = [],

        //
        // Only the properties that wants to be displayed or returned back
        public displayProperties: string[] = [],

        //
        // Size of the page. Indicates the number of records to be returned
        public loadCollection: number | undefined = undefined,

        //
        // Number of the page to be returned.
        public pageSize: number | undefined = undefined,

        //
        // True to just get count of the records that match the criteria.
        public countOnly: boolean | undefined = undefined,

        //
        // Sort direction
        // Comma seperated string that accepts multiple sort values. Ex: FirstName DESC, ObjectID ASC etc
        public sountOnly: string = '',

        //
        // Type Full name
        public inStatementType: string = '',

        //
        // AND/OR/AND_NOT/OR_NOT/NONE
        public inStatementOperator: string = '',

        //
        // Property Name
        public inStatementPropertyName: string = '',

        //
        // Values for the In statement property
        public inStatementValues: object[] = []
    ) {}
}
