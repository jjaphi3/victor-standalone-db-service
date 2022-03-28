export type ObjectFilter = {

    //
    // 'binary_expr', 'column_ref' or 'single_quote_string'
    type: string;

    //
    // SQL operator
    operator: string;

    //
    // left side of expression
    left: ObjectFilter;

    // right side of expression 
    right: ObjectFilter;

    //
    // if type == 'column_ref' column name
    column: string;

    //
    // if type == 'single_quote_string' value
    value: string;
};