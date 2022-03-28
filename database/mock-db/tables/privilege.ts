const typeName = 'SoftwareHouse.CrossFire.Common.Objects.Privilege';
const table = [
    {
        'IsSystemPrivilege': true,
        'ClientExclusionList': '',
        'Enabled': true,
        'Protected': true,
        'RequiresManualActionChallenge': false,
        'DefaultRecord': false,
        'Template': false,
        'ManualActionsDefaultPriority': 50,
        'ManualActionsMaximumPriority': 100,
        'PartitionAll': false,
        'SpecialEditingRequired': false,
        'IntrObjectID': 1,
        'ExcludedClientTypes': null,
        'ActiveTemplateID': null,
        'ActiveTemplate': false,
        'PartitionID': 1,
        'LocationMetaTagFullName': '',
        'GISLocation': false,
        'GeographicLocation': null,
        'Name': 'SYSTEM ALL',
        'Description': 'Access to every object in the system.',
        'ObjectID': 1,
        'GUID': 'e645fa61-7e3e-404d-9f63-eca7197019ff',
        'LastModifiedByID': 1,
        'LastModifiedTime': '2021-07-26T13:53:38.567Z',
        'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
        '*routing': null,
        '*ObjectSize': 345,
        '*id': {
            '_values': [
                1
            ],
            '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
            '_appServer': 'VM-INGRTN-16-15',
            'Guid': 'e645fa61-7e3e-404d-9f63-eca7197019ff',
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
    },
    {
        'IsSystemPrivilege': true,
        'ClientExclusionList': '',
        'Enabled': true,
        'Protected': true,
        'RequiresManualActionChallenge': false,
        'DefaultRecord': false,
        'Template': false,
        'ManualActionsDefaultPriority': 75,
        'ManualActionsMaximumPriority': 100,
        'PartitionAll': false,
        'SpecialEditingRequired': true,
        'IntrObjectID': 104,
        'ExcludedClientTypes': null,
        'ActiveTemplateID': null,
        'ActiveTemplate': false,
        'PartitionID': 1,
        'LocationMetaTagFullName': '',
        'GISLocation': false,
        'GeographicLocation': null,
        'Name': 'Access to Options And Tools',
        'Description': 'This privilege gives access to all of the options on the "Options and Tools" tab. Use "Create Copy" to create a custom version of ths privilege.',
        'ObjectID': 104,
        'GUID': '11bb3672-6dd6-4412-8973-7eb71aac9533',
        'LastModifiedByID': 5000,
        'LastModifiedTime': '2013-06-02T21:22:20.577Z',
        'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
        '*routing': null,
        '*ObjectSize': 469,
        '*id': {
            '_values': [
                104
            ],
            '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
            '_appServer': 'VM-INGRTN-16-15',
            'Guid': '11bb3672-6dd6-4412-8973-7eb71aac9533',
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
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 405,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationLayout.ApplicationLayoutClientComponent',
                'GUID': '7f309b47-73f3-4afe-aca9-004396055e1e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.917Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationLayout',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PrintExecutor</Name><Position>14</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.SendEmailExecutor</Name><Position>15</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.CopyAndPasteRowsExecutor</Name><Position>16</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3052,
                '*id': {
                    '_values': [
                        405
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '7f309b47-73f3-4afe-aca9-004396055e1e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 406,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcStarCouplerWPSCComponent.ApcStarCouplerWPSCClientComponent',
                'GUID': 'df87e6da-98d6-469a-b7aa-010fb3b680f0',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.943Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerWPSC',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2372,
                '*id': {
                    '_values': [
                        406
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'df87e6da-98d6-469a-b7aa-010fb3b680f0',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 407,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CardFormatComponent.CardFormatClientComponent',
                'GUID': 'a971ac30-5b27-4b0d-8aca-0129c729d5ba',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.943Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CardFormat',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1893,
                '*id': {
                    '_values': [
                        407
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'a971ac30-5b27-4b0d-8aca-0129c729d5ba',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 408,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CHUIDFormat.CHUIDFormatClientComponent',
                'GUID': 'dcf43c6d-9a7b-40f5-b797-039d52a55df9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.947Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CHUIDFormat',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.CHUIDFormat.DeleteExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1740,
                '*id': {
                    '_values': [
                        408
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'dcf43c6d-9a7b-40f5-b797-039d52a55df9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 409,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Schedules.RecurringScheduleClientComponent',
                'GUID': '06926124-98b5-47dd-84fe-068dbfb23dcc',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.947Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.RecurringSchedule',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Schedules.PreviewActivationTimesExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2343,
                '*id': {
                    '_values': [
                        409
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '06926124-98b5-47dd-84fe-068dbfb23dcc',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 410,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.BadgeLayout.BadgeLayoutClientComponent',
                'GUID': '2739d452-81cd-4719-8eab-06c6b185d295',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.947Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'CCUREIDBadgeData.BadgeLayout',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.BadgeLayout.EditDesignExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2008,
                '*id': {
                    '_values': [
                        410
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '2739d452-81cd-4719-8eab-06c6b185d295',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 411,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.GuardTourSchedulingClientComponent',
                'GUID': '30a40db3-84c8-4555-b654-07e0918a7d21',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.95Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.GuardTourScheduling',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1609,
                '*id': {
                    '_values': [
                        411
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '30a40db3-84c8-4555-b654-07e0918a7d21',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 412,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ImportExportHistory.ImportExportHistoryClientComponent',
                'GUID': '5eee0f93-2245-41a7-b474-0a3ef0e1224a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.95Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 925,
                '*id': {
                    '_values': [
                        412
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '5eee0f93-2245-41a7-b474-0a3ef0e1224a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 413,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.VideoTourClientComponent',
                'GUID': 'aee2358b-4eb1-4a9f-b1a2-0aa22bdbd961',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.95Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.VideoTour',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2450,
                '*id': {
                    '_values': [
                        413
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'aee2358b-4eb1-4a9f-b1a2-0aa22bdbd961',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 414,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Holidays.HolidaysClientComponent',
                'GUID': '0fbb6524-d1b5-436b-8295-0ad60ac2e106',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.953Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Holiday',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2166,
                '*id': {
                    '_values': [
                        414
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0fbb6524-d1b5-436b-8295-0ad60ac2e106',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 415,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.iSTARAperioReaderClientComponent',
                'GUID': '31e9ca31-1cbe-4cb3-ae41-0b6b396795f5',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.953Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iSTARAperioReader',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnablePinCauseListExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.ShowClearanceFilterCauseListExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2965,
                '*id': {
                    '_values': [
                        415
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '31e9ca31-1cbe-4cb3-ae41-0b6b396795f5',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 416,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Email.EmailClientComponent',
                'GUID': '3d827602-d013-4a62-9ba4-0c992c155130',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.953Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 897,
                '*id': {
                    '_values': [
                        416
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3d827602-d013-4a62-9ba4-0c992c155130',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 417,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerRegionClientComponent',
                'GUID': 'd261bf63-e434-4430-ae86-0d989493e66e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.96Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 927,
                '*id': {
                    '_values': [
                        417
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd261bf63-e434-4430-ae86-0d989493e66e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 418,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerClientComponent',
                'GUID': '8373a813-0fbc-487c-91df-0efc4b2f03b7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.96Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServer',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerConnection</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerSyncConflicts</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerClientComponent.ApplicationServerSyncConflicts</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2005,
                '*id': {
                    '_values': [
                        418
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8373a813-0fbc-487c-91df-0efc4b2f03b7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 419,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarAperioHubBoardComponent.IStarAperioHubBoardClientComponent',
                'GUID': 'd46b307d-f8f0-4472-89e7-10cdbff7965b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.963Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarAperioHubBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2375,
                '*id': {
                    '_values': [
                        419
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd46b307d-f8f0-4472-89e7-10cdbff7965b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 420,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarInputBoardComponent.IStarInputBoardClientComponent',
                'GUID': 'bed5e679-9e5a-4351-869a-159e99d42ef8',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.963Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInputBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2363,
                '*id': {
                    '_values': [
                        420
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'bed5e679-9e5a-4351-869a-159e99d42ef8',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 421,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Client.BiDirectionalMonitoringPointClientComponent',
                'GUID': 'b4d9b4ab-0eb5-43e3-9047-16cf96b894ae',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.967Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Objects.BiDirectionalMonitoringPoint',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2069,
                '*id': {
                    '_values': [
                        421
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b4d9b4ab-0eb5-43e3-9047-16cf96b894ae',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 422,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarUltraACMBoardComponent.IStarUltraACMBoardClientComponent',
                'GUID': 'd7019010-642e-419a-b6eb-197eb98b4802',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.967Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarUltraACMBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2372,
                '*id': {
                    '_values': [
                        422
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd7019010-642e-419a-b6eb-197eb98b4802',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 423,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Client.BiDirectionalFolderClientComponent',
                'GUID': '043aa17d-cd30-4a35-9750-1d0ee2b855cd',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.97Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Objects.BiDirectionalFolder',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1901,
                '*id': {
                    '_values': [
                        423
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '043aa17d-cd30-4a35-9750-1d0ee2b855cd',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 424,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ISCBoardComponent.IscBoardClientComponent',
                'GUID': '4c0b0756-7562-40af-a5c7-1d4c687afa6e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.97Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1752,
                '*id': {
                    '_values': [
                        424
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4c0b0756-7562-40af-a5c7-1d4c687afa6e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 425,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ISCInputClientComponent',
                'GUID': 'ce85a3d4-0ab9-4b60-8d68-1dd9c37be84d',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.973Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCInput',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ArmInput</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.DisArmInput</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2026,
                '*id': {
                    '_values': [
                        425
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ce85a3d4-0ab9-4b60-8d68-1dd9c37be84d',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 426,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.iStarDoorClientComponent',
                'GUID': '035d4ef0-c184-41e9-b544-1f08b9dd0810',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.973Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarDoor',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.LockDoor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.UnlockDoor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.iStarDoorLockedCauseListExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.iStarMomentUnlockDoorExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2624,
                '*id': {
                    '_values': [
                        426
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '035d4ef0-c184-41e9-b544-1f08b9dd0810',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 427,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarOutputBoardComponent.IStarOutputBoardClientComponent',
                'GUID': '198f7ef2-5fb1-4edb-a4cc-1f25eb59257f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.977Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarOutputBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2366,
                '*id': {
                    '_values': [
                        427
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '198f7ef2-5fb1-4edb-a4cc-1f25eb59257f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 428,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Operators.OperatorsClientComponent',
                'GUID': 'fe469a29-1f11-45e3-9780-1fb4c868a43e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.98Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Operator',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Operators.OperatorsClientComponent+ChangeOperatorPartitionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Operators.OperatorsClientComponent+AddPrivilegeExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Operators.OperatorsClientComponent+RemovePrivilegeExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2550,
                '*id': {
                    '_values': [
                        428
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fe469a29-1f11-45e3-9780-1fb4c868a43e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 429,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.CCTVCameraClientComponent',
                'GUID': 'e30fc5f5-8f97-43d0-94a0-1feda25e170b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.98Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.CCTVCamera',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.VideoClientComponents.SentToMonitor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2009,
                '*id': {
                    '_values': [
                        429
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'e30fc5f5-8f97-43d0-94a0-1feda25e170b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 430,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.FloorComponent.FloorClientComponent',
                'GUID': '2c9a3226-4407-419f-903d-23ae9b5d7477',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.983Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Floor',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2333,
                '*id': {
                    '_values': [
                        430
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '2c9a3226-4407-419f-903d-23ae9b5d7477',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 431,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcAddOnBoardComponent.ApcAddOnBoardClientComponent',
                'GUID': '33640bb5-b804-4be1-afb8-2529035fae7d',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.983Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcAddOnBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2357,
                '*id': {
                    '_values': [
                        431
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '33640bb5-b804-4be1-afb8-2529035fae7d',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 432,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Common.Shared.JournalLogTypeBase',
                'GUID': '820e677a-2896-4a34-bd40-2927c89ab677',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.987Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': null,
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>ApplicationServerActivity</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>AreaActivity</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>CardAdmitted</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>CardRejected</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>DeviceActivity</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>DeviceError</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>DoubleSwipe</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>EventAssessMessage</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>GuardTourActivity</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>IntrusionZoneActivity</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>IntrusionZoneError</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>KeypadCommandActivity</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>LogAuditTriggerActivity</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>LogJournalTriggerActivity</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>LogMessage</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>LogMigrationActivity</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>ManualAction</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>NetVideoActivity</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>ObjectChangedState</Name><Position>18</Position></Verb><Verb><Grant>false</Grant><Name>OperatorActivity</Name><Position>19</Position></Verb><Verb><Grant>false</Grant><Name>OperatorLogin</Name><Position>20</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.GPI.JournalMessage.GeneralPurposeInterfaceActivity</Name><Position>21</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Video.JournalMessage.JournalStateChange</Name><Position>22</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Video.JournalMessage.JournalVideoAlarm</Name><Position>23</Position></Verb><Verb><Grant>false</Grant><Name>SystemActivity</Name><Position>24</Position></Verb><Verb><Grant>false</Grant><Name>SystemError</Name><Position>25</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2892,
                '*id': {
                    '_values': [
                        432
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '820e677a-2896-4a34-bd40-2927c89ab677',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 433,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Client.BiDirectionalDeviceClientComponent',
                'GUID': '59d7b7f8-a63b-43ee-aaba-2bc8756b4e21',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.993Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Objects.BiDirectionalDevice',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2051,
                '*id': {
                    '_values': [
                        433
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '59d7b7f8-a63b-43ee-aaba-2bc8756b4e21',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 434,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.LogMessageRestore.LogMessageRestoreClientComponent',
                'GUID': 'fd8dafea-253a-41f3-bb83-2c471854c293',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.997Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 921,
                '*id': {
                    '_values': [
                        434
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fd8dafea-253a-41f3-bb83-2c471854c293',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 435,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DigitalCertificateComponent.DigitalCertificateClientComponent',
                'GUID': '71b83613-bacf-4f60-a43f-2c58ae40c273',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.997Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.DigitalCertificate',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 918,
                '*id': {
                    '_values': [
                        435
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '71b83613-bacf-4f60-a43f-2c58ae40c273',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 436,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerSynchronizationConflictsClientComponent',
                'GUID': 'c1aa7f3d-ec37-440f-b4fd-2c6e8d813129',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:21.997Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServerSynchronizationConflict',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerVerifyConflictResolved</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerEditConflictedRecord</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1996,
                '*id': {
                    '_values': [
                        436
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c1aa7f3d-ec37-440f-b4fd-2c6e8d813129',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 437,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcI32InputBoardComponent.ApcI32InputBoardClientComponent',
                'GUID': '07f16785-5f63-45d4-b818-301ce083be4f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcI32InputBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2366,
                '*id': {
                    '_values': [
                        437
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '07f16785-5f63-45d4-b818-301ce083be4f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 438,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.AuditTrigger.AuditTriggerClientComponent',
                'GUID': '5232f47e-7258-4096-95c0-360f23a9e2d9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.AuditTrigger',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2030,
                '*id': {
                    '_values': [
                        438
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '5232f47e-7258-4096-95c0-360f23a9e2d9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 439,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent',
                'GUID': 'cd592519-6520-4e22-b28c-37626a2f3875',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.003Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 909,
                '*id': {
                    '_values': [
                        439
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'cd592519-6520-4e22-b28c-37626a2f3875',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 440,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.GuardTourClientComponent',
                'GUID': '7e370ea1-6a6d-4ac5-ac09-382d5e978301',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.003Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.GuardTour',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.StartGuardTourExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.SuspendGuardTourExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.ResumeGuardTourExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.CancelGuardTourExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.GuardTourDetailExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.GuardTourLogMessage</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.GuardTour.GuardTourViewDocuments</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>16</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3061,
                '*id': {
                    '_values': [
                        440
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '7e370ea1-6a6d-4ac5-ac09-382d5e978301',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 441,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ManualAction.ManualActionClientComponent',
                'GUID': 'd8aee561-f7cb-44a7-9abc-387b5d16d980',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.007Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ManualAction',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ManualAction.ManualActionDetailsExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ManualAction.CancelManualActionExecutor</Name><Position>4</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1334,
                '*id': {
                    '_values': [
                        441
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd8aee561-f7cb-44a7-9abc-387b5d16d980',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 442,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Client.BiDirectionalMessageProtocolClientComponent',
                'GUID': '6a037f61-ac15-4c15-be90-3aa29c7a5377',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.007Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Objects.BiDirectionalMessageProtocol',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2069,
                '*id': {
                    '_values': [
                        442
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6a037f61-ac15-4c15-be90-3aa29c7a5377',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 443,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.HardwareFolder.HardwareFolderClientComponent',
                'GUID': 'cdb4dcca-e027-473a-a3a9-3ce02833437a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.007Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.HardwareFolder',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1890,
                '*id': {
                    '_values': [
                        443
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'cdb4dcca-e027-473a-a3a9-3ce02833437a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 444,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ImagesComponent.ImagesClientComponent',
                'GUID': '11802353-0d17-4f5b-bb88-3d661d5d7279',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.007Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Images',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ImagesComponent.ChangePartitionExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1742,
                '*id': {
                    '_values': [
                        444
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '11802353-0d17-4f5b-bb88-3d661d5d7279',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 445,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SmartCardKeyComponent.SmartCardKeyClientComponent',
                'GUID': '74a33226-723a-4656-a00b-3e9d807ce1d1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.01Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.SmartCardKey',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1899,
                '*id': {
                    '_values': [
                        445
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '74a33226-723a-4656-a00b-3e9d807ce1d1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 446,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorButtonClientComponent',
                'GUID': '51a772a9-6b3b-4afc-ac36-3fb1ebf17ab6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.01Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Button',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ControlAccessExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.UnControlAccessExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ButtonActivateOutputExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ButtonDeactivateOutputExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ButtonPulseOutputExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ControlAccessCauseListExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2563,
                '*id': {
                    '_values': [
                        446
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '51a772a9-6b3b-4afc-ac36-3fb1ebf17ab6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 447,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.VideoViewClientComponent',
                'GUID': 'b9bb01a2-2c22-42c5-a740-42635c2a1af6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.013Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.TourView',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2449,
                '*id': {
                    '_values': [
                        447
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b9bb01a2-2c22-42c5-a740-42635c2a1af6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 448,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IPCamera.AxisIPCamera',
                'GUID': '98ddf739-74d7-4a70-a937-469b536b1acc',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.013Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.IPCamera',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2440,
                '*id': {
                    '_values': [
                        448
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '98ddf739-74d7-4a70-a937-469b536b1acc',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 449,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ApcInputClientComponent',
                'GUID': 'f66f03d6-38de-458f-9702-47c3469f0722',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.017Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcInput',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ArmInput</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.DisArmInput</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.InputArmedCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2464,
                '*id': {
                    '_values': [
                        449
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f66f03d6-38de-458f-9702-47c3469f0722',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 450,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CarpoolGroupComponent.CarpoolGroupClientComponent',
                'GUID': '22d634ad-7475-48ef-bc22-4e5a517f151a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.017Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CarpoolGroup',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Groups.ChangeGroupPartitionExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.CarpoolGroupComponent.GraceCarpoolGroup</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2205,
                '*id': {
                    '_values': [
                        450
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '22d634ad-7475-48ef-bc22-4e5a517f151a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 451,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarBoardComponent.IStarComBoardClientComponent',
                'GUID': '6b395866-0f02-4905-a160-4ed4bb740939',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.02Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarComBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarBoardComponent.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2052,
                '*id': {
                    '_values': [
                        451
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6b395866-0f02-4905-a160-4ed4bb740939',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 452,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CommPortComponent.CommPortClientComponent',
                'GUID': '48430414-d05c-430d-bf33-5666683c04d1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.02Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CommPort',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1752,
                '*id': {
                    '_values': [
                        452
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '48430414-d05c-430d-bf33-5666683c04d1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 453,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.UdfFieldDefs.UdfFieldDefClientComponent',
                'GUID': '2f1b5a46-5c3e-4a9c-abb4-57adc4b401ed',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.02Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.UdfFieldDef',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1592,
                '*id': {
                    '_values': [
                        453
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '2f1b5a46-5c3e-4a9c-abb4-57adc4b401ed',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 454,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Credentials.CredentialClientComponent',
                'GUID': '1cb4d963-b946-4af6-9f74-599bbaba591f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.02Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Credential',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Credentials.LostCredentialExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Credentials.StolenCredentialExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Credentials.ReturnTemporaryCredentialExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PropertySetCredentialExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.BatchPrintPrintExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Credentials.ChangePINExecutor</Name><Position>14</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2785,
                '*id': {
                    '_values': [
                        454
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1cb4d963-b946-4af6-9f74-599bbaba591f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 455,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ClearanceComponent.ClearanceClientComponent',
                'GUID': '42db12cf-2b49-4af2-b3e8-5bd495ebe586',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.023Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Clearance',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2033,
                '*id': {
                    '_values': [
                        455
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '42db12cf-2b49-4af2-b3e8-5bd495ebe586',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 456,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Maps.MapsClientComponent',
                'GUID': '0a6b0eba-648b-4da0-a868-5cfd8160a5e9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.023Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Maps',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Maps.NewLegacyMapsExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2590,
                '*id': {
                    '_values': [
                        456
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0a6b0eba-648b-4da0-a868-5cfd8160a5e9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 457,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.JournalTrigger.JournalTriggerClientComponent',
                'GUID': '951f4ec7-3cbc-449c-b6b7-5ed50e7ad1ac',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.027Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.JournalTrigger',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2036,
                '*id': {
                    '_values': [
                        457
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '951f4ec7-3cbc-449c-b6b7-5ed50e7ad1ac',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 458,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Cluster.ClusterClientComponent',
                'GUID': '6bfd0990-0d9d-4bc9-bf92-61836a3b29fc',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.027Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Cluster',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.RenameExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.CopyAndPasteExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.CopyExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PasteExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2893,
                '*id': {
                    '_values': [
                        458
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6bfd0990-0d9d-4bc9-bf92-61836a3b29fc',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 459,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ReportFormComponent',
                'GUID': 'ebbfcabf-a0f7-48b1-9720-66239cdef39d',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.027Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ReportForm',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2593,
                '*id': {
                    '_values': [
                        459
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ebbfcabf-a0f7-48b1-9720-66239cdef39d',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 460,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.BadgeLayout.BadgeSetupClientComponent',
                'GUID': '6834840c-4072-4351-a279-687f83e5e2f3',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.027Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 906,
                '*id': {
                    '_values': [
                        460
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6834840c-4072-4351-a279-687f83e5e2f3',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 461,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.DynamicViews.DynamicViewsClientComponent',
                'GUID': '1a8cc615-5157-4d1e-b047-6a2afae8a6ed',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.03Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.DynamicView',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.DynamicViews.PersistDynamicViewLayoutsExecutor</Name><Position>14</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.DynamicViews.ExportToExcelExecutor</Name><Position>15</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.CopyAndPasteRowsExecutor</Name><Position>16</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PrintExecutor</Name><Position>17</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.SendEmailExecutor</Name><Position>18</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3348,
                '*id': {
                    '_values': [
                        461
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1a8cc615-5157-4d1e-b047-6a2afae8a6ed',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 462,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventClientComponent',
                'GUID': '3046ea57-a829-476d-9ec0-6d8c01d67e46',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.03Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.XFEvent',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.ActivateEvent</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.DeactivateEvent</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.ArmEvent</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.DisArmEvent</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventActiveCauseListExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventArmedCauseListExecutor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.AckEvent</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventDetailsExecutor</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventSilenceExecutor</Name><Position>18</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventResetActionsExecutor</Name><Position>19</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>20</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EventAssessExecutor</Name><Position>21</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.AllowEditPredefindeLogMessageExecutor</Name><Position>22</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.LatchEvent</Name><Position>23</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.UnlatchEvent</Name><Position>24</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.ToggleEvent</Name><Position>25</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.PulseEvent</Name><Position>26</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.ClearEvent</Name><Position>27</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.AckAndClearEvent</Name><Position>28</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 4677,
                '*id': {
                    '_values': [
                        462
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3046ea57-a829-476d-9ec0-6d8c01d67e46',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 463,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcR8OutputBoardComponent.ApcR8OutputBoardClientComponent',
                'GUID': 'fb79a884-e232-4388-b4b8-6f88b2b9d1ac',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.033Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcR8OutputBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2366,
                '*id': {
                    '_values': [
                        463
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fb79a884-e232-4388-b4b8-6f88b2b9d1ac',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 464,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Schedules.ScheduleClientComponent',
                'GUID': '3cea2e22-2122-407d-a8c5-70c99c1d3d66',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.033Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.TimeSpec',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Schedules.PreviewActivationTimesExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2325,
                '*id': {
                    '_values': [
                        464
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3cea2e22-2122-407d-a8c5-70c99c1d3d66',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 465,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+JournalLogClientComponent',
                'GUID': 'ac2d0041-fb1d-4ca9-9897-7e2096a044a6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.037Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.JournalLogBase',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+JournalLogClientComponent+JournalLogEditPrimaryObjectExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+JournalLogClientComponent+JournalLogEditSecondaryObjectExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+JournalLogClientComponent+JournalLogFindPrimaryObjectExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+JournalLogClientComponent+JournalLogFindSecondaryObjectExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1929,
                '*id': {
                    '_values': [
                        465
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ac2d0041-fb1d-4ca9-9897-7e2096a044a6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 466,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Samples.CrossFireSample.ClientComponent.ClientComponent2',
                'GUID': 'b6935c47-ef2e-4116-9abb-7f967274b018',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.037Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Samples.CrossFireSample.Objects.SampleObject2',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Samples.CrossFireSample.ClientComponent.SampleExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2616,
                '*id': {
                    '_values': [
                        466
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b6935c47-ef2e-4116-9abb-7f967274b018',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 467,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcStarCouplerMiniStarComponent.ApcStarCouplerMiniStarClientComponent',
                'GUID': '6402b367-efdb-4a81-99dd-8388d723cae7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.037Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerMiniStar',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2384,
                '*id': {
                    '_values': [
                        467
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6402b367-efdb-4a81-99dd-8388d723cae7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 468,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ReportResultComponent',
                'GUID': 'd6a872d1-6ab8-4fbd-8102-83abe0731e7e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.037Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ReportResult',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ExportReportResultsExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ViewQueryExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.StopRunningReportExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2611,
                '*id': {
                    '_values': [
                        468
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd6a872d1-6ab8-4fbd-8102-83abe0731e7e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 469,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SystemVariablesComponent.SystemVariablesObjectClientComponent',
                'GUID': '3cbc37b8-a9b4-495c-80ab-84082e5d8ce9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.04Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CCureSystemVariables',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.SystemVariablesComponent.SystemVariableExecutors.EditExecutor</Name><Position>2</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1095,
                '*id': {
                    '_values': [
                        469
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3cbc37b8-a9b4-495c-80ab-84082e5d8ce9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 470,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Sounds.SoundsClientComponent',
                'GUID': 'ce112871-e1e3-4b77-bd74-85e34f5e2289',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.04Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Sound',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1575,
                '*id': {
                    '_values': [
                        470
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ce112871-e1e3-4b77-bd74-85e34f5e2289',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 471,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+AuditLogClientComponent',
                'GUID': 'd4ac27c6-dbb0-4c0c-bc26-8852896b21df',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.04Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.AuditLog',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>2</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1053,
                '*id': {
                    '_values': [
                        471
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd4ac27c6-dbb0-4c0c-bc26-8852896b21df',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 472,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarPIM485BoardComponent.IStarPIM485BoardClientComponent',
                'GUID': '45361064-eae9-4334-8d2e-888a586249c2',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.043Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarPIM485Board',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2366,
                '*id': {
                    '_values': [
                        472
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '45361064-eae9-4334-8d2e-888a586249c2',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 473,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorClientComponent',
                'GUID': '0b442a4b-0778-4f4d-a926-89e5b76d05c0',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.043Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Elevator',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorReaderPinEnabledExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorReaderPinDisabledExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorReaderCauseListExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorButtonStatusList</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2994,
                '*id': {
                    '_values': [
                        473
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0b442a4b-0778-4f4d-a926-89e5b76d05c0',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 474,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.PersonnelView.PersonnelViewClientComponent',
                'GUID': 'c525379d-1c8f-4152-b17b-8b86d304e817',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.047Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.PersonnelView',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.PersonnelView.PropertySetPersonnelViewExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1909,
                '*id': {
                    '_values': [
                        474
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c525379d-1c8f-4152-b17b-8b86d304e817',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 475,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.KeypadCommandComponent.KeypadCommandClientComponent',
                'GUID': 'f70c33a4-bb26-4fa2-8cba-8d622422f5d4',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.07Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.KeypadCommand',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>14</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2786,
                '*id': {
                    '_values': [
                        475
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f70c33a4-bb26-4fa2-8cba-8d622422f5d4',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 476,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.CustomerLabel.CustomerLabelsObjectClientComponent',
                'GUID': '7e065a57-97ae-4713-8428-8dc0cca87b2b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.07Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.CustomerLabels',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.CustomerLabel.CustomerLabelEditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1476,
                '*id': {
                    '_values': [
                        476
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '7e065a57-97ae-4713-8428-8dc0cca87b2b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 477,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Client.BiDirectionalActionClientComponent',
                'GUID': 'ba4aefc5-91ee-4f8a-961a-8f79245406f5',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.073Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.GeneralPurposeInterface.Objects.BiDirectionalAction',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2051,
                '*id': {
                    '_values': [
                        477
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ba4aefc5-91ee-4f8a-961a-8f79245406f5',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 478,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.iStarIntrusionZoneClientComponent',
                'GUID': '2aeae087-29bf-48d4-8062-9543a7f8b0ea',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.073Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarIntrusionZone',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.ArmIntrusionZone</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.DisarmIntrusionZone</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.ForceArmIntrusionZone</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.DisplayDoorsAndInputsExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3029,
                '*id': {
                    '_values': [
                        478
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '2aeae087-29bf-48d4-8062-9543a7f8b0ea',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 479,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Query.QueryClientComponent',
                'GUID': '5a375813-9ed7-47e2-94be-9d601f6f0ddf',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.073Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Query',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2587,
                '*id': {
                    '_values': [
                        479
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '5a375813-9ed7-47e2-94be-9d601f6f0ddf',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 480,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.iStarPIM485ReaderClientComponent',
                'GUID': '7c6da1b5-b09f-4146-993d-9dd22f3e08ae',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.077Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarPIM485Reader',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnablePinCauseListExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnableKeypadCommand</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.DisableKeypadCommand</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnableKeypadCommandCauseListExecutor</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.ShowClearanceFilterCauseListExecutor</Name><Position>18</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3433,
                '*id': {
                    '_values': [
                        480
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '7c6da1b5-b09f-4146-993d-9dd22f3e08ae',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 481,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcR48OutputBoardComponent.ApcR48OutputBoardClientComponent',
                'GUID': '47f89a1e-d232-44cd-a3bd-9eac036c3902',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.077Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcR48OutputBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2369,
                '*id': {
                    '_values': [
                        481
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '47f89a1e-d232-44cd-a3bd-9eac036c3902',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 482,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorClientComponent',
                'GUID': 'f4d59430-0e9a-4de2-89fb-a00835482e47',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.077Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCDoor',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.LockDoor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.UnlockDoor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.MomentUnlockDoor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2165,
                '*id': {
                    '_values': [
                        482
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f4d59430-0e9a-4de2-89fb-a00835482e47',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 483,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.PersonnelType.PersonnelTypeClientComponent',
                'GUID': '3fd62c90-61c0-46cf-9fa6-a5332e8057f0',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.08Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.PersonnelType',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2036,
                '*id': {
                    '_values': [
                        483
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3fd62c90-61c0-46cf-9fa6-a5332e8057f0',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 484,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.VideoFolderClientComponent',
                'GUID': '8cd172b4-4457-4a38-934c-ad487e8d61a7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.08Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.VideoFolder',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1875,
                '*id': {
                    '_values': [
                        484
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8cd172b4-4457-4a38-934c-ad487e8d61a7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 485,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PersonnelClientComponent',
                'GUID': 'bc2e1832-4721-4168-9d3c-adacf38c6a21',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.083Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Personnel',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.ExportSelectedPortraitsExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.CaptureExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PrintExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.EnrollExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PreviewExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.BatchPrintPrintExecutor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.GracePersonExecutor</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.SmartCardExecutor</Name><Position>18</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.AddClearanceExecutor</Name><Position>19</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.RemoveClearanceExecutor</Name><Position>20</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.AddCustomClearanceExecutor</Name><Position>21</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.RemoveCustomClearanceExecutor</Name><Position>22</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.AssignDocumentsExecutor</Name><Position>23</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.ViewDocumentsExecutor</Name><Position>24</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.RemovePersonFromAreaExecutor</Name><Position>25</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.AntipassbackResetCardExecutor</Name><Position>26</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.AreaLockoutGraceExecutor</Name><Position>27</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.GraceCarpoolGroup</Name><Position>28</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Credentials.ActivateTemporaryCredentialExecutor</Name><Position>29</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.ChangePINExecutor</Name><Position>30</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 5115,
                '*id': {
                    '_values': [
                        485
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'bc2e1832-4721-4168-9d3c-adacf38c6a21',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 486,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Partition.PartitionClientComponent',
                'GUID': 'e37cb71d-2955-4588-beff-af5116606641',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.083Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Partition',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Partition.NewPartitionExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Partition.GraceAllExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2024,
                '*id': {
                    '_values': [
                        486
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'e37cb71d-2955-4588-beff-af5116606641',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 487,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ISCControllerComponent.ISCControllerClientComponent',
                'GUID': '721065a5-b08e-4e9a-a65d-b2b0d69a7cc6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.087Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCController',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1767,
                '*id': {
                    '_values': [
                        487
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '721065a5-b08e-4e9a-a65d-b2b0d69a7cc6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 488,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.ApcReaderClientComponent',
                'GUID': 'fa2b7865-e6f2-4ae6-85d0-b3a66e7b53df',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.087Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcReader',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnablePinCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2471,
                '*id': {
                    '_values': [
                        488
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fa2b7865-e6f2-4ae6-85d0-b3a66e7b53df',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 489,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ReportClientComponent',
                'GUID': '12ccf761-1621-4a3f-a976-b9b6f5baa91b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.087Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Report',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.RunReportExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.FindReportResultsExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2883,
                '*id': {
                    '_values': [
                        489
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '12ccf761-1621-4a3f-a976-b9b6f5baa91b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 490,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.CustomerLabel.CustomerLabelsClientComponent',
                'GUID': '9c4cff1b-6620-4194-8142-ba17c2573f72',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.09Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 914,
                '*id': {
                    '_values': [
                        490
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '9c4cff1b-6620-4194-8142-ba17c2573f72',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 491,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.LogMessageBackup.LogMessageBackupClientComponent',
                'GUID': '1191e8cd-354d-4289-a144-ba2d2601d742',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.09Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 919,
                '*id': {
                    '_values': [
                        491
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1191e8cd-354d-4289-a144-ba2d2601d742',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 492,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Export.ExportClientComponent',
                'GUID': '1b3f1f8f-c3f0-4be3-8dc0-bbf4b06f3fe4',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.093Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Export',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Export.RunExportExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2158,
                '*id': {
                    '_values': [
                        492
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1b3f1f8f-c3f0-4be3-8dc0-bbf4b06f3fe4',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 493,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SWH_HandheldComponent.SWH_HandheldClientComponent',
                'GUID': '32e58581-f3a6-458a-86bc-bd0406e5d8cc',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.093Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.SWH_Handheld',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2354,
                '*id': {
                    '_values': [
                        493
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '32e58581-f3a6-458a-86bc-bd0406e5d8cc',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 494,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.iStarInputClientComponent',
                'GUID': '1564d393-6402-4ab0-aaef-bd377d595809',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.093Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInput',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ArmInput</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.DisArmInput</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.InputArmedCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2468,
                '*id': {
                    '_values': [
                        494
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1564d393-6402-4ab0-aaef-bd377d595809',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 495,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.OutputClientComponent',
                'GUID': 'c2e4ab90-abb9-4a46-a1a2-c0b08a83e464',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.097Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Output',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.ActivateOutput</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.DeactivateOutput</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.PulseOutput</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.OutputActiveCauseListExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.SlowFlashOutput</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.MomentarySlowFlashOutput</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.FastFlashOutput</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.MomentaryFastFlashOutput</Name><Position>17</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3226,
                '*id': {
                    '_values': [
                        495
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c2e4ab90-abb9-4a46-a1a2-c0b08a83e464',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 496,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CustomClearance.CustomClearanceClientComponent',
                'GUID': '8383926c-0fe1-46aa-a38e-c22b0e54c9d1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.11Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.PersonnelCustomClearance',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.CustomClearance.DeleteExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1765,
                '*id': {
                    '_values': [
                        496
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8383926c-0fe1-46aa-a38e-c22b0e54c9d1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 497,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ControllerClientComponent',
                'GUID': '3bf5c810-f795-4d5e-bf2c-c2f7308f09cd',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.11Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Controller',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2446,
                '*id': {
                    '_values': [
                        497
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3bf5c810-f795-4d5e-bf2c-c2f7308f09cd',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 498,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.RMReaderLCDMessageSetComponent.RMReaderLCDMessageSetClientComponent',
                'GUID': 'f2c36383-a265-4730-a7a1-c4024cef2998',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.113Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.RMReaderLCDMessageSet',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2386,
                '*id': {
                    '_values': [
                        498
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f2c36383-a265-4730-a7a1-c4024cef2998',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 499,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventPriorityClientComponent',
                'GUID': '3c73a61a-0f44-4526-bca6-c4ef4a6ada3a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.117Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 905,
                '*id': {
                    '_values': [
                        499
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3c73a61a-0f44-4526-bca6-c4ef4a6ada3a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 500,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Export.ExportResultClientComponent',
                'GUID': '89bcb830-0d8e-44cc-80dd-c606c2331a49',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.117Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ExportResult',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>3</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1168,
                '*id': {
                    '_values': [
                        500
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '89bcb830-0d8e-44cc-80dd-c606c2331a49',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 501,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.PredefinedMessage.PredefinedMessageClientComponent',
                'GUID': '92c3418a-4a22-4b67-8269-c9d82c5d10a9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.117Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.PredefinedMessage',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2194,
                '*id': {
                    '_values': [
                        501
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '92c3418a-4a22-4b67-8269-c9d82c5d10a9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 502,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.UnifiedMaps.UnifiedMapClientComponent',
                'GUID': 'c6c981cb-6dbb-4ef5-9559-caf5d7f439d1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.12Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.UnifiedMap',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2603,
                '*id': {
                    '_values': [
                        502
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c6c981cb-6dbb-4ef5-9559-caf5d7f439d1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 503,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.ClusterAreaClientComponent',
                'GUID': 'c893c97f-9623-46df-88d4-cf1ce72a440c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.12Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ClusterArea',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.DisplayPersonnelExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.DeMusterAreaExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.RemoveAllPersonnelFromAreaExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.DisplayOccupancyGroupsExecutor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.ClearAreaCount</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.OccupancyModeCauseListExecutor</Name><Position>17</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3270,
                '*id': {
                    '_values': [
                        503
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c893c97f-9623-46df-88d4-cf1ce72a440c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 504,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DigitalCertificateComponent.EncryptionOptionsClientComponent',
                'GUID': '8a75fbb7-58aa-49ef-b7fb-cf328a5f0ce0',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.123Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 929,
                '*id': {
                    '_values': [
                        504
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8a75fbb7-58aa-49ef-b7fb-cf328a5f0ce0',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 505,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarBoardComponent.IStarGCBoardClientComponent',
                'GUID': '3b854d72-13ee-4a07-8429-d21ca5480ea3',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.123Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarGCBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2041,
                '*id': {
                    '_values': [
                        505
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3b854d72-13ee-4a07-8429-d21ca5480ea3',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 506,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarBoardComponent.IStarBoardClientComponent',
                'GUID': '5c3bb7b5-6c2f-43e6-8fc5-d409f9faa900',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.123Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarACMBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2351,
                '*id': {
                    '_values': [
                        506
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '5c3bb7b5-6c2f-43e6-8fc5-d409f9faa900',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 507,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CommPortApcComponent.CommPortApcClientComponent',
                'GUID': 'bfca67da-3081-447f-8c54-d49ebab96cd8',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.127Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CommPortApc',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2351,
                '*id': {
                    '_values': [
                        507
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'bfca67da-3081-447f-8c54-d49ebab96cd8',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 508,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Groups.GroupsClientComponent',
                'GUID': '365a9870-0673-4a89-aa26-d72de529ce5c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.127Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Group',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Groups.ChangeGroupPartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2019,
                '*id': {
                    '_values': [
                        508
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '365a9870-0673-4a89-aa26-d72de529ce5c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 509,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ApcDoorClientComponent',
                'GUID': '914d6047-c701-41c4-aeb3-d896964299c9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.127Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcDoor',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.LockDoor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.UnlockDoor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.MomentUnlockDoor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ApcDoorLockedCauseListExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2605,
                '*id': {
                    '_values': [
                        509
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '914d6047-c701-41c4-aeb3-d896964299c9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 510,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.License.LicenseClientComponent',
                'GUID': 'bbb5a5a2-aa66-479c-b4c4-db6be8c97a46',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.13Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 899,
                '*id': {
                    '_values': [
                        510
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'bbb5a5a2-aa66-479c-b4c4-db6be8c97a46',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 511,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.TimeZones.TimeZoneClientComponentClientComponent',
                'GUID': 'ebe827f8-c55c-4610-99b6-dcd1dd575150',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.13Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.TimeZone',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1616,
                '*id': {
                    '_values': [
                        511
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ebe827f8-c55c-4610-99b6-dcd1dd575150',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 512,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportClientComponent',
                'GUID': 'dffba388-9718-46e9-bfc6-df4df729977b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.133Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Import',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.StartListeningExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.StopListeningExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportOnServerExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.FindImportResultsExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2883,
                '*id': {
                    '_values': [
                        512
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'dffba388-9718-46e9-bfc6-df4df729977b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 513,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'JournalLogSystemToolClientComponent',
                'GUID': '89c38822-5e32-4332-b6ed-e531bef246c6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.133Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 858,
                '*id': {
                    '_values': [
                        513
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '89c38822-5e32-4332-b6ed-e531bef246c6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 514,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.BackupSystemTool.BackupSystemToolClientComponent',
                'GUID': 'c735cce5-0651-4dc4-b7ea-e6079a9b6a08',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.137Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 919,
                '*id': {
                    '_values': [
                        514
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c735cce5-0651-4dc4-b7ea-e6079a9b6a08',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 515,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarController.IStarClientComponent',
                'GUID': '155bc5b1-8f19-40ce-893b-e6746edee861',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.137Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarController',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.FirmwareDownloadExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.ApproveCertificateExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.DenyCertificateExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.DiagnosticsExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.ChangePartitionExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>16</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3119,
                '*id': {
                    '_values': [
                        515
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '155bc5b1-8f19-40ce-893b-e6746edee861',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 516,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.VisitorManagement.VisitorManagementComponent',
                'GUID': '8afbb9db-9951-40ab-a29d-e93cd62d80bd',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.137Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Visit',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2180,
                '*id': {
                    '_values': [
                        516
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8afbb9db-9951-40ab-a29d-e93cd62d80bd',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 517,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.iStarReaderClientComponent',
                'GUID': 'e63b60f5-bf20-4bb1-b344-e9c2f2fae13b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.137Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarReader',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnablePinCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2475,
                '*id': {
                    '_values': [
                        517
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'e63b60f5-bf20-4bb1-b344-e9c2f2fae13b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 518,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ResourceEditor.ResourceEditorClientComponent',
                'GUID': '39e405d8-8824-4858-b473-ea26b9f8b696',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.14Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 915,
                '*id': {
                    '_values': [
                        518
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '39e405d8-8824-4858-b473-ea26b9f8b696',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 519,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.CCTVProtocolClientComponent',
                'GUID': '5f071978-89d6-4d45-9f65-eac93262d52c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.14Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.CCTVProtocol',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2027,
                '*id': {
                    '_values': [
                        519
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '5f071978-89d6-4d45-9f65-eac93262d52c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 520,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportResultClientComponent',
                'GUID': 'ce5e67ae-dd46-4d72-886a-f16b5e34a1fa',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.143Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ImportResult',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>4</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1310,
                '*id': {
                    '_values': [
                        520
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ce5e67ae-dd46-4d72-886a-f16b5e34a1fa',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 521,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SystemVariablesComponent.SystemVariablesClientComponent',
                'GUID': '11440448-0be6-4bb2-9022-f1a649191b67',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.143Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 924,
                '*id': {
                    '_values': [
                        521
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '11440448-0be6-4bb2-9022-f1a649191b67',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 522,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.DocumentComponent.DocumentClientComponent',
                'GUID': '9fd7443e-203c-4f31-95a1-f1f31018dfb6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.143Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Documents',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2167,
                '*id': {
                    '_values': [
                        522
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '9fd7443e-203c-4f31-95a1-f1f31018dfb6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 523,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ScheduleTimeZonePairs.ScheduleTimeZonePairClientComponent',
                'GUID': '598b8089-a21e-4932-80d4-f2276620964b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.147Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ScheduleTimeZonePair',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1619,
                '*id': {
                    '_values': [
                        523
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '598b8089-a21e-4932-80d4-f2276620964b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 524,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcComponent.ApcClientComponent',
                'GUID': '7186b5b9-e0c8-4ecb-adad-f457315bb728',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.147Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcController',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ApcComponent.FirmwareDownloadExecutorApc</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2492,
                '*id': {
                    '_values': [
                        524
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '7186b5b9-e0c8-4ecb-adad-f457315bb728',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 525,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.ISCReaderClientComponent',
                'GUID': 'bea46499-de77-4078-981c-f9239ae6758d',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.15Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCReader',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2033,
                '*id': {
                    '_values': [
                        525
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'bea46499-de77-4078-981c-f9239ae6758d',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 526,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Samples.CrossFireSample.ClientComponent.ClientComponent1',
                'GUID': '9a1f9afd-6460-446d-ad1d-f9d597090a02',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.15Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Samples.CrossFireSample.Objects.SampleObject1',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2469,
                '*id': {
                    '_values': [
                        526
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '9a1f9afd-6460-446d-ad1d-f9d597090a02',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 527,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.iStarAperioDoorClientComponent',
                'GUID': '259bf60f-0738-4b9d-98e6-fa8b5c19d758',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.15Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarAperioDoor',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2352,
                '*id': {
                    '_values': [
                        527
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '259bf60f-0738-4b9d-98e6-fa8b5c19d758',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 528,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcI8InputBoardComponent.ApcI8InputBoardClientComponent',
                'GUID': 'a06156a3-b9b0-4047-b5e1-faaddbbcc866',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.153Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcI8InputBoard',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2363,
                '*id': {
                    '_values': [
                        528
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'a06156a3-b9b0-4047-b5e1-faaddbbcc866',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 529,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent',
                'GUID': '4840979e-3a37-494c-a908-fb6aff0a7a82',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.16Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent+PrivilegeEditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent+PrivilegeDeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2097,
                '*id': {
                    '_values': [
                        529
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4840979e-3a37-494c-a908-fb6aff0a7a82',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 530,
                'ExceptionObjectID': 104,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent',
                'GUID': 'ffd85bdc-c018-47e4-bde5-fbe6bc82f3a6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.167Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
                'ExceptionObjectGuid': '11bb3672-6dd6-4412-8973-7eb71aac9533',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent+PrivilegeEditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent+PrivilegeDeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2097,
                '*id': {
                    '_values': [
                        530
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ffd85bdc-c018-47e4-bde5-fbe6bc82f3a6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 531,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcStarCouplerStarComponent.ApcStarCouplerStarClientComponent',
                'GUID': '56645e86-a7ad-428a-8d5a-fc455241f197',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.17Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerStar',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOnExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.Core.MaintenanceModeUtilities+MaintenanceModeOffExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2372,
                '*id': {
                    '_values': [
                        531
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '56645e86-a7ad-428a-8d5a-fc455241f197',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 532,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.CCTVSwitchClientComponent',
                'GUID': '4e78096c-c48d-414f-b214-fefee9aaf758',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.17Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.CCTVSwitch',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2023,
                '*id': {
                    '_values': [
                        532
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4e78096c-c48d-414f-b214-fefee9aaf758',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 533,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ICU.ICUClientComponent',
                'GUID': 'd9ecc75a-5bd4-4684-ad74-eb6024dc5424',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.173Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': true,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 893,
                '*id': {
                    '_values': [
                        533
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd9ecc75a-5bd4-4684-ad74-eb6024dc5424',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 534,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.MaintenanceMode.MaintenanceModeClientComponent',
                'GUID': '973195f9-c790-431a-ba46-182d6b7f5ab1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.177Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': true,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 917,
                '*id': {
                    '_values': [
                        534
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '973195f9-c790-431a-ba46-182d6b7f5ab1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 535,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.LogVolumeQuery.ACVSULogManagementComponent',
                'GUID': '0be62927-d629-4ef3-a5b7-809be9bd77e2',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.177Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 913,
                '*id': {
                    '_values': [
                        535
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0be62927-d629-4ef3-a5b7-809be9bd77e2',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 536,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.MetaTags.MetaTagsManagementComponent',
                'GUID': 'd9a35a43-bc32-454f-ae0d-d4f6b362544b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.18Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': true,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': null,
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 907,
                '*id': {
                    '_values': [
                        536
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd9a35a43-bc32-454f-ae0d-d4f6b362544b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 537,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.IDScan.IDScanClientComponent',
                'GUID': '4e5fa761-5c4d-4b09-91cc-0cbb6c169681',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.183Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': true,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': null,
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 899,
                '*id': {
                    '_values': [
                        537
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4e5fa761-5c4d-4b09-91cc-0cbb6c169681',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13325,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerSynchronizationConflictsClientComponent',
                'GUID': 'ae44659e-61ba-48bd-a1d3-1d35c15e8436',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.19Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.DataServiceLayer.SynchronizationConflict',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerVerifyConflictResolved</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerViewConflictedRecord</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1988,
                '*id': {
                    '_values': [
                        13325
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ae44659e-61ba-48bd-a1d3-1d35c15e8436',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13326,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ScheduleTimeZonePairs.ScheduleTimeZonePairClientComponent',
                'GUID': '908ba47e-5da2-4fd8-b057-804e54d30dfa',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.243Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ScheduleTimeZonePair',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>5</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1483,
                '*id': {
                    '_values': [
                        13326
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '908ba47e-5da2-4fd8-b057-804e54d30dfa',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13327,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Workstation.AccessWorkstationClientComponent',
                'GUID': '770c698d-6393-4e2b-9704-6129dd16ab35',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.247Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.AccessWorkstation',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1908,
                '*id': {
                    '_values': [
                        13327
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '770c698d-6393-4e2b-9704-6129dd16ab35',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13328,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.MetaTags.MetaTagClientComponent',
                'GUID': '44ba3ccd-5252-4dbf-9da3-cb5b1e267b1f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.247Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': null,
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.MetaTag',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 873,
                '*id': {
                    '_values': [
                        13328
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '44ba3ccd-5252-4dbf-9da3-cb5b1e267b1f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13329,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.MetaTags.LocationMetaTagClientComponent',
                'GUID': '6474deb7-5bf4-4566-929e-76021d6d423e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.25Z',
                'ParentPrivilegeObjectID': 104,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': null,
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.LocationMetaTag',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 889,
                '*id': {
                    '_values': [
                        13329
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6474deb7-5bf4-4566-929e-76021d6d423e',
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
            },
            {
                'ObjectID': 5000,
                'PrivilegeID': 104,
                'PartitionID': 1,
                'GUID': 'c139ffa2-2bb0-48ce-af28-4c9a7f6d8d83',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PrivilegePartitionPair',
                '*routing': null,
                '*ObjectSize': 311,
                '*id': {
                    '_values': [
                        5000
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PrivilegePartitionPair',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c139ffa2-2bb0-48ce-af28-4c9a7f6d8d83',
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
    },
    {
        'IsSystemPrivilege': false,
        'ClientExclusionList': '',
        'Enabled': true,
        'Protected': true,
        'RequiresManualActionChallenge': false,
        'DefaultRecord': false,
        'Template': false,
        'ManualActionsDefaultPriority': 75,
        'ManualActionsMaximumPriority': 100,
        'PartitionAll': false,
        'SpecialEditingRequired': true,
        'IntrObjectID': 100,
        'ExcludedClientTypes': null,
        'ActiveTemplateID': null,
        'ActiveTemplate': false,
        'PartitionID': 1,
        'LocationMetaTagFullName': '',
        'GISLocation': false,
        'GeographicLocation': null,
        'Name': 'Access to common objects',
        'Description': 'Access to common objects',
        'ObjectID': 5100,
        'GUID': '2969b848-7cbb-428d-8c0b-6e28cbed41d7',
        'LastModifiedByID': 1,
        'LastModifiedTime': '2021-07-26T13:53:38.567Z',
        'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
        '*routing': null,
        '*ObjectSize': 346,
        '*id': {
            '_values': [
                5100
            ],
            '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
            '_appServer': 'VM-INGRTN-16-15',
            'Guid': '2969b848-7cbb-428d-8c0b-6e28cbed41d7',
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
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9000,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerSynchronizationConflictsClientComponent',
                'GUID': 'f3972b92-6482-45e5-a9eb-d3494a86dc98',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.357Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.DataServiceLayer.SynchronizationConflict',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerVerifyConflictResolved</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerEditConflictedRecord</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1988,
                '*id': {
                    '_values': [
                        9000
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f3972b92-6482-45e5-a9eb-d3494a86dc98',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9001,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Common.Shared.JournalLogTypeBase',
                'GUID': '58bd9886-d557-43f8-aebe-6cbb68b99ee6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.357Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': null,
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>AreaActivity</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>CardAdmitted</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>CardRejected</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>DeviceActivity</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>DeviceError</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>DoubleSwipe</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>IntrusionZoneActivity</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>IntrusionZoneError</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>KeypadCommandActivity</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>LogMessage</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>ManualAction</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>NetVideoActivity</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>ObjectChangedState</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>OperatorActivity</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>OperatorLogin</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SystemActivity</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SystemError</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>ApplicationServerActivity</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>LogMigrationActivity</Name><Position>18</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2127,
                '*id': {
                    '_values': [
                        9001
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '58bd9886-d557-43f8-aebe-6cbb68b99ee6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9004,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.ApcReaderClientComponent',
                'GUID': 'b3581df4-2be0-489e-91a4-b5effd7f75e6',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.363Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcReader',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnablePinCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2471,
                '*id': {
                    '_values': [
                        9004
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b3581df4-2be0-489e-91a4-b5effd7f75e6',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9005,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcStarCouplerStarComponent.ApcStarCouplerStarClientComponent',
                'GUID': '53b4416f-3152-4b89-9da5-fa5d2282dd06',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.363Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerStar',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2061,
                '*id': {
                    '_values': [
                        9005
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '53b4416f-3152-4b89-9da5-fa5d2282dd06',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9006,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PersonnelClientComponent',
                'GUID': '1db92a1f-8512-4e52-915a-aa4e65166253',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.367Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Personnel',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.ExportSelectedPortraitsExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.CaptureExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PrintExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.EnrollExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PreviewExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.BatchPrintPrintExecutor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.GracePersonExecutor</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.SmartCardExecutor</Name><Position>18</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.AddClearanceExecutor</Name><Position>19</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.RemoveClearanceExecutor</Name><Position>20</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.ChangePINExecutor</Name><Position>21</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3756,
                '*id': {
                    '_values': [
                        9006
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1db92a1f-8512-4e52-915a-aa4e65166253',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9007,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Credentials.CredentialClientComponent',
                'GUID': 'd465e2b7-eb98-417e-b0d6-4a3c64c45413',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.37Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Credential',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.PropertySetCredentialExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Personnel.BatchPrintPrintExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Credentials.ChangePINExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2036,
                '*id': {
                    '_values': [
                        9007
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd465e2b7-eb98-417e-b0d6-4a3c64c45413',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9008,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.PortalComponent.PortalClientComponent',
                'GUID': 'c3d88c05-a472-40a4-bbf7-5d791400aa2d',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.373Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.OSIPortal',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2028,
                '*id': {
                    '_values': [
                        9008
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c3d88c05-a472-40a4-bbf7-5d791400aa2d',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9009,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ImagesComponent.ImagesClientComponent',
                'GUID': 'd00281dc-ad5d-4567-bc61-79d993abf636',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.377Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Images',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ImagesComponent.ChangePartitionExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1742,
                '*id': {
                    '_values': [
                        9009
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd00281dc-ad5d-4567-bc61-79d993abf636',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9010,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcStarCouplerWPSCComponent.ApcStarCouplerWPSCClientComponent',
                'GUID': 'e6ed30cb-41cf-4359-abcc-8e2374efcae7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.38Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerWPSC',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2061,
                '*id': {
                    '_values': [
                        9010
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'e6ed30cb-41cf-4359-abcc-8e2374efcae7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9011,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcComponent.ApcClientComponent',
                'GUID': 'ed566739-8b59-47be-9a76-64fb1d09ae2b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.38Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcController',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ApcComponent.FirmwareDownloadExecutorApc</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2181,
                '*id': {
                    '_values': [
                        9011
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ed566739-8b59-47be-9a76-64fb1d09ae2b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9012,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarBoardComponent.IStarBoardClientComponent',
                'GUID': '763f59d8-5b44-4df5-8174-eb50c2af601f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.383Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarACMBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2040,
                '*id': {
                    '_values': [
                        9012
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '763f59d8-5b44-4df5-8174-eb50c2af601f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9013,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarBoardComponent.IStarComBoardClientComponent',
                'GUID': 'b53f02a5-a947-4239-9eaa-64d0d9adb41b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.383Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarComBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1904,
                '*id': {
                    '_values': [
                        9013
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b53f02a5-a947-4239-9eaa-64d0d9adb41b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9014,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ISCControllerComponent.ISCControllerClientComponent',
                'GUID': '77a71bf7-dfda-44a6-9fb6-3dbf35ef1fa7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.387Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCController',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ISCControllerComponent.ISCControllerClientComponent+ControllerConfigurationDownload</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ISCControllerComponent.ISCControllerClientComponent+FullDownload</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ISCControllerComponent.ISCControllerClientComponent+FullPersonnelDownload</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2611,
                '*id': {
                    '_values': [
                        9014
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '77a71bf7-dfda-44a6-9fb6-3dbf35ef1fa7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9015,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.HardwareFolder.HardwareFolderClientComponent',
                'GUID': 'b0839bde-b590-473c-902e-c584771129cd',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.387Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.HardwareFolder',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1890,
                '*id': {
                    '_values': [
                        9015
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b0839bde-b590-473c-902e-c584771129cd',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9016,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.PersonnelView.PersonnelViewClientComponent',
                'GUID': 'ef6f4369-cfd4-42fd-ac12-5e779c7738df',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.387Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.PersonnelView',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.PersonnelView.PropertySetPersonnelViewExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1909,
                '*id': {
                    '_values': [
                        9016
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ef6f4369-cfd4-42fd-ac12-5e779c7738df',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9017,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ISCInputClientComponent',
                'GUID': '3428a4b3-0e58-4e87-97f6-3ba56ae3c10f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.387Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCInput',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ArmInput</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.DisArmInput</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ShuntInput</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.UnshuntInput</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2589,
                '*id': {
                    '_values': [
                        9017
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3428a4b3-0e58-4e87-97f6-3ba56ae3c10f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9018,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.FloorComponent.FloorClientComponent',
                'GUID': '91f5b17a-1db8-4fae-b00f-c1b028c0fe7a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.39Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Floor',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2022,
                '*id': {
                    '_values': [
                        9018
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '91f5b17a-1db8-4fae-b00f-c1b028c0fe7a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9019,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SmartCardKeyComponent.SmartCardKeyClientComponent',
                'GUID': 'f16ca8b4-e0f5-42d6-9f7b-7e7502112936',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.39Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.SmartCardKey',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1899,
                '*id': {
                    '_values': [
                        9019
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f16ca8b4-e0f5-42d6-9f7b-7e7502112936',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9020,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.iStarReaderClientComponent',
                'GUID': 'd572d4a6-209b-47c4-811f-e389a8f84e00',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.39Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarReader',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnablePinCauseListExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnableKeypadCommand</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.DisableKeypadCommand</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnableKeypadCommandCauseListExecutor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.ShowClearanceFilterCauseListExecutor</Name><Position>16</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3110,
                '*id': {
                    '_values': [
                        9020
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd572d4a6-209b-47c4-811f-e389a8f84e00',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9021,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CommPortApcComponent.CommPortApcClientComponent',
                'GUID': 'c3fc812b-fe40-4e6f-b836-953993760c6f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.403Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CommPortApc',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2040,
                '*id': {
                    '_values': [
                        9021
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c3fc812b-fe40-4e6f-b836-953993760c6f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9022,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ISCDiagnosticsComponent.ISCDiagnosticsClientComponent',
                'GUID': '76c65e5f-620e-42b5-8ab7-e17f165a0bb4',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.403Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 922,
                '*id': {
                    '_values': [
                        9022
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '76c65e5f-620e-42b5-8ab7-e17f165a0bb4',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9023,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ApcInputClientComponent',
                'GUID': 'f12319a8-7bc0-4f0a-b08a-92e8a0b96ca8',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.407Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcInput',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ArmInput</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.DisArmInput</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.InputArmedCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2464,
                '*id': {
                    '_values': [
                        9023
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f12319a8-7bc0-4f0a-b08a-92e8a0b96ca8',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9024,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcI8InputBoardComponent.ApcI8InputBoardClientComponent',
                'GUID': '1798a517-b3ac-46d6-95b7-9fa2d73c1a7e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.41Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcI8InputBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2052,
                '*id': {
                    '_values': [
                        9024
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1798a517-b3ac-46d6-95b7-9fa2d73c1a7e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9025,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.OutputClientComponent',
                'GUID': 'e43021c1-d69a-4ecf-bf19-3f63ff1abeb7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.41Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Output',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.ActivateOutput</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.DeactivateOutput</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.PulseOutput</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.OutputActiveCauseListExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.SlowFlashOutput</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.MomentarySlowFlashOutput</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.FastFlashOutput</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.OutputComponent.MomentaryFastFlashOutput</Name><Position>17</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3221,
                '*id': {
                    '_values': [
                        9025
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'e43021c1-d69a-4ecf-bf19-3f63ff1abeb7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9026,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.iStarIntrusionZoneClientComponent',
                'GUID': '79cf6a14-2fa4-4b8c-a76e-e48809ee7c5c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.413Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarIntrusionZone',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.ArmIntrusionZone</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.DisarmIntrusionZone</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.ForceArmIntrusionZone</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.iStarIntrusionZoneComponent.DisplayDoorsAndInputsExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2718,
                '*id': {
                    '_values': [
                        9026
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '79cf6a14-2fa4-4b8c-a76e-e48809ee7c5c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9027,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorClientComponent',
                'GUID': 'fc2fe181-bc5d-4ed8-a1ea-e53452e987db',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.413Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Elevator',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorReaderPinEnabledExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorReaderPinDisabledExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorReaderCauseListExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorButtonStatusList</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2683,
                '*id': {
                    '_values': [
                        9027
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fc2fe181-bc5d-4ed8-a1ea-e53452e987db',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9028,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ElevatorButtonClientComponent',
                'GUID': '1a1ef65a-db2d-4ef7-aba4-8c752ab1fd47',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.417Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Button',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ControlAccessExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.UnControlAccessExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ButtonActivateOutputExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ButtonDeactivateOutputExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ButtonPulseOutputExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ElevatorComponent.ControlAccessCauseListExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2136,
                '*id': {
                    '_values': [
                        9028
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1a1ef65a-db2d-4ef7-aba4-8c752ab1fd47',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9029,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.License.LicenseClientComponent',
                'GUID': 'f67c6f47-1402-44ee-8322-60f24bbd336c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.417Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 899,
                '*id': {
                    '_values': [
                        9029
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f67c6f47-1402-44ee-8322-60f24bbd336c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9030,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ApcDoorClientComponent',
                'GUID': '3758f212-b96d-4731-8119-c9406993d3a1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.417Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcDoor',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.LockDoor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.UnlockDoor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.MomentUnlockDoor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ApcDoorLockedCauseListExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2605,
                '*id': {
                    '_values': [
                        9030
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '3758f212-b96d-4731-8119-c9406993d3a1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9031,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.PersonnelType.PersonnelTypeClientComponent',
                'GUID': '124f9116-f81a-42fe-b09e-ba9d78b80e8f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.42Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.PersonnelType',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2036,
                '*id': {
                    '_values': [
                        9031
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '124f9116-f81a-42fe-b09e-ba9d78b80e8f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9032,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.iStarInputClientComponent',
                'GUID': 'a870a626-c03f-45e3-b3a4-4d022094767d',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.42Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInput',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.ArmInput</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.DisArmInput</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.InputComponent.InputArmedCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2468,
                '*id': {
                    '_values': [
                        9032
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'a870a626-c03f-45e3-b3a4-4d022094767d',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9033,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorClientComponent',
                'GUID': 'b72e6df6-2d12-4830-8b7a-b84774f4555c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.42Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCDoor',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.LockDoor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.UnlockDoor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.MomentUnlockDoor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorEntranceReaderEnabled</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorEntranceReaderDisabled</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorExitReaderEnabled</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorExitReaderDisabled</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorRexEnabled</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.ISCDoorRexDisabled</Name><Position>18</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3361,
                '*id': {
                    '_values': [
                        9033
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b72e6df6-2d12-4830-8b7a-b84774f4555c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9034,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CHUIDFormat.CHUIDFormatClientComponent',
                'GUID': 'a47e0cdb-cc79-4537-b6a7-8f495bc147de',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.423Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CHUIDFormat',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.CHUIDFormat.DeleteExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1740,
                '*id': {
                    '_values': [
                        9034
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'a47e0cdb-cc79-4537-b6a7-8f495bc147de',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9035,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcR8OutputBoardComponent.ApcR8OutputBoardClientComponent',
                'GUID': '416d75f9-7ed6-40d5-9458-3471c3e0ea29',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.423Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcR8OutputBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2055,
                '*id': {
                    '_values': [
                        9035
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '416d75f9-7ed6-40d5-9458-3471c3e0ea29',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9036,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcI32InputBoardComponent.ApcI32InputBoardClientComponent',
                'GUID': '497e257f-0bd7-4d76-8439-0a5faef8ca47',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.427Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcI32InputBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2055,
                '*id': {
                    '_values': [
                        9036
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '497e257f-0bd7-4d76-8439-0a5faef8ca47',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9037,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.FacilityComponent.FacilityClientComponent',
                'GUID': '19e10fb9-4a5b-4cf6-98cb-e035f3d96cdb',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.427Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.OSIFacility',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2034,
                '*id': {
                    '_values': [
                        9037
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '19e10fb9-4a5b-4cf6-98cb-e035f3d96cdb',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9038,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.OSIDoorClientComponent',
                'GUID': '680db18e-ab28-488a-be89-43053e0b947b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.427Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.OSIDoor',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.OSILockDoor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.OSIUnlockDoor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.OSIMomentUnlockDoor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.OSIReturnToNormal</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.OSIReset</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.OSIDeepReset</Name><Position>18</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3308,
                '*id': {
                    '_values': [
                        9038
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '680db18e-ab28-488a-be89-43053e0b947b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9039,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Cluster.ClusterClientComponent',
                'GUID': '0572c579-43ac-440c-97a6-d5a1c997a12e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.43Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Cluster',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2019,
                '*id': {
                    '_values': [
                        9039
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0572c579-43ac-440c-97a6-d5a1c997a12e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9040,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.iStarDoorClientComponent',
                'GUID': '4ec36d80-71a0-494c-80d0-255372b5303e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.43Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarDoor',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.LockDoor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.UnlockDoor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.MomentUnlockDoor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.DoorComponent.iStarDoorLockedCauseListExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2611,
                '*id': {
                    '_values': [
                        9040
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4ec36d80-71a0-494c-80d0-255372b5303e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9041,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SystemVariablesComponent.SystemVariablesClientComponent',
                'GUID': '53d0c679-11bd-4303-a8f0-cce3a917a40c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.433Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 924,
                '*id': {
                    '_values': [
                        9041
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '53d0c679-11bd-4303-a8f0-cce3a917a40c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9042,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SystemVariablesComponent.SystemVariablesObjectClientComponent',
                'GUID': '2f09fb85-1899-4d3e-817c-a0b50f75cdf1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.433Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CCureSystemVariables',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.SystemVariablesComponent.SystemVariableExecutors.EditExecutor</Name><Position>2</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1095,
                '*id': {
                    '_values': [
                        9042
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '2f09fb85-1899-4d3e-817c-a0b50f75cdf1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9043,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'JournalLogSystemToolClientComponent',
                'GUID': '230487b7-9d43-49a2-8904-5945e054f8e5',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.433Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 858,
                '*id': {
                    '_values': [
                        9043
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '230487b7-9d43-49a2-8904-5945e054f8e5',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9044,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ClearanceComponent.ClearanceClientComponent',
                'GUID': '4cbe2d03-f992-4f12-a3de-372caa6bfdf4',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.437Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Clearance',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2033,
                '*id': {
                    '_values': [
                        9044
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4cbe2d03-f992-4f12-a3de-372caa6bfdf4',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9045,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcAddOnBoardComponent.ApcAddOnBoardClientComponent',
                'GUID': '21f86bd4-bebf-4915-bf68-3cfc0bbcd337',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.437Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcAddOnBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2046,
                '*id': {
                    '_values': [
                        9045
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '21f86bd4-bebf-4915-bf68-3cfc0bbcd337',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9046,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.RMReaderLCDMessageSetComponent.RMReaderLCDMessageSetClientComponent',
                'GUID': 'df215f75-7dd6-4a03-924a-f541f03d8b76',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.437Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.RMReaderLCDMessageSet',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2219,
                '*id': {
                    '_values': [
                        9046
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'df215f75-7dd6-4a03-924a-f541f03d8b76',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9047,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.KeypadCommandComponent.KeypadCommandClientComponent',
                'GUID': '6d93ed91-8381-423a-a815-a6c35362aecb',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.437Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.KeypadCommand',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2475,
                '*id': {
                    '_values': [
                        9047
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6d93ed91-8381-423a-a815-a6c35362aecb',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9048,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarOutputBoardComponent.IStarOutputBoardClientComponent',
                'GUID': '6b8a75df-e8f1-4090-9af0-b674e3765a1a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.44Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarOutputBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2055,
                '*id': {
                    '_values': [
                        9048
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '6b8a75df-e8f1-4090-9af0-b674e3765a1a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9049,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ISCBoardComponent.IscBoardClientComponent',
                'GUID': '31f1bd16-5d88-41a5-8475-26a0893ff8c7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.44Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2031,
                '*id': {
                    '_values': [
                        9049
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '31f1bd16-5d88-41a5-8475-26a0893ff8c7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9050,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.BadgeLayout.BadgeLayoutClientComponent',
                'GUID': 'd37a69d0-09ea-4b46-bf47-68ed6e42fcaa',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.443Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'CCUREIDBadgeData.BadgeLayout',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.BadgeLayout.EditDesignExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2008,
                '*id': {
                    '_values': [
                        9050
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd37a69d0-09ea-4b46-bf47-68ed6e42fcaa',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9051,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.BadgeLayout.BadgeSetupClientComponent',
                'GUID': '10e528b7-c70f-407f-837f-4a21f2aa6976',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.443Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 906,
                '*id': {
                    '_values': [
                        9051
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '10e528b7-c70f-407f-837f-4a21f2aa6976',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9052,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.SWH_HandheldComponent.SWH_HandheldClientComponent',
                'GUID': '96fdf115-8127-4ddd-a02f-8193e14293d9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.447Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.SWH_Handheld',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2043,
                '*id': {
                    '_values': [
                        9052
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '96fdf115-8127-4ddd-a02f-8193e14293d9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9053,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.OSIReaderClientComponent',
                'GUID': 'a4fe1966-ccdb-4e0e-8f43-7cd3c06c3d66',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.447Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.OSIReader',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.EnablePinCauseListExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2471,
                '*id': {
                    '_values': [
                        9053
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'a4fe1966-ccdb-4e0e-8f43-7cd3c06c3d66',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9054,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.ISCReaderClientComponent',
                'GUID': 'dee89875-35da-4b26-a58a-c5262e143bde',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.447Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ISCReader',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinEnabled</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ReaderComponent.PinDisabled</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2314,
                '*id': {
                    '_values': [
                        9054
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'dee89875-35da-4b26-a58a-c5262e143bde',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9055,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DigitalCertificateComponent.EncryptionOptionsClientComponent',
                'GUID': 'f5949d64-a591-45f8-a857-3289e45feb07',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.45Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 929,
                '*id': {
                    '_values': [
                        9055
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f5949d64-a591-45f8-a857-3289e45feb07',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9056,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CardFormatComponent.CardFormatClientComponent',
                'GUID': '5bb3a439-8981-4cf3-a366-626613e85f22',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.45Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CardFormat',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2036,
                '*id': {
                    '_values': [
                        9056
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '5bb3a439-8981-4cf3-a366-626613e85f22',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9057,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.ClusterAreaClientComponent',
                'GUID': '66a01db8-025b-4f8e-9df5-89c90dcfd614',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.453Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ClusterArea',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.DisplayPersonnelExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.DisplayOccupancyGroupsExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.ClearAreaCount</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.AreaComponent.OccupancyModeCauseListExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2647,
                '*id': {
                    '_values': [
                        9057
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '66a01db8-025b-4f8e-9df5-89c90dcfd614',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9058,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Video.VideoCameraClientComponent',
                'GUID': '470f92d2-1033-45eb-9f7c-a939d9a947c9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.453Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.VideoCamera',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.VideoClientComponents.VideoCameraPopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.Video.EmailExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2595,
                '*id': {
                    '_values': [
                        9058
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '470f92d2-1033-45eb-9f7c-a939d9a947c9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9059,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.CommPortComponent.CommPortClientComponent',
                'GUID': '07d38d10-21c1-4f45-8394-8ba528a8920f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.CommPort',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2031,
                '*id': {
                    '_values': [
                        9059
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '07d38d10-21c1-4f45-8394-8ba528a8920f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9060,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.DigitalCertificateComponent.DigitalCertificateClientComponent',
                'GUID': 'b403b95e-eae4-4ac0-a893-fec5d1dcca82',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.DigitalCertificate',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 918,
                '*id': {
                    '_values': [
                        9060
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b403b95e-eae4-4ac0-a893-fec5d1dcca82',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9061,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcR48OutputBoardComponent.ApcR48OutputBoardClientComponent',
                'GUID': '76af259d-607d-4e08-8979-650d793a199c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcR48OutputBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2058,
                '*id': {
                    '_values': [
                        9061
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '76af259d-607d-4e08-8979-650d793a199c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9062,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.Video.VideoServerClientComponent',
                'GUID': 'b4dcd3ac-6746-4771-8767-0ae7ffbaf2dd',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.VideoServer',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2454,
                '*id': {
                    '_values': [
                        9062
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b4dcd3ac-6746-4771-8767-0ae7ffbaf2dd',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9063,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarController.IStarClientComponent',
                'GUID': '722d16df-b5b7-4677-ae6d-c39fd545c201',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarController',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.FirmwareDownloadExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.ApproveCertificateExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.DenyCertificateExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.DiagnosticsExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.IStarController.ChangePartitionExecutor</Name><Position>14</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2803,
                '*id': {
                    '_values': [
                        9063
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '722d16df-b5b7-4677-ae6d-c39fd545c201',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9064,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IStarInputBoardComponent.IStarInputBoardClientComponent',
                'GUID': 'd49b4205-a3ca-4fd4-8536-1ae1004e6921',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInputBoard',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2052,
                '*id': {
                    '_values': [
                        9064
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd49b4205-a3ca-4fd4-8536-1ae1004e6921',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9065,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ApcStarCouplerMiniStarComponent.ApcStarCouplerMiniStarClientComponent',
                'GUID': 'fd7eeda6-fe0c-466d-a185-051262a0ec9c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerMiniStar',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2073,
                '*id': {
                    '_values': [
                        9065
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fd7eeda6-fe0c-466d-a185-051262a0ec9c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9066,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.IPCamera.AxisIPCamera',
                'GUID': 'bd6d67e9-fa49-47e5-a900-fc907893e161',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.IPCamera',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2440,
                '*id': {
                    '_values': [
                        9066
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'bd6d67e9-fa49-47e5-a900-fc907893e161',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9067,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.CCTVSwitchClientComponent',
                'GUID': 'd25e1234-7c2a-4d8a-be44-87cd8f6f949a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.CCTVSwitch',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2023,
                '*id': {
                    '_values': [
                        9067
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd25e1234-7c2a-4d8a-be44-87cd8f6f949a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9068,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.CCTVProtocolClientComponent',
                'GUID': 'f6c0922b-c344-4c7d-9f4f-59edb5d142bf',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.CCTVProtocol',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2027,
                '*id': {
                    '_values': [
                        9068
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f6c0922b-c344-4c7d-9f4f-59edb5d142bf',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9069,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.CCTVCameraClientComponent',
                'GUID': '0b5f243c-7c89-4d21-9b36-6b17e1d80363',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.CCTVCamera',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.VideoClientComponents.SentToMonitor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2158,
                '*id': {
                    '_values': [
                        9069
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0b5f243c-7c89-4d21-9b36-6b17e1d80363',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9070,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.VideoTourClientComponent',
                'GUID': '02b6789d-d7c1-402a-88b9-ed5648ea85b0',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.VideoTour',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2450,
                '*id': {
                    '_values': [
                        9070
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '02b6789d-d7c1-402a-88b9-ed5648ea85b0',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9071,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.VideoViewClientComponent',
                'GUID': 'e8c1659a-5479-45ee-a0fc-211de2743497',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.TourView',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2449,
                '*id': {
                    '_values': [
                        9071
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'e8c1659a-5479-45ee-a0fc-211de2743497',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9072,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.VideoClientComponents.VideoFolderClientComponent',
                'GUID': '63f3928f-09bf-4860-be2b-5b7e84e99846',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.VideoObjects.VideoFolder',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1875,
                '*id': {
                    '_values': [
                        9072
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '63f3928f-09bf-4860-be2b-5b7e84e99846',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9073,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Holidays.HolidaysClientComponent',
                'GUID': 'fbf1b0b9-0f69-44c3-8234-a9957cd76592',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Holiday',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2166,
                '*id': {
                    '_values': [
                        9073
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fbf1b0b9-0f69-44c3-8234-a9957cd76592',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9074,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.LogMessageRestore.LogMessageRestoreClientComponent',
                'GUID': 'd664563c-5ba2-4659-9b7e-7183930e0e4a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 921,
                '*id': {
                    '_values': [
                        9074
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd664563c-5ba2-4659-9b7e-7183930e0e4a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9075,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.LogMessageBackup.LogMessageBackupClientComponent',
                'GUID': 'f0f20d9b-2daf-468d-abf4-23bac9926258',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 919,
                '*id': {
                    '_values': [
                        9075
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'f0f20d9b-2daf-468d-abf4-23bac9926258',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9076,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.BackupSystemTool.BackupSystemToolClientComponent',
                'GUID': '58c5389a-51e2-46bf-9ae5-be799e47f72f',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.457Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 919,
                '*id': {
                    '_values': [
                        9076
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '58c5389a-51e2-46bf-9ae5-be799e47f72f',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9077,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.UdfFieldDefs.UdfFieldDefClientComponent',
                'GUID': '664ef1d1-c465-4d80-8442-2c6127f0bad9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.497Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.UdfFieldDef',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1592,
                '*id': {
                    '_values': [
                        9077
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '664ef1d1-c465-4d80-8442-2c6127f0bad9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9078,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Schedules.ScheduleClientComponent',
                'GUID': '36a4de40-710f-477b-8dd8-859e953e096c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.497Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.TimeSpec',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Schedules.PreviewActivationTimesExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2325,
                '*id': {
                    '_values': [
                        9078
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '36a4de40-710f-477b-8dd8-859e953e096c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9079,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationLayout.ApplicationLayoutClientComponent',
                'GUID': '50a152e9-6baa-482c-9d5a-5386fb207dbd',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.5Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationLayout',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PrintExecutor</Name><Position>14</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.SendEmailExecutor</Name><Position>15</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.CopyAndPasteRowsExecutor</Name><Position>16</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3049,
                '*id': {
                    '_values': [
                        9079
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '50a152e9-6baa-482c-9d5a-5386fb207dbd',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9080,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Partition.PartitionClientComponent',
                'GUID': '8e41c564-5db2-4f97-a652-5d08b7fff561',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.5Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Partition',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Partition.GraceAllExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Partition.NewPartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1881,
                '*id': {
                    '_values': [
                        9080
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8e41c564-5db2-4f97-a652-5d08b7fff561',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9081,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportClientComponent',
                'GUID': 'd6bd53fd-c148-47e3-bc7e-82953ee41127',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.5Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Import',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.StartListeningExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.StopListeningExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportOnServerExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Import.FindImportResultsExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2883,
                '*id': {
                    '_values': [
                        9081
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd6bd53fd-c148-47e3-bc7e-82953ee41127',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9082,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Export.ExportResultClientComponent',
                'GUID': 'c0c83376-b828-4f26-b179-69996e0694d9',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.503Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ExportResult',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>3</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1168,
                '*id': {
                    '_values': [
                        9082
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c0c83376-b828-4f26-b179-69996e0694d9',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9083,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ResourceEditor.ResourceEditorClientComponent',
                'GUID': '4179d2f6-ac2e-41e4-bc01-dce3d1b4880d',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.503Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 915,
                '*id': {
                    '_values': [
                        9083
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4179d2f6-ac2e-41e4-bc01-dce3d1b4880d',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9084,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Operators.OperatorsClientComponent',
                'GUID': '12f518a1-2173-4955-aff0-0882609a39af',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.507Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Operator',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Operators.OperatorsClientComponent+ChangeOperatorPartitionExecutor</Name><Position>10</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ShowGISLocationExecutor</Name><Position>11</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2351,
                '*id': {
                    '_values': [
                        9084
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '12f518a1-2173-4955-aff0-0882609a39af',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9085,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ImportExportHistory.ImportExportHistoryClientComponent',
                'GUID': 'ba0ea845-07cb-492f-81af-4d35c7d8e384',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.507Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 925,
                '*id': {
                    '_values': [
                        9085
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ba0ea845-07cb-492f-81af-4d35c7d8e384',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9086,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Query.QueryClientComponent',
                'GUID': '35dc0c01-9464-4b27-9951-d02237539730',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.507Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Query',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2584,
                '*id': {
                    '_values': [
                        9086
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '35dc0c01-9464-4b27-9951-d02237539730',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9087,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ManualAction.ManualActionClientComponent',
                'GUID': '0c6f38eb-b918-4b74-b94d-ee8021eb02fc',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.507Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ManualAction',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ManualAction.ManualActionDetailsExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ManualAction.CancelManualActionExecutor</Name><Position>4</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1334,
                '*id': {
                    '_values': [
                        9087
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0c6f38eb-b918-4b74-b94d-ee8021eb02fc',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9088,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Export.ExportClientComponent',
                'GUID': 'cbdd6116-c1f8-4661-9358-688e3eedafdd',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.51Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Export',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Export.RunExportExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2158,
                '*id': {
                    '_values': [
                        9088
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'cbdd6116-c1f8-4661-9358-688e3eedafdd',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9089,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.DynamicViews.DynamicViewsClientComponent',
                'GUID': '36271528-6f66-4859-bffc-ea7d281d8c56',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.51Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.DynamicView',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.DynamicViews.PersistDynamicViewLayoutsExecutor</Name><Position>14</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.DynamicViews.ExportToExcelExecutor</Name><Position>15</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.CopyAndPasteRowsExecutor</Name><Position>16</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PrintExecutor</Name><Position>17</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.SendEmailExecutor</Name><Position>18</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3345,
                '*id': {
                    '_values': [
                        9089
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '36271528-6f66-4859-bffc-ea7d281d8c56',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9090,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Maps.MapsClientComponent',
                'GUID': '16400f0e-27ad-45ff-9bd1-041c2a5826b2',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.51Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Maps',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2584,
                '*id': {
                    '_values': [
                        9090
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '16400f0e-27ad-45ff-9bd1-041c2a5826b2',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9091,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent',
                'GUID': '0c9234f9-f678-4593-ae29-806257f2e503',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.513Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent+PrivilegeEditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegesClientComponent+PrivilegeDeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2097,
                '*id': {
                    '_values': [
                        9091
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0c9234f9-f678-4593-ae29-806257f2e503',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9092,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Groups.GroupsClientComponent',
                'GUID': '625b8a1a-3050-4d56-a3b8-627308b7b2a7',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.513Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Group',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2016,
                '*id': {
                    '_values': [
                        9092
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '625b8a1a-3050-4d56-a3b8-627308b7b2a7',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9093,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventClientComponent',
                'GUID': 'ece97599-e6f4-4c8e-b0fa-d7ed762c6cda',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.513Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.XFEvent',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.ActivateEvent</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.DeactivateEvent</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.ArmEvent</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.DisArmEvent</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventActiveCauseListExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventArmedCauseListExecutor</Name><Position>15</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.AckEvent</Name><Position>16</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventDetailsExecutor</Name><Position>17</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventSilenceExecutor</Name><Position>18</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventResetActionsExecutor</Name><Position>19</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>20</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 3565,
                '*id': {
                    '_values': [
                        9093
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ece97599-e6f4-4c8e-b0fa-d7ed762c6cda',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9094,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.TimeZones.TimeZoneClientComponentClientComponent',
                'GUID': '686f544b-a802-4126-9bb9-2a0e8ec597e2',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.527Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.TimeZone',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>6</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1616,
                '*id': {
                    '_values': [
                        9094
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '686f544b-a802-4126-9bb9-2a0e8ec597e2',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9095,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Import.ImportResultClientComponent',
                'GUID': 'ea6025b3-64a4-4c1b-9f0a-8634d4c79b6e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.53Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ImportResult',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>4</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1310,
                '*id': {
                    '_values': [
                        9095
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'ea6025b3-64a4-4c1b-9f0a-8634d4c79b6e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9096,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent',
                'GUID': '4a5c585f-65f1-403b-8e4e-3579a29db528',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.53Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 909,
                '*id': {
                    '_values': [
                        9096
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4a5c585f-65f1-403b-8e4e-3579a29db528',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9097,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+AuditLogClientComponent',
                'GUID': 'fd82bfea-82ab-4ebf-8f48-ca093914138b',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.53Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.AuditLog',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>2</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1053,
                '*id': {
                    '_values': [
                        9097
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fd82bfea-82ab-4ebf-8f48-ca093914138b',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9098,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Logs.AuditLogSystemToolClientComponent+JournalLogClientComponent',
                'GUID': '68c1afcb-5173-4d3a-b6fc-6f3c9639ac7c',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.533Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.JournalLogBase',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>2</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1061,
                '*id': {
                    '_values': [
                        9098
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '68c1afcb-5173-4d3a-b6fc-6f3c9639ac7c',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9099,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Event.EventPriorityClientComponent',
                'GUID': 'b949d2f5-e2b7-47ee-91e4-a48742a6b58e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.537Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Client.ClientComponents.Privileges.PrivilegeManager',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 905,
                '*id': {
                    '_values': [
                        9099
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b949d2f5-e2b7-47ee-91e4-a48742a6b58e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9205,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ReportClientComponent',
                'GUID': '435351b5-3fba-48ba-ae1a-6e495510794e',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.537Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.Report',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.RunReportExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.FindReportResultsExecutor</Name><Position>14</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>15</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2883,
                '*id': {
                    '_values': [
                        9205
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '435351b5-3fba-48ba-ae1a-6e495510794e',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9206,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ReportFormComponent',
                'GUID': '29fe1703-230a-4a71-8b69-e0c84dab1bc5',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.537Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ReportForm',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2590,
                '*id': {
                    '_values': [
                        9206
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '29fe1703-230a-4a71-8b69-e0c84dab1bc5',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9207,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerClientComponent',
                'GUID': 'a450692c-6e2f-4526-8ed1-bc0793727f5a',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.537Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServer',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerConnection</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerSyncConflicts</Name><Position>10</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2229,
                '*id': {
                    '_values': [
                        9207
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'a450692c-6e2f-4526-8ed1-bc0793727f5a',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9208,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerRegionClientComponent',
                'GUID': '570506ed-e20c-41ed-b393-c7e67a58a591',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.54Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServerRegion',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2486,
                '*id': {
                    '_values': [
                        9208
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '570506ed-e20c-41ed-b393-c7e67a58a591',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9209,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerSynchronizationConflictsClientComponent',
                'GUID': '77ec84d4-97a9-4163-9f92-e63d549e64a1',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.547Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ApplicationServerSynchronizationConflict',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerVerifyConflictResolved</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.ApplicationServer.ApplicationServerViewConflictedRecord</Name><Position>9</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2140,
                '*id': {
                    '_values': [
                        9209
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '77ec84d4-97a9-4163-9f92-e63d549e64a1',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9210,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ReportResultComponent',
                'GUID': 'c19d759b-b0c4-4190-9f1a-8fc35fbda2cc',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.55Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ReportResult',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ExportReportResultsExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.ViewQueryExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.Reports.StopRunningReportExecutor</Name><Position>13</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>14</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2755,
                '*id': {
                    '_values': [
                        9210
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c19d759b-b0c4-4190-9f1a-8fc35fbda2cc',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9211,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.SampleComponent.SampleComponentClientComponent',
                'GUID': '4bee4fe1-8b6a-4fe8-89c3-1575557e7319',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.55Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Samples.Objects.TestObject',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.SampleComponent.SampleExecutor</Name><Position>13</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2577,
                '*id': {
                    '_values': [
                        9211
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '4bee4fe1-8b6a-4fe8-89c3-1575557e7319',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 9212,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.SampleComponent.SampleComponentExcelClientComponent',
                'GUID': 'd7ded4be-65e4-4f3f-83c2-4e6b7adbc7aa',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.553Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Samples.Objects.SampleObject',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PopupViewExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ViewCurrentTabExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>8</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.AddToGroupExecutor</Name><Position>9</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>10</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>11</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>12</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 2454,
                '*id': {
                    '_values': [
                        9212
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'd7ded4be-65e4-4f3f-83c2-4e6b7adbc7aa',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13323,
                'ExceptionObjectID': 1004,
                'FullyQualifiedClassName': 'SoftwareHouse.NextGen.Client.ClientComponents.ImagesComponent.ImagesClientComponent',
                'GUID': '037bebcd-25c9-4c7e-ac77-7f66ae0b5c74',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.56Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.NextGen.Common.SecurityObjects.Images',
                'ExceptionObjectGuid': '04c22b3a-519f-4e54-ae5a-9e72a3240c64',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.NextGen.Client.ClientComponents.ImagesComponent.ChangePartitionExecutor</Name><Position>7</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1742,
                '*id': {
                    '_values': [
                        13323
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '037bebcd-25c9-4c7e-ac77-7f66ae0b5c74',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13324,
                'ExceptionObjectID': -2147483648,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Workstation.AccessWorkstationClientComponent',
                'GUID': '56ebd962-4ad3-40de-adf4-32149d865bd0',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.563Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.AccessWorkstation',
                'ExceptionObjectGuid': '00000000-0000-0000-0000-000000000000',
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>5</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1474,
                '*id': {
                    '_values': [
                        13324
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '56ebd962-4ad3-40de-adf4-32149d865bd0',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13330,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.CustomerLabel.CustomerLabelsObjectClientComponent',
                'GUID': 'fe68536c-f092-4810-90ec-fa77cc0045d8',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.563Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.CustomerLabels',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponents.CustomerLabel.CustomerLabelEditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NewExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1476,
                '*id': {
                    '_values': [
                        13330
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'fe68536c-f092-4810-90ec-fa77cc0045d8',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13331,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.ScheduleTimeZonePairs.ScheduleTimeZonePairClientComponent',
                'GUID': '888796e1-9bce-44ab-a051-a2c234d9a431',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.567Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.ScheduleTimeZonePair',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>5</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1483,
                '*id': {
                    '_values': [
                        13331
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '888796e1-9bce-44ab-a051-a2c234d9a431',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13332,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.Workstation.AccessWorkstationClientComponent',
                'GUID': '61a7fcb6-1ca9-4fd3-9e30-fed544727742',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.567Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': '',
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.AccessWorkstation',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.EditExecutor</Name><Position>2</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.DeleteExecutor</Name><Position>3</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.PropertySetExecutor</Name><Position>4</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ExportSelectionExecutor</Name><Position>5</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInAuditLogExecutor</Name><Position>6</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.FindInJournalLogExecutor</Name><Position>7</Position></Verb><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ChangePartitionExecutor</Name><Position>8</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 1908,
                '*id': {
                    '_values': [
                        13332
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '61a7fcb6-1ca9-4fd3-9e30-fed544727742',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13333,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.MetaTags.MetaTagClientComponent',
                'GUID': '03b44f66-4d69-45ce-ac9d-435fcaa2efeb',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.567Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': null,
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.MetaTag',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 873,
                '*id': {
                    '_values': [
                        13333
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '03b44f66-4d69-45ce-ac9d-435fcaa2efeb',
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
            },
            {
                'IsGroupOrExceptionObjectType': null,
                'ObjectID': 13334,
                'ExceptionObjectID': null,
                'FullyQualifiedClassName': 'SoftwareHouse.CrossFire.Client.ClientComponents.MetaTags.LocationMetaTagClientComponent',
                'GUID': 'b6c7b85d-06c4-4c96-a1ed-ac60cf9785fc',
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-07-27T05:50:22.57Z',
                'ParentPrivilegeObjectID': 5100,
                'Protected': false,
                'DefaultRecord': false,
                'Template': false,
                'Grant': 0,
                'VerbNameList': null,
                'PersistentObjectType': 'SoftwareHouse.CrossFire.Common.Objects.LocationMetaTag',
                'ExceptionObjectGuid': null,
                'IsExceptionGroup': false,
                'Executors': '<Verbs xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/SoftwareHouse.CrossFire.Common.Objects"><VerbList><Verb><Grant>false</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.NoAccess</Name><Position>0</Position></Verb><Verb><Grant>true</Grant><Name>SoftwareHouse.CrossFire.Client.ClientComponentsFramework.ReadOnly</Name><Position>1</Position></Verb></VerbList></Verbs>',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                '*routing': null,
                '*ObjectSize': 889,
                '*id': {
                    '_values': [
                        13334
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PermissionSpecifier',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'b6c7b85d-06c4-4c96-a1ed-ac60cf9785fc',
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
            },
            {
                'ObjectID': 5001,
                'PrivilegeID': 5100,
                'PartitionID': 1,
                'GUID': '1e63b476-f59c-4da1-88fe-fdcbd6d2f6a4',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.PrivilegePartitionPair',
                '*routing': null,
                '*ObjectSize': 311,
                '*id': {
                    '_values': [
                        5001
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.PrivilegePartitionPair',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '1e63b476-f59c-4da1-88fe-fdcbd6d2f6a4',
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
    },
    {
        'IsSystemPrivilege': true,
        'ClientExclusionList': '',
        'Enabled': true,
        'Protected': true,
        'RequiresManualActionChallenge': false,
        'DefaultRecord': false,
        'Template': false,
        'ManualActionsDefaultPriority': 75,
        'ManualActionsMaximumPriority': 200,
        'PartitionAll': true,
        'SpecialEditingRequired': false,
        'IntrObjectID': 102,
        'ExcludedClientTypes': null,
        'ActiveTemplateID': null,
        'ActiveTemplate': false,
        'PartitionID': 1,
        'LocationMetaTagFullName': '',
        'GISLocation': false,
        'GeographicLocation': null,
        'Name': 'Full privilege for partition: Default',
        'Description': 'This is the full privilege for the partition: Default',
        'ObjectID': 5102,
        'GUID': 'd46feb9a-ad12-4220-b424-aa586d84a412',
        'LastModifiedByID': 1,
        'LastModifiedTime': '2021-07-26T13:53:38.567Z',
        'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
        '*routing': null,
        '*ObjectSize': 388,
        '*id': {
            '_values': [
                5102
            ],
            '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.Privilege',
            '_appServer': 'VM-INGRTN-16-15',
            'Guid': 'd46feb9a-ad12-4220-b424-aa586d84a412',
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
];

export { typeName, table };