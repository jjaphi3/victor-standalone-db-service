


import * as coreOperatorRolePair from './tables/core-operator-role-pair';
import * as coreRole from './tables/core-role';
import * as operatorPrivilagePair from './tables/operator-privilege-pair';
import * as operator from './tables/operator';
import * as partition from './tables/partition';
import * as privilege from './tables/privilege';
import * as timeSpec from './tables/time-spec';
import * as weblayout from './tables/web-layout';
import * as reports from './tables/reports';

import * as apcControllerSchema from './tables/schema/apc-controller';
import * as apcDoorSchema from './tables/schema/apc-door';
import * as clusterSchema from './tables/schema/cluster';
import * as istarControllerSchema from './tables/schema/istar-controller';
import * as istarDoorSchema from './tables/schema/istar-door';
import * as istarInputSchema from './tables/schema/istar-input';


export class MockDb {

    private static tables: Map<string, unknown[]> = new Map<string, unknown[]>();
    private static schema: Map<string, object> = new Map<string, object>();

    public static getTable(typename: string): unknown[] | undefined {
        return MockDb.tables.get(typename);
    }

    public static getSchema(typename: string): object | undefined {
        return MockDb.schema.get(typename);
    }

    public static initialise(): void {
        console.log('initialising moke db...');

        MockDb.initialiseTables();
        MockDb.initialiseSchema();
    }   

    private static initialiseTables(): void {
        MockDb.tables.set(coreOperatorRolePair.typeName, coreOperatorRolePair.table);
        MockDb.tables.set(coreRole.typeName, coreRole.table);
        MockDb.tables.set(operatorPrivilagePair.typeName, operatorPrivilagePair.table);
        MockDb.tables.set(operator.typeName, operator.table);
        MockDb.tables.set(partition.typeName, partition.table);
        MockDb.tables.set(privilege.typeName, privilege.table);
        MockDb.tables.set(timeSpec.typeName, timeSpec.table);
        MockDb.tables.set(weblayout.typeName, weblayout.table);
        MockDb.tables.set(reports.typeName, reports.table);

        
        MockDb.tables.set('SoftwareHouse.CrossFire.Common.Objects.OperatorWebLayoutPair', []);
    }

    private static initialiseSchema(): void {

        MockDb.schema.set(apcControllerSchema.typeName, apcControllerSchema.schema);
        MockDb.schema.set(apcDoorSchema.typeName, apcDoorSchema.schema);
        MockDb.schema.set(clusterSchema.typeName, apcDoorSchema.schema);
        MockDb.schema.set(istarControllerSchema.typeName, istarControllerSchema.schema);
        MockDb.schema.set(istarDoorSchema.typeName, istarDoorSchema.schema);
        MockDb.schema.set(istarInputSchema.typeName, istarInputSchema.schema);
    }
}

MockDb.initialise();