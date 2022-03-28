/* eslint-disable @typescript-eslint/no-loss-of-precision */
const typeName = 'SoftwareHouse.NextGen.Common.SecurityObjects.PersonnelType';
const schema = {
    'FullClassName': 'SoftwareHouse.NextGen.Common.SecurityObjects.PersonnelType',
    'LocalizedName': 'Personnel Type',
    'IsUserSelectable': true,
    'LocalityType': 'OptionallyGlobal',
    'Description': 'This class is used to specify a Personnel Type in the system.',
    'IsGroupable': true,
    'PropertyList': [
        {
            'Name': 'Name',
            'LocalizedName': 'Name',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 100,
            'Description': 'The name of this personnel type.',
            'IsUdf': false
        },
        {
            'Name': 'Description',
            'LocalizedName': 'Description',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 500,
            'Description': 'The description of this personnel type.',
            'IsUdf': false
        },
        {
            'Name': 'GUID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Guid',
            'IsEnum': false,
            'Description': 'GUID.',
            'IsUdf': false
        },
        {
            'Name': 'CanBeVisitor',
            'LocalizedName': 'Can Be Visitor',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Can this Personnel Type represent Personnel that can be visitor',
            'IsUdf': false
        },
        {
            'Name': 'ClassType',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Type',
            'IsEnum': false,
            'IsUdf': false
        },
        {
            'Name': 'ExpirationBasedOnProperty',
            'LocalizedName': 'Cardholder Date Field',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 200,
            'Description': 'Cardholder Date Field Used For Expiration Date Calculation',
            'IsUdf': false
        },
        {
            'Name': 'ExpirationIgnoreYear',
            'LocalizedName': 'Use Current Year To Calculate Expiration Date',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Use Current Year to Calculate Expiration Date',
            'IsUdf': false
        },
        {
            'Name': 'ExpirationPropertyClassType',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Type',
            'IsEnum': false,
            'Description': 'Cardholder Date Field Class Type',
            'IsUdf': false
        },
        {
            'Name': 'ExpirationSpecificTime',
            'LocalizedName': 'Expiration Specific Time',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Time',
            'IsEnum': false,
            'Description': 'The default expiration time for this personnel type, as a specific date',
            'DynamicViewColumnType': 'Time',
            'IsUdf': false
        },
        {
            'Name': 'ExpirationTimespan',
            'LocalizedName': 'Expiration Timespan',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 2147483647.0,
            'Description': 'The default expiration timespan for this personnel type',
            'IsUdf': false
        },
        {
            'Name': 'ExpirationType',
            'LocalizedName': 'Expiration Type',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ExpirationType',
            'IsEnum': true,
            'MinValue': 0.0,
            'MaxValue': 2147483647.0,
            'Description': 'The default expiration type for this personnel type',
            'IsUdf': false
        },
        {
            'Name': 'InactivityPeriod',
            'LocalizedName': 'Inactivity Period',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 2000.0,
            'Description': 'Inactivity Period',
            'IsUdf': false
        },
        {
            'Name': 'LastModifiedByID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the operator who Last Modified this Personnel Type.',
            'IsUdf': false
        },
        {
            'Name': 'LastModifiedTime',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The time of the Last Modification of this Personnel Type.',
            'DateTimeKind': 'Local',
            'DynamicViewColumnType': 'DateTime',
            'IsUdf': false
        },
        {
            'Name': 'LocationMetaTagFullName',
            'LocalizedName': 'Location Tag Path',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'Description': 'This represents the full name of the location tag.',
            'LinkedProperties': null,
            'IsUdf': false
        },
        {
            'Name': 'ObjectID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Object ID.',
            'IsUdf': false
        },
        {
            'Name': 'ObjectKey',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'IsUdf': false
        },
        {
            'Name': 'PartitionID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Partition ID.',
            'IsUdf': false
        },
        {
            'Name': 'PartitionKey',
            'LocalizedName': 'Partition Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Partition of object',
            'LinkedProperties': [
                'PartitionID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'PartitionID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.Partition'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'Protected',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Protected',
            'IsUdf': false
        },
        {
            'Name': 'WebPersonnelViewID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'Description': 'The Web Personnel View associated with this Personnel Type',
            'IsUdf': false
        },
        {
            'Name': 'WebPersonnelViewKey',
            'LocalizedName': 'Web Personnel View',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': '*** PersonnelTypeWebPersonnelViewKeyToolTipText ***',
            'LinkedProperties': [
                'WebPersonnelViewID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'WebPersonnelViewID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.WebPersonnelView'
                ]
            },
            'IsUdf': false
        }
    ]
};

export { typeName, schema };