const typeName = 'SoftwareHouse.CrossFire.Common.Objects.Operator';
const table = [
    {
        'OperatorState': 1,
        'AuthenticationTypeEnum': 2,
        'AuthenticationType': 'Windows',
        'ObjectID': 5000,
        'Description': 'VM-INGRTN-16-15_test',
        'LockedOut': false,
        'Enabled': true,
        'GUID': '4ea4f53e-2aae-4bee-b12f-9fda7921e13b',
        'LastModifiedByID': 5000,
        'LastModifiedTime': '2022-02-24T13:57:39.983Z',
        'Name': 'test',
        'Protected': false,
        'WindowsPrincipal': 'VM-INGRTN-16-15\\TEST',
        'OauthID': null,
        'DefaultRecord': false,
        'Template': false,
        'Signature': 'f5W63O8TZxI2VWSeyHD7iAM/m88=',
        'LoggedState': 1,
        'TemplateID': 0,
        'PartitionID': 1,
        'Salt': null,
        'BasicUsername': null,
        'EncodedPassword': null,
        'EmailAddress': null,
        'ActiveTemplateID': null,
        'ActiveTemplate': false,
        'WebRoleViewID': null,
        'PasswordChanged': false,
        'BasicAuthenticationAuthorized': false,
        'LayoutName': '',
        'LayoutGuid': '00000000-0000-0000-0000-000000000000',
        'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.Operator',
        'Domain': 'VM-INGRTN-16-15',
        'Username': 'TEST',
        '*routing': null,
        '*ObjectSize': 380,
        '*id': {
            '_values': [
                5000
            ],
            '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.Operator',
            '_appServer': 'VM-INGRTN-16-15',
            'Guid': '4ea4f53e-2aae-4bee-b12f-9fda7921e13b',
            'RoutingInfo': null,
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
                'OperatorID': 5000,
                'ApplicationLayoutID': 5000,
                'Order_': 0,
                'AppServerID': 5000,
                'MonitorInstance': 1,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.OperatorApplicationLayoutPair',
                '*routing': null,
                '*ObjectSize': 318,
                '*id': {
                    '_values': [
                        5000
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.OperatorApplicationLayoutPair',
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
            },
            {
                'ObjectID': 5000,
                'OperatorID': 5000,
                'PrivilegeID': 1,
                'GroupID': 0,
                'ScheduleID': 2,
                'Signature': 'aoDFAzb9qToyojJQ35TNJtBoLUA=',
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.OperatorPrivilegePair',
                '*routing': null,
                '*ObjectSize': 330,
                '*id': {
                    '_values': [
                        5000
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.OperatorPrivilegePair',
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
            },
            {
                'ObjectID': 5000,
                'OperatorGuid': '4ea4f53e-2aae-4bee-b12f-9fda7921e13b',
                'RoleGuid': '037dc067-1f16-4c4b-8fa5-c0af5ee14643',
                'ClassType': 'ACVS.Enterprise.Common.Services.CoreOperatorRolePair',
                '*routing': null,
                '*ObjectSize': 302,
                '*id': {
                    '_values': [
                        5000
                    ],
                    '_objectTypeName': 'ACVS.Enterprise.Common.Services.CoreOperatorRolePair',
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