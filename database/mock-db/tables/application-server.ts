const typeName = 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServer';
const table = [
    {
        'ClientServerConnectedStatus': 3,
        'HighActivity': false,
        'WebBridgeConnected': false,
        'SynchronizingNormally': false,
        'MonitorState': 1,
        'ObjectID': 5000,
        'AuditScheduleID': null,
        'JournalScheduleID': null,
        'AuditLastUploadedTime': null,
        'JournalLastUploadedTime': null,
        'TimeZoneID': 31,
        'AuditSyncScopeName': null,
        'JournalSyncScopeName': null,
        'AuditUploadedCount': 0,
        'JournalUploadedCount': 0,
        'Name': 'VM-INGRTN-16-15',
        'MachineName': 'VM-INGRTN-16-15',
        'Description': 'VM-INGRTN-16-15',
        'GUID': '69909f6a-6fe2-4549-b398-de4229b8bd6c',
        'LastModifiedByID': 1,
        'LastModifiedTime': '2021-07-26T13:55:21.623Z',
        'IPAddress': '10.160.98.40',
        'Isolated': false,
        'Priority': 1,
        'SynchronizationStatus': 11,
        'Status': 1,
        'Location': null,
        'Uri': 'net.tcp://vm-ingrtn-16-15:8999/CrossFire/IClientSession',
        'RegionID': 1,
        'StartupTime': '2021-07-27T05:50:37.653',
        'SynchronizationQueueSize': 10000,
        'SyncJournalStatus': 0,
        'SyncAuditStatus': 0,
        'WebBridgeState': 0,
        'UnifiedJournalSyncScheduleID': null,
        'SASwaitforMASBoot': 0,
        'RangeStart': 5000,
        'RangeEnd': 8388607,
        'DBRestoreFixupNeeded': false,
        'Versions': 'Access,3,0,0;ACVSCore,4,0,0;POS,5,4,0;Video,5,8,0;',
        'JournalSyncGUID': null,
        'SynchronizationState': 1,
        'SyncProvisionStatus': 0,
        'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServer',
        '*routing': null,
        '*ObjectSize': 468,
        '*id': {
            '_values': [
                5000
            ],
            '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServer',
            '_appServer': 'VM-INGRTN-16-15',
            'Guid': '69909f6a-6fe2-4549-b398-de4229b8bd6c',
            'RoutingInfo': null,
            'ContextId': '00000000-0000-0000-0000-000000000000',
            'TransactionID': null
        },
        '*PK': [
            'ObjectID'
        ],
        '*state': 1,
        '*appServer': 'VM-INGRTN-16-15',
        '*context': '00000000-0000-0000-0000-000000000000',
        '*container': [
            {
                'ObjectID': 5000,
                'AppServerID': 5000,
                'PartitionOwnedID': 1,
                'IsDefaultPartition': true,
                'IsGlobalPartition': false,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.AppServerPartitions',
                '*routing': null,
                '*ObjectSize': 308,
                '*id': {
                    '_values': [
                        5000
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.AppServerPartitions',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '00000000-0000-0000-0000-000000000000',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000',
                '*container': []
            }
        ]
    }
];

export { typeName, table };