


import * as coreOperatorRolePair from './tables/core-operator-role-pair';
import * as coreRole from './tables/core-role';
import * as operatorPrivilagePair from './tables/operator-privilege-pair';
import * as operator from './tables/operator';
import * as partition from './tables/partition';
import * as privilege from './tables/privilege';
import * as timeSpec from './tables/time-spec';
import * as weblayout from './tables/web-layout';
import * as reports from './tables/reports';
import * as test from './tables/test-table';
import * as systemVariables from './tables/system-varibles';
import * as hdvrCamera from './tables/hdvr-camera';
import * as hdvrServer from './tables/hdvr-server';
import * as videoEdge4VideoCamera from './tables/video-edge-4-video-camera';
import * as videoEdge4Server from './tables/video-edge-4-server';
import * as tourView from './tables/tour-view';
import * as videoTour from './tables/video-tour';
import * as applicationServer from './tables/application-server';

import * as apcControllerSchema from './tables/schema/apc-controller';
import * as apcDoorSchema from './tables/schema/apc-door';
import * as clusterSchema from './tables/schema/cluster';
import * as istarControllerSchema from './tables/schema/istar-controller';
import * as istarDoorSchema from './tables/schema/istar-door';
import * as istarInputSchema from './tables/schema/istar-input';
import * as personnel from './tables/schema/personnel';
import * as personnelType from './tables/schema/personnel-type';
import * as clearance from './tables/schema/clearance';
import * as apcInput from './tables/schema/apc-input';
import * as apcReader from './tables/schema/apc-reader';
import * as istarReader from './tables/schema/istar-reader';
import * as output from './tables/schema/output';
import * as xfEvent from './tables/schema/xf-event';
import * as group from './tables/schema/group';

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
        MockDb.tables.set(systemVariables.typeName, systemVariables.table);
        MockDb.tables.set(hdvrCamera.typeName, hdvrCamera.table);
        MockDb.tables.set(videoEdge4VideoCamera.typeName, videoEdge4VideoCamera.table);
        MockDb.tables.set(tourView.typeName, tourView.table);
        MockDb.tables.set(videoTour.typeName, videoTour.table);
        MockDb.tables.set(applicationServer.typeName, applicationServer.table);
        MockDb.tables.set(videoEdge4Server.typeName, videoEdge4Server.table);
        MockDb.tables.set(hdvrServer.typeName, hdvrServer.table);

        MockDb.tables.set(test.typeName, test.table);

        
        MockDb.tables.set('SoftwareHouse.CrossFire.Common.Objects.OperatorWebLayoutPair', []);
    }

    private static initialiseSchema(): void {

        MockDb.schema.set(apcControllerSchema.typeName, apcControllerSchema.schema);
        MockDb.schema.set(apcDoorSchema.typeName, apcDoorSchema.schema);
        MockDb.schema.set(clusterSchema.typeName, apcDoorSchema.schema);
        MockDb.schema.set(istarControllerSchema.typeName, istarControllerSchema.schema);
        MockDb.schema.set(istarDoorSchema.typeName, istarDoorSchema.schema);
        MockDb.schema.set(istarInputSchema.typeName, istarInputSchema.schema);
        MockDb.schema.set(personnel.typeName, personnel.schema);
        MockDb.schema.set(personnelType.typeName, personnelType.schema);
        MockDb.schema.set(clearance.typeName, clearance.schema);
        MockDb.schema.set(apcInput.typeName, apcInput.schema);
        MockDb.schema.set(apcReader.typeName, apcReader.schema);
        MockDb.schema.set(istarReader.typeName, istarReader.schema);
        MockDb.schema.set(output.typeName, output.schema);
        MockDb.schema.set(xfEvent.typeName, xfEvent.schema);
        MockDb.schema.set(group.typeName, group.schema);
    }
}

MockDb.initialise();