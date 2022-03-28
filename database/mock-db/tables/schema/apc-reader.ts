/* eslint-disable @typescript-eslint/no-loss-of-precision */
const typeName = 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcReader';
const schema = {
    'FullClassName': 'SoftwareHouse.NextGen.Common.SecurityObjects.ApcReader',
    'LocalizedName': 'apC Reader',
    'IsUserSelectable': true,
    'LocalityType': 'LocalOnly',
    'Description': 'A reader associated with an apC controller.',
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
            'Description': 'The name of this reader.',
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
            'Description': 'The description of this reader.',
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
            'Description': 'The GUID of this reader.',
            'IsUdf': false
        },
        {
            'Name': 'AuxCommFailureID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'Auxiliary Comm Failure ID.',
            'IsUdf': false
        },
        {
            'Name': 'AuxTamperInputID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'Auxiliary Tamper Input ID.',
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
            'Description': 'The Board Class Type for this reader',
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
            'Description': 'The Board ID for this reader.',
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
                    'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerStar',
                    'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerMiniStar',
                    'SoftwareHouse.NextGen.Common.SecurityObjects.ApcStarCouplerWPSC',
                    'SoftwareHouse.NextGen.Common.SecurityObjects.ApcMainBoard'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'CardNumsViaKP',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether card numbers can be entered via keypad or not.',
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
            'Name': 'CommFailureID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Comm Failure ID.',
            'IsUdf': false
        },
        {
            'Name': 'CommunicationOkStatus',
            'LocalizedName': 'Communication Status ',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderCommStatusType',
            'IsEnum': true,
            'Description': 'The current communication status for this reader.',
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
            'Description': 'The Controller Class Type for this reader.',
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
            'Description': 'The ID of the controller for this reader.',
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
            'Description': 'Controller associated with this APC Reader.',
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
                    'SoftwareHouse.NextGen.Common.SecurityObjects.ApcController'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'DisableTimeOut',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int64',
            'IsEnum': false,
            'Description': 'Enter the length of time to disable this reader when false read limits have been reached.  The range is 0 to 3600 seconds.',
            'IsUdf': false
        },
        {
            'Name': 'DuressCodeUsed',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether a duress code is used with this reader or not.',
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
            'Description': 'Check whether this reader is enabled or not.',
            'IsUdf': false
        },
        {
            'Name': 'FirmwareUpdateStatus',
            'LocalizedName': 'Firmware Update Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderFirmwareUpdateStatusValues',
            'IsEnum': true,
            'Description': 'Firmware Updated Version Status',
            'IsUdf': false
        },
        {
            'Name': 'FirmwareVersionStatus',
            'LocalizedName': 'Firmware Version Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 50,
            'Description': 'Firmware Version Status',
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
            'Name': 'KeyPadCardFormatID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Keypad Card Format ID.',
            'IsUdf': false
        },
        {
            'Name': 'KeypadCommandAllowStatus',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderKeypadCommandAllowStatus',
            'IsEnum': true,
            'Description': 'This reader current Keypad Command Allow Status ',
            'IsUdf': false
        },
        {
            'Name': 'KeypadCommandSelection',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderKeypadCommandSelection',
            'IsEnum': true,
            'Description': 'Whether this reader allows to use Keypad Command',
            'IsUdf': false
        },
        {
            'Name': 'KeypadStatus',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'The current status of the keypad for this reader.',
            'IsUdf': false
        },
        {
            'Name': 'KeyPadUsed',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderKeyPadUsed',
            'IsEnum': true,
            'Description': 'Whether the Keypad is used.',
            'IsUdf': false
        },
        {
            'Name': 'KPCommandAllowed',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'KP Command Allowed.',
            'IsUdf': false
        },
        {
            'Name': 'KPCommandScheduleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'KP Command Schedule ID.',
            'IsUdf': false
        },
        {
            'Name': 'KPCommandScheduleKey',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'KP Command Schedule ID',
            'LinkedProperties': [
                'KPCommandScheduleID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'KPCommandScheduleID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.TimeSpec'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'KPSlotIndex',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int16',
            'IsEnum': false,
            'MinValue': -32768.0,
            'MaxValue': 32767.0,
            'Description': 'The physical connection point of the keypad.',
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
            'Description': 'The ID of the operator who last modified this reader.',
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
            'Description': 'The date/time of the last modification of this reader.',
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
            'LinkedProperties': [
                'ObjectID'
            ],
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
            'Description': 'The current Maintenance Mode value for this reader.',
            'IsUdf': false
        },
        {
            'Name': 'MonitorState',
            'LocalizedName': 'Monitor State',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderMonitorState',
            'IsEnum': true,
            'Description': 'The state of the monitor.',
            'LinkedProperties': [
                'TamperStatus',
                'CommunicationOkStatus'
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
            'Description': 'The reader\'s Object ID.',
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
            'Name': 'OnlineStatus',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'The current online status for this reader.',
            'IsUdf': false
        },
        {
            'Name': 'PadDigit',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Byte',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 255.0,
            'Description': 'The pad digit to use with the duress code.',
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
            'Description': 'The reader\'s Parent Class Type.',
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
            'Description': 'The reader\'s Parent ID.',
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
            'Name': 'PINLength',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Byte',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 255.0,
            'Description': 'Enter the length of the PIN.',
            'IsUdf': false
        },
        {
            'Name': 'PinRequiredStatus',
            'LocalizedName': 'PIN Required Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderPinRequirement',
            'IsEnum': true,
            'Description': 'The current PIN Required Status for this reader.',
            'IsUdf': false
        },
        {
            'Name': 'PinRequirement',
            'LocalizedName': 'PIN Requirement ',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderPinRequirement',
            'IsEnum': true,
            'Description': 'Select the appropriate setting for the PIN requirements for this reader.',
            'IsUdf': false
        },
        {
            'Name': 'PINTimeSpecID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'The schedule of the PIN',
            'IsUdf': false
        },
        {
            'Name': 'PINTimeSpecKey',
            'LocalizedName': 'PIN Schedule ',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The schedule of the PIN',
            'LinkedProperties': [
                'PINTimeSpecID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'PINTimeSpecID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.TimeSpec'
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
            'Description': 'Whether this reader is protected from deletion from the database.',
            'IsUdf': false
        },
        {
            'Name': 'ReaderActiveStatus',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'The current active status for this reader.',
            'IsUdf': false
        },
        {
            'Name': 'ReaderDirection',
            'LocalizedName': 'Reader Direction',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderDirectionValue',
            'IsEnum': true,
            'Description': 'The side of the door to which the reader is assigned.',
            'IsUdf': false
        },
        {
            'Name': 'ReaderType',
            'LocalizedName': 'Reader Type ',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ReaderTypes',
            'IsEnum': true,
            'Description': 'The type of this reader.',
            'IsUdf': false
        },
        {
            'Name': 'SlotIndex',
            'LocalizedName': 'Slot Index',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2.0,
            'MaxValue': 2147483647.0,
            'Description': 'The physical connection point of this reader.',
            'IsUdf': false
        },
        {
            'Name': 'StatusMessage',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 128,
            'Description': 'Reader Status Message.',
            'IsUdf': false
        },
        {
            'Name': 'TamperStatus',
            'LocalizedName': 'Tamper Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'The current tamper status for this reader.',
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
            'Description': 'Whether this reader is a template.',
            'IsUdf': false
        },
        {
            'Name': 'TimeOut',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int64',
            'IsEnum': false,
            'Description': 'The maximum time between input when both reader and keypad are used.',
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
            'Description': 'Time Zone for this reader.',
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
            'Description': 'Time Zone for this reader.',
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