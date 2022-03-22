const typeName = 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInput';
const schema = {
    'FullClassName': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInput',
    'LocalizedName': 'iSTAR Input',
    'IsUserSelectable': true,
    'LocalityType': 'LocalOnly',
    'Description': 'This class is used to specify an input in the system.',
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
            'MaxSize': 200,
            'Description': 'The name of the current input.',
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
            'Description': 'The description of this input.',
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
            'Description': 'The GUID (global unique identifier) for this input.',
            'IsUdf': false
        },
        {
            'Name': 'ActivateOnSupervision',
            'LocalizedName': 'Activate on Supervision',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether or not this input should activate on a supervision error.',
            'IsUdf': false
        },
        {
            'Name': 'ActiveStatus',
            'LocalizedName': 'Active Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.InputStateStatus',
            'IsEnum': true,
            'Description': 'The current value for Active Status for this input.',
            'IsUdf': false
        },
        {
            'Name': 'Annunciate',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether or not to send state Changes to Journal',
            'IsUdf': false
        },
        {
            'Name': 'ArmedByDefault',
            'LocalizedName': 'Armed by default ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether the input is armed by default.',
            'IsUdf': false
        },
        {
            'Name': 'ArmedStatus',
            'LocalizedName': 'Armed status ',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.InputArmedStatus',
            'IsEnum': true,
            'Description': 'Armed status of the input.',
            'IsUdf': false
        },
        {
            'Name': 'BoardClassType',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Type',
            'IsEnum': false,
            'Description': 'The type of board for this input.',
            'IsUdf': false
        },
        {
            'Name': 'BoardID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Board ID.',
            'IsUdf': false
        },
        {
            'Name': 'BoardObjectKey',
            'LocalizedName': 'Board',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Name of the board',
            'LinkedProperties': [
                'BoardID',
                'BoardClassType'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': 'BoardClassType',
                'PersistentIdProperty': 'BoardID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.iStarBoard',
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Reader'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'CauserObjectKey',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
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
            'Name': 'ControllerClassType',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Type',
            'IsEnum': false,
            'Description': 'The Controller Class Type.',
            'IsUdf': false
        },
        {
            'Name': 'ControllerID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Controller ID.',
            'IsUdf': false
        },
        {
            'Name': 'ControllerObjectKey',
            'LocalizedName': 'Controller',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The controller of this iSTAR input.',
            'LinkedProperties': [
                'ControllerID',
                'ControllerClassType'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': 'ControllerClassType',
                'PersistentIdProperty': 'ControllerID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.iStarController'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'Debounce',
            'LocalizedName': 'Debounce',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int64',
            'IsEnum': false,
            'Description': 'Enter the amount of time that an input must be in a particular state before it is reported as a state change.  For iSTAR, the unit is 1/10 of a second with a range of 0 to 1000 (100 seconds).  For RDR, the unit is milliseconds with a range of 0 to 60 seconds.',
            'IsUdf': false
        },
        {
            'Name': 'eMMCAlarmThreshhold',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.eMMCAlarmThreshholdValues',
            'IsEnum': true,
            'Description': '*** eMMCAlarmThreshholdToolTipText ***',
            'IsUdf': false
        },
        {
            'Name': 'Enabled',
            'LocalizedName': 'Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether this input is currently enabled or not.',
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
            'Name': 'InputIntrusionZoneStatus',
            'LocalizedName': 'Status of the Input in the Intrusion Zone',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.IntrusionZoneStatusValues',
            'IsEnum': true,
            'Description': 'The current status for this input in the current intrusion zone.',
            'IsUdf': false
        },
        {
            'Name': 'InputType',
            'LocalizedName': 'Input Type',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.InputTypes',
            'IsEnum': true,
            'Description': 'The type of input for the current input.',
            'IsUdf': false
        },
        {
            'Name': 'IntrusionZoneName',
            'LocalizedName': 'Intrusion Zone',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 200,
            'Description': 'The intrusion zone to which this input is a part',
            'IsUdf': false
        },
        {
            'Name': 'iStarInputHWStatus',
            'LocalizedName': 'Input HW Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.iSTARInputHWStatusValue',
            'IsEnum': true,
            'Description': 'Status of the input',
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
            'Description': 'The ID of the operator who last modified this input.',
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
            'Description': 'The timestamp of the last modification of this input.',
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
            'Description': 'Represents the full path name of the objects location tag.',
            'LinkedProperties': null,
            'IsUdf': false
        },
        {
            'Name': 'MaintenanceMode',
            'LocalizedName': 'Maintenance Mode',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'The current Maintenance Mode value for this iStart Input',
            'IsUdf': false
        },
        {
            'Name': 'MonitorState',
            'LocalizedName': 'Monitor State',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.iStarInputMonitorState',
            'IsEnum': true,
            'Description': 'Current state of the input.',
            'LinkedProperties': [
                'ActiveStatus',
                'Enabled',
                'SupervisionErrorStatus',
                'ArmedStatus',
                'iStarInputHWStatus'
            ],
            'IsUdf': false
        },
        {
            'Name': 'NormalMode',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.InputModes',
            'IsEnum': true,
            'Description': 'Whether the current input is open or closed.',
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
            'Name': 'OwnerClassType',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Type',
            'IsEnum': false,
            'Description': 'Owner Class Type.',
            'IsUdf': false
        },
        {
            'Name': 'OwnerID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'Owner ID.',
            'IsUdf': false
        },
        {
            'Name': 'OwnerObjectKey',
            'LocalizedName': 'Owner',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Object\'s owner',
            'LinkedProperties': [
                'OwnerID',
                'OwnerClassType'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': 'OwnerClassType',
                'PersistentIdProperty': 'OwnerID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Door',
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Elevator'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'ParentClassType',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Type',
            'IsEnum': false,
            'Description': 'The class type of this input\'s parent.',
            'IsUdf': false
        },
        {
            'Name': 'ParentID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of this input\'s parent.',
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
            'Description': 'The Partition ID.',
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
            'Description': 'Whether this input is protected from deletion in the database.',
            'IsUdf': false
        },
        {
            'Name': 'ReaderDisplayName',
            'LocalizedName': 'Display Name',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 16,
            'Description': 'The reader display name of the this input in the current intrusion zone.',
            'IsUdf': false
        },
        {
            'Name': 'ReverseSenseOfInput',
            'LocalizedName': 'Reverse Sense of Input',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether reverse sense is enabled for this input or not.',
            'IsUdf': false
        },
        {
            'Name': 'SendToJournal',
            'LocalizedName': 'Send to Journal',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Send state change to journal.',
            'IsUdf': false
        },
        {
            'Name': 'SendToMonitorStation',
            'LocalizedName': 'Send to Monitoring Station',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Send state change to monitor station.',
            'IsUdf': false
        },
        {
            'Name': 'SlotIndex',
            'LocalizedName': 'Slot Index',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int16',
            'IsEnum': false,
            'MinValue': -32768.0,
            'MaxValue': 32767.0,
            'Description': 'The physical connection point of this input.',
            'IsUdf': false
        },
        {
            'Name': 'Supervised',
            'LocalizedName': 'Supervised',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether this input is supervised or not.',
            'IsUdf': false
        },
        {
            'Name': 'SupervisingResistor',
            'LocalizedName': 'Supervising Resistor',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ResistorConfigurationUltra',
            'IsEnum': true,
            'Description': 'Select Supervising Resistor configuration.',
            'IsUdf': false
        },
        {
            'Name': 'SupervisionErrorStatus',
            'LocalizedName': 'Supervision Error Status ',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.InputSupervisionErrorStatus',
            'IsEnum': true,
            'Description': 'The current value of the supervision error status for this input.',
            'IsUdf': false
        },
        {
            'Name': 'SupervisionStatus',
            'LocalizedName': 'Supervision Status ',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.InputSupervisionStatus',
            'IsEnum': true,
            'Description': 'The current value of the supervision status for this input.',
            'IsUdf': false
        },
        {
            'Name': 'TemperatureAlarmThreshhold',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.TemperatureAlarmThreshholdValues',
            'IsEnum': true,
            'Description': 'The temperature threshold value that triggers alarm',
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
            'Description': 'A flag indicates if this input is used as a template.',
            'IsUdf': false
        },
        {
            'Name': 'TimeZoneID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the time zone associated with the input.',
            'IsUdf': false
        },
        {
            'Name': 'TimeZoneKey',
            'LocalizedName': 'Time Zone',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Time Zone for this input.',
            'LinkedProperties': [
                'TimeZoneID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'TimeZoneID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.TimeZone'
                ]
            },
            'IsUdf': false
        }
    ]
};

export { typeName, schema };