export type Criteria = {

    //
    // ObjectTypeFullName
    typeFullName: string;

    //
    // whereClause(Example: "Name = ?")
    whereClause: string;

    //
    // Argument Types
    argTypes: string[];

    //
    // Arguments for the where clause
    arguments: object[];

    //
    // Only the properties that wants to be displayed or returned back
    displayProperties: string[];

    //
    // Size of the page. Indicates the number of records to be returned
    loadCollection: number;

    //
    // Number of the page to be returned.
    pageSize: number;

    //
    // True to just get count of the records that match the criteria.
    countOnly: boolean;

    //
    // Sort direction
    // Comma seperated string that accepts multiple sort values. Ex: FirstName DESC, ObjectID ASC etc
    sountOnly: string;

    //
    // Type Full name
    inStatementType: string;

    //
    // AND/OR/AND_NOT/OR_NOT/NONE
    inStatementOperator: string;

    //
    // Property Name
    inStatementPropertyName: string;

    //
    // Values for the In statement property
    inStatementValues: object[];
}
