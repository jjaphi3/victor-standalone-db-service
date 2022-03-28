/* eslint-disable @typescript-eslint/no-loss-of-precision */
const typeName = 'SoftwareHouse.NextGen.Common.SecurityObjects.Clearance';
const schema = {
    'FullClassName': 'SoftwareHouse.NextGen.Common.SecurityObjects.Clearance',
    'LocalizedName': 'Clearance',
    'IsUserSelectable': true,
    'LocalityType': 'OptionallyGlobal',
    'Description': 'This class is used to specify a clearance in the system.',
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
            'Description': 'Default tooltip text for property Name.',
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
            'Description': 'Default tooltip text for property Description.',
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
            'Description': 'GUID',
            'IsUdf': false
        },
        {
            'Name': 'ActivationDate',
            'LocalizedName': 'Activation Date',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The activation date for this clearance.',
            'DateTimeKind': 'Unspecified',
            'DynamicViewColumnType': 'DateTime',
            'IsUdf': false
        },
        {
            'Name': 'ApprovalRuleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Object ID of the associated Approval Rule object.',
            'IsUdf': false
        },
        {
            'Name': 'ApproversSameAsReviewers',
            'LocalizedName': 'Approvers Same As Reviewers',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether Approvers are the Same as Reviewers for this clearance or not.',
            'IsUdf': false
        },
        {
            'Name': 'AssignViaAccessMgmtPortalOnly',
            'LocalizedName': 'Assign Via Access Mgmt. Portal Only',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'True when this clearance can only be assigned via the Access Mgmt. Portal.',
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
            'Name': 'Custom',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Is this a Custom Clearance.',
            'IsUdf': false
        },
        {
            'Name': 'DaysReviewIsOverdue',
            'LocalizedName': 'Days Review is Overdue',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'LinkedProperties': [
                'HasReviewerRule'
            ],
            'IsUdf': false
        },
        {
            'Name': 'ExpirationDate',
            'LocalizedName': 'Expiration Date',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The expiration date/time of this clearance.',
            'DateTimeKind': 'Unspecified',
            'DynamicViewColumnType': 'DateTime',
            'IsUdf': false
        },
        {
            'Name': 'ExpiringClearancePerPerson',
            'LocalizedName': 'Expiring Clearance Per Person',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'True when this clearance supports individual expiration for each person it is assigned too.',
            'IsUdf': false
        },
        {
            'Name': 'FriendlyDescription',
            'LocalizedName': 'Friendly Description',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 500,
            'Description': 'A friendly description used by the Access Mgmt. Portal.',
            'IsUdf': false
        },
        {
            'Name': 'FriendlyName',
            'LocalizedName': 'Friendly Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 100,
            'Description': 'A friendly name used by the Access Mgmt. Portal.',
            'IsUdf': false
        },
        {
            'Name': 'GeographicLocation',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': -1,
            'Description': 'Location',
            'IsUdf': false
        },
        {
            'Name': 'GISLocation',
            'LocalizedName': 'GIS Location',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Location',
            'LinkedProperties': [
                'GeographicLocation'
            ],
            'IsUdf': false
        },
        {
            'Name': 'HasApprovalRule',
            'LocalizedName': 'Has Approval Rule',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Object ID of the associated Approval Rule object.',
            'IsUdf': false
        },
        {
            'Name': 'HasReviewerRule',
            'LocalizedName': 'Has Reviewer Rule',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Object ID of the associated Approval Rule object.',
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
            'Description': 'Last Modified By',
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
            'Description': 'Last Modified Time',
            'DateTimeKind': 'Local',
            'DynamicViewColumnType': 'UTCDateTime',
            'IsUdf': false
        },
        {
            'Name': 'LastReviewDate',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The last date/time of the assignment review for this clearance.',
            'DateTimeKind': 'Unspecified',
            'DynamicViewColumnType': 'DateTime',
            'IsUdf': false
        },
        {
            'Name': 'LastReviewDateViewable',
            'LocalizedName': 'Last Review Date',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'Description': 'The last review date for this clearance.',
            'LinkedProperties': [
                'LastReviewDate'
            ],
            'IsUdf': false
        },
        {
            'Name': 'LastReviewedByID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The last reviewer of the assignments for this clearance.',
            'IsUdf': false
        },
        {
            'Name': 'LastReviewedByKey',
            'LocalizedName': 'Last Reviewed By',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The last reviewer of the assignments for this clearance.',
            'LinkedProperties': [
                'LastReviewedByID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'LastReviewedByID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Personnel'
                ]
            },
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
            'Description': 'Represents the full path name of the objects location tag.',
            'LinkedProperties': null,
            'IsUdf': false
        },
        {
            'Name': 'NextReviewDate',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'This date represents when the next review has to be completed and can be manually changed to override the schedule.',
            'DateTimeKind': 'Unspecified',
            'DynamicViewColumnType': 'DateTime',
            'IsUdf': false
        },
        {
            'Name': 'NextReviewDateViewable',
            'LocalizedName': 'Next Review Date',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'Description': 'The next review date for this clearance.',
            'LinkedProperties': [
                'NextReviewDate'
            ],
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
            'Description': 'The object ID of this data object',
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
            'Name': 'OneDoorPerClearance',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'True when this clearance can only be assigned one door.',
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
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'PartitionID',
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
            'Description': 'Whether this clearance is protected from deletion in the database. ',
            'IsUdf': false
        },
        {
            'Name': 'RequiresManagersApproval',
            'LocalizedName': 'All Access Requests require Manager\'s Approval',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'All Access Requests for the Clearance require Manager\'s approval.',
            'IsUdf': false
        },
        {
            'Name': 'ReviewerComment',
            'LocalizedName': 'Reviewer Comment',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 4000,
            'Description': 'The comment for assignment review',
            'IsUdf': false
        },
        {
            'Name': 'ReviewRuleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': '*** ClearanceReviewRuleIDToolTipText ***',
            'IsUdf': false
        },
        {
            'Name': 'ReviewScheduleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 2147483647.0,
            'Description': 'Recurring schedule ObjectID for assignment review',
            'IsUdf': false
        },
        {
            'Name': 'ReviewScheduleKey',
            'LocalizedName': 'Review Schedule',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The Recurring Schedule used for assignment review.',
            'LinkedProperties': [
                'ReviewScheduleID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ReviewScheduleID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.RecurringSchedule'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'Template',
            'LocalizedName': 'Template',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether this is used as a template or not.',
            'IsUdf': false
        },
        {
            'Name': 'UseActivationDate',
            'LocalizedName': 'Use Activation Date',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether to use activation date/time.',
            'IsUdf': false
        },
        {
            'Name': 'UseExpirationDate',
            'LocalizedName': 'Use Expiration Date',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether to use expiration date/time.',
            'IsUdf': false
        }
    ]
};

export { typeName, schema };