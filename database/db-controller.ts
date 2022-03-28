import { Criteria } from '../rest-service/models/criteria';
import { MockDb } from './mock-db/mock-db';
import * as NodeSqlParser from 'node-sql-parser';
import { ObjectFilter } from '../rest-service/models/object-filer';
export class DbController {

    private static authController: DbController;

    public constructor() { 
        console.log('DbController');
    }

    private filterObjects(filter: ObjectFilter, table: unknown[]): unknown[] {

        if (filter.type == 'binary_expr') { 

            if (filter.left.type == 'column_ref') {
                table = this.applyFilter(filter.left.column, filter.right.value, filter.operator, table);
            }
            else if (filter.left.type == 'binary_expr' && filter.right.type == 'binary_expr') {
                if (filter.operator.toLowerCase() == 'and') {
                    table = this.filterObjects(filter.left, table);
                    table = this.filterObjects(filter.right, table);
                }
                else if (filter.operator.toLowerCase() == 'or') {
                    const leftTable = this.filterObjects(filter.left, table);
                    table = this.filterObjects(filter.right, table).concat(leftTable);
                }
            }
        }
        else {
            console.log('DbController.filterObjects error');
        }
        return table;
    }

    private applyFilter(column: string, value: string | number | boolean, operator: string, table: unknown[]): unknown[] {
        
        const records = table as Record<string, string | number | boolean>[];

        table.find(i => {
            const columnName = Object.keys(i as object).find(k => k.toLowerCase() == column.toLowerCase());
            if (columnName) {
                // ignoere the case
                column = columnName;
                return true;
            }
            return false;
        });

        if (operator == '=') {
            return records.filter(i => i[column] == value);
        }
        else if (operator == '>') {
            return records.filter(i => i[column] > value);
        }
        else if (operator == '<') {
            return records.filter(i => i[column] < value);
        }
        else if (operator == '>=') {
            return records.filter(i => i[column] >= value);
        }
        else if (operator == '<=') {
            return records.filter(i => i[column] >= value);
        }
        else if (operator == '<>') {
            return records.filter(i => i[column] != value);
        }
        return table;
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
    public getObjects(criteria: Criteria): unknown[] | undefined {

        const isString = (value: string | object) => {
            value = value as string;
            if (value &&
                (!Number.isNaN(Number(value)) || 
                (value.toLowerCase() == 'true' || value.toLowerCase() == 'false'))) {
                return false;
            }
            return true;
        };

        if (criteria?.typeFullName) {
            const objects = MockDb.getTable(criteria.typeFullName);
            if (objects) {
                if (criteria.whereClause) {
                    console.log(`whereClause: ${criteria.whereClause}, Arguments: ${criteria.Arguments}`);

                    let where = criteria.whereClause;
                    if (criteria.Arguments) {
                        if (Array.isArray(criteria.Arguments)) {
                            for (const arg of criteria.Arguments) {
                                where = isString(arg) ? 
                                    where.replace('?', `'${arg}'`) :
                                    where.replace('?', `${arg}`) 
                                    ;
                            }
                        }
                        else if ((where.indexOf('?') > 0) && (criteria.Arguments)) {
                             where = isString(criteria.Arguments) ? 
                                    where.replace('?', `'${criteria.Arguments}'`) :
                                    where.replace('?', `${criteria.Arguments}`) 
                        }
                    }
                    const parser = new NodeSqlParser.Parser();
                    try {
                        type astWhere = { 
                            where: ObjectFilter;
                        };
                        const ast = parser.parse(`SELECT * FROM _table_ WHERE ${where}`)?.ast as astWhere;
                        return this.filterObjects(ast.where, objects);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
            return objects;
        }

        return undefined;
    }

    //
    // getSortedObjects 
    public getSortedObjects(criteria: Criteria, columns: string[], sortColumn: string ): unknown[] | undefined {
        const objects = this.getObjects(criteria);

        if (objects && columns) {
            for (const object of objects) {
                if (object instanceof Object) {
                    const o = object as Record<string, unknown>;
                    const extraColumns = Object.keys(object).filter(k => !columns.includes(k));
                    extraColumns.forEach(c => delete o[c]);
                }
            }
        }
        if (objects && sortColumn) {
            objects.sort((a, b) => {
                const ra = a as Record<string, string | number | boolean>;
                const rb = b as Record<string, string | number | boolean>;
                return ra[sortColumn] < rb[sortColumn] ? 1 : -1;
            });
        }
        return objects;
    }


    //
    // getSchema
    public getSchema(typeName: string): object | undefined {
        return MockDb.getSchema(typeName);
    }
}