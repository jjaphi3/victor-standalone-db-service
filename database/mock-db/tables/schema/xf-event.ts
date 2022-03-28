const typeName = 'SoftwareHouse.CrossFire.Common.Objects.XFEvent';
const schema = {
    'FullClassName': 'SoftwareHouse.CrossFire.Common.Objects.XFEvent',
    'LocalizedName': 'Event',
    'IsUserSelectable': true,
    'LocalityType': 'LocalOnly',
    'Description': 'This class is used to specify Events in the system.',
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
            'Name': 'AckAlwaysClears',
            'LocalizedName': 'Ack Always Clears',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Acknowledge clears event regardless of active causes',
            'IsUdf': false
        },
        {
            'Name': 'Acknowledged',
            'LocalizedName': 'Acknowledged',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.CrossFire.Common.ObjectDefinitions.AcknowledgedStatus',
            'IsEnum': true,
            'Description': 'Whether the event has been acknowledged if the event requires acknowledgement.',
            'IsUdf': false
        },
        {
            'Name': 'AcknowledgedTime',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The time that the event was acknowledged.',
            'IsUdf': false
        },
        {
            'Name': 'AcknowledgerID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the operator who acknowledged the event.',
            'IsUdf': false
        },
        {
            'Name': 'AcknowledgerObjectKey',
            'LocalizedName': 'Acknowledger Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The name of the operator who acknowledged the event.',
            'LinkedProperties': [
                'AcknowledgerID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'AcknowledgerID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.Operator'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'AckOperatorCannotClear',
            'LocalizedName': 'Acknowledger cannot Clear',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Operator who acknowledges the event cannot clear it.',
            'IsUdf': false
        },
        {
            'Name': 'AckStatus',
            'LocalizedName': 'Acknowledge Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.CrossFire.Common.ObjectDefinitions.AcknowledgedStatus',
            'IsEnum': true,
            'Description': 'A copy of the Acknowledged field to indicate whether the event is acknolwedged at system startup',
            'IsUdf': false
        },
        {
            'Name': 'ActivateText',
            'LocalizedName': 'Activate Text',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 256,
            'Description': 'Text to be displayed when the event is activated.',
            'IsUdf': false
        },
        {
            'Name': 'ActivationDateTime',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The initial activation date/time of the event.',
            'IsUdf': false
        },
        {
            'Name': 'ActivationDelay',
            'LocalizedName': 'Activation Delay',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int64',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 3600000.0,
            'Description': 'Activation Delay Time (seconds)',
            'IsUdf': false
        },
        {
            'Name': 'ActiveScheduleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the schedule that the event is bound to for activation and deactivation.',
            'IsUdf': false
        },
        {
            'Name': 'ActiveScheduleKey',
            'LocalizedName': 'Active Schedule Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The name of the schedule that activates this event.',
            'LinkedProperties': [
                'ActiveScheduleID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ActiveScheduleID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.ScheduleBase'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'ActiveStatus',
            'LocalizedName': 'Active Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.CrossFire.Common.ObjectDefinitions.EventStateCode',
            'IsEnum': true,
            'Description': 'The current state (Active/Inactive) of the event.',
            'IsUdf': false
        },
        {
            'Name': 'AllowAckWhileActive',
            'LocalizedName': 'Allow Acknowledgement while causes are active.',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether acknowledgements are allowed when cause lists are active or not.',
            'IsUdf': false
        },
        {
            'Name': 'AllowClearWhileActive',
            'LocalizedName': 'Allow Clear while causes are active',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Allow clear while causes are active.',
            'IsUdf': false
        },
        {
            'Name': 'Annunciate',
            'LocalizedName': 'Send to Monitoring Station',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Send to Monitoring Station',
            'IsUdf': false
        },
        {
            'Name': 'ArmedDefault',
            'LocalizedName': 'Armed by Default',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether to arm this event or not.',
            'IsUdf': false
        },
        {
            'Name': 'ArmedStatus',
            'LocalizedName': 'Armed Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.CrossFire.Common.ObjectDefinitions.EventStateCode',
            'IsEnum': true,
            'Description': 'The current armed State (Armed/Disarmed) of this event.',
            'IsUdf': false
        },
        {
            'Name': 'ArmScheduleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the schedule that the event is bound to when the event is being armed or disarmed.',
            'IsUdf': false
        },
        {
            'Name': 'ArmScheduleKey',
            'LocalizedName': 'Arm Schedule Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The name of the schedule that the event is bound to when the event is being armed or disarmed.',
            'LinkedProperties': [
                'ArmScheduleID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ArmScheduleID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.ScheduleBase'
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
            'Name': 'ClearerID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the operator who cleared the event.',
            'IsUdf': false
        },
        {
            'Name': 'ClearerObjectKey',
            'LocalizedName': 'Clearer Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The name of the operator who cleared the event.',
            'LinkedProperties': [
                'ClearerID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ClearerID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.Operator'
                ]
            },
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
            'Description': 'The type of controller.',
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
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the controller in Database.',
            'IsUdf': false
        },
        {
            'Name': 'ControllerObjectKey',
            'LocalizedName': 'Controller Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The object key of the controller to which this event downloads.',
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
            'Name': 'DeactivateText',
            'LocalizedName': 'Deactivated Text',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 256,
            'Description': 'Text to be displayed when the event is deactivated.',
            'IsUdf': false
        },
        {
            'Name': 'DefaultRecord',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Default record.',
            'IsUdf': false
        },
        {
            'Name': 'Dialup',
            'LocalizedName': 'Dialup',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.CrossFire.Common.ObjectDefinitions.DialupValues',
            'IsEnum': true,
            'Description': 'The dialup willl be notified on activation, activation and deactivation or never depending of setting.',
            'IsUdf': false
        },
        {
            'Name': 'DisplayActivationDateTime',
            'LocalizedName': 'Initial Activation Date/Time',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'Description': 'The initial activation date/time of the event.',
            'LinkedProperties': [
                'ActivationDateTime'
            ],
            'IsUdf': false
        },
        {
            'Name': 'DisplayOnActivate',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'The message or instruction to display when the event goes active.',
            'IsUdf': false
        },
        {
            'Name': 'DisplayOnDeactivate',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'The message or instruction to display when the event goes inactive.',
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
            'Description': 'Check whether or not this Event is enabled.',
            'IsUdf': false
        },
        {
            'Name': 'EventBreakthrough',
            'LocalizedName': 'Event Breakthrough',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Breakthrough setting that allows certain events to be marked as important',
            'IsUdf': false
        },
        {
            'Name': 'EventIfNotAckedID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of a second event to activate when the first event is not acknowledged within the time specified.',
            'IsUdf': false
        },
        {
            'Name': 'EventIfNotAckedObjectKey',
            'LocalizedName': 'Overdue Ack Event',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The name of the event that is activated when this event\'s acknowledgement is overdue.',
            'LinkedProperties': [
                'EventIfNotAckedID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'EventIfNotAckedID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.XFEvent'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'EventIfNotClearedID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of a second event to activate if this event is not cleared within the time specified.',
            'IsUdf': false
        },
        {
            'Name': 'EventIfNotClearedObjectKey',
            'LocalizedName': 'Overdue Clear Event',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The name of the event that is activated when this event\'s clear is overdue.',
            'LinkedProperties': [
                'EventIfNotClearedID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'EventIfNotClearedID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.XFEvent'
                ]
            },
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
            'Name': 'Instructions',
            'LocalizedName': 'Instructions',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 3000,
            'Description': 'Instructions to display on Event Monitor.',
            'IsUdf': false
        },
        {
            'Name': 'IsMonitoringActive',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Indicates whether the event object has the current state to be actively monitored in the UI',
            'IsUdf': false
        },
        {
            'Name': 'LastActiveCauseOn',
            'LocalizedName': 'Last Activation Date/Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The last active cause.',
            'DateTimeKind': 'Local',
            'DynamicViewColumnType': 'UTCDateTime',
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
            'Name': 'LatchEvent',
            'LocalizedName': 'Latch Event',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether this event is a latched event or not.',
            'IsUdf': false
        },
        {
            'Name': 'LatchTime',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'DateTime',
            'IsEnum': false,
            'Description': 'The time that the event was latched.',
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
            'Name': 'LogAllCausesToJournal',
            'LocalizedName': 'Log subsequent causes to journal',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'All Causes will be logged into Journal',
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
            'Description': 'The current maintenance mode value for the Event object. If the value is checked, the object is in maintenance mode.',
            'IsUdf': false
        },
        {
            'Name': 'MapID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': '*** XFEventMapIDToolTipText ***',
            'IsUdf': false
        },
        {
            'Name': 'MapKey',
            'LocalizedName': 'Legacy Map Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The map associated with this event',
            'LinkedProperties': [
                'MapID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'MapID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.Maps'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'MaxNoAckTime',
            'LocalizedName': 'Overdue Ack Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int64',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 359999.0,
            'Description': 'Maximum time (seconds) allowed if event is unacknowledged.',
            'IsUdf': false
        },
        {
            'Name': 'MaxNoClearTime',
            'LocalizedName': 'Overdue Clear Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int64',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 359999.0,
            'Description': 'Maximum time (seconds) allowed to clear event.',
            'IsUdf': false
        },
        {
            'Name': 'MessageRequiredWhenCleared',
            'LocalizedName': 'Clear requires log message',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Clear requires log message',
            'IsUdf': false
        },
        {
            'Name': 'MinActiveTime',
            'LocalizedName': 'Min ActiveTime',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int64',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 3600000.0,
            'Description': 'Minimum activation time (secs).',
            'IsUdf': false
        },
        {
            'Name': 'MonitorState',
            'LocalizedName': 'Monitor State',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'SoftwareHouse.CrossFire.Common.ObjectDefinitions.EventMonitorState',
            'IsEnum': true,
            'LinkedProperties': [
                'Enabled',
                'ActiveStatus',
                'ArmedStatus',
                'Acknowledged',
                'RequireAck',
                'Priority'
            ],
            'IsUdf': false
        },
        {
            'Name': 'NeedMsgLog',
            'LocalizedName': 'Acknowledgement requires log message',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Acknowledge requires log message.',
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
            'LocalizedName': 'Partition',
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
            'Name': 'Priority',
            'LocalizedName': 'Priority',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 255.0,
            'Description': 'Set the priority of this event',
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
            'Description': 'Whether this event can be deleted from the Database or not.',
            'IsUdf': false
        },
        {
            'Name': 'RemainSilent',
            'LocalizedName': 'Remain Silent',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'After event is silenced, it remains silent until cleared.',
            'IsUdf': false
        },
        {
            'Name': 'RequireAck',
            'LocalizedName': 'Require Acknowledgement',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Event requires acknowledgement.',
            'IsUdf': false
        },
        {
            'Name': 'RequireAckOnReactivation',
            'LocalizedName': 'Require Ack on Reactivation',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'When event is pending clear and is reactivated, require acknowledgement again.',
            'IsUdf': false
        },
        {
            'Name': 'RequireClear',
            'LocalizedName': 'Require Clear',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Event requires clearing.',
            'IsUdf': false
        },
        {
            'Name': 'ResetterID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the operator who reset the event.',
            'IsUdf': false
        },
        {
            'Name': 'ResetterObjectKey',
            'LocalizedName': 'Resetter Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The name of the operator who reset the event.',
            'LinkedProperties': [
                'ResetterID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ResetterID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.Operator'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'SendToJournal',
            'LocalizedName': 'Send To Journal',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether send changes to journal or not.',
            'IsUdf': false
        },
        {
            'Name': 'SetEvent',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether to latch/unlatch the event.',
            'IsUdf': false
        },
        {
            'Name': 'Silenced',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Silence the beeping on the Monitoring Station',
            'IsUdf': false
        },
        {
            'Name': 'SpecialEditingRequired',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
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
            'Description': 'Is this a Template?',
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
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the time zone associated with the event.',
            'IsUdf': false
        },
        {
            'Name': 'TimeZoneObjectKey',
            'LocalizedName': 'Time Zone Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
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
        },
        {
            'Name': 'UnifiedMapID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': '*** XFEventMapIDToolTipText ***',
            'IsUdf': false
        },
        {
            'Name': 'UnifiedMapKey',
            'LocalizedName': 'Unified Map Name',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The map associated with this event',
            'LinkedProperties': [
                'UnifiedMapID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'UnifiedMapID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.UnifiedMap'
                ]
            },
            'IsUdf': false
        }
    ]
};

export { typeName, schema };