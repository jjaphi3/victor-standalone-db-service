const typeName = 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarDoor';
const schema = {
    'FullClassName': 'SoftwareHouse.NextGen.Common.SecurityObjects.iStarDoor',
    'LocalizedName': 'iSTAR Door',
    'IsUserSelectable': true,
    'LocalityType': 'LocalOnly',
    'Description': 'This class is used to specify a Door in the system.',
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
            'Name': 'AdmitStatus',
            'LocalizedName': 'Admit Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorAdmitStatus',
            'IsEnum': true,
            'Description': 'The current admit status of this door.',
            'IsUdf': false
        },
        {
            'Name': 'AlarmStateStatus',
            'LocalizedName': 'Alarm State status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorAlarmStateStatus',
            'IsEnum': true,
            'Description': 'The current alarm state of this door.',
            'IsUdf': false
        },
        {
            'Name': 'AlternateShuntTime',
            'LocalizedName': 'Alternate Shunt time ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 64800.0,
            'Description': 'Select the alternate shunt time for this door.  The valid range is 0 to 64800 seconds (18 hours).',
            'IsUdf': false
        },
        {
            'Name': 'AlwaysUseShuntExpire',
            'LocalizedName': 'Always Use Shunt Expire ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether the Shunt expiration relay should be fired regardless of the shunt time used.',
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
            'Description': 'The Board ID associated with this door.',
            'IsUdf': false
        },
        {
            'Name': 'BondSensorChangeTime',
            'LocalizedName': 'Bond Sensor Change Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 10000.0,
            'Description': 'Bond Sensor Change Time. Valid Range 0-9999 (units of 0.1 seconds).',
            'IsUdf': false
        },
        {
            'Name': 'CamSensorChangeTime',
            'LocalizedName': 'Cam Sensor Change Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 10000.0,
            'Description': 'Cam Sensor Change Time. Valid Range 0-9999 (units of 0.1 seconds).',
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
            'Name': 'ClearanceFilterStatus',
            'LocalizedName': 'Clearance Filter Level Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 128,
            'Description': 'The current status of this door\'s clearance filter.',
            'IsUdf': false
        },
        {
            'Name': 'CloseDebounceTime',
            'LocalizedName': 'Close Debounce Time (1/10 second) ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 255.0,
            'Description': 'After a valid admit, the door close debounce timer value is used to ignore DSM activations immediately after the door closes.  A value of 0 disables the debounce timer.  Setting this value to 0 indicates that there is no timer. The range is 0 - 25.5 seconds (units of 0.1 seconds).',
            'IsUdf': false
        },
        {
            'Name': 'ClusterID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'Cluster ID.',
            'IsUdf': false
        },
        {
            'Name': 'ClusterObjectKey',
            'LocalizedName': 'Cluster',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The cluster of this iSTAR Door.',
            'LinkedProperties': [
                'ClusterID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ClusterID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Cluster'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'ConditionalAccessDelay',
            'LocalizedName': 'Conditional Access Response Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 120.0,
            'Description': 'Conditional Access Response Time',
            'IsUdf': false
        },
        {
            'Name': 'ConditionalAccessEventObjectKey',
            'LocalizedName': 'Conditional Access Request Event',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Conditional Access Request Event',
            'LinkedProperties': [
                'ConditionalAccessRequestEventID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ConditionalAccessRequestEventID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.XFEvent'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'ConditionalAccessRequestEventID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Conditional Access Request Event',
            'IsUdf': false
        },
        {
            'Name': 'ConditionalAccessScheduleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Conditional Access Schedule',
            'IsUdf': false
        },
        {
            'Name': 'ConditionalAccessScheduleObjectKey',
            'LocalizedName': 'Conditional Access Schedule',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Conditional Access Schedule',
            'LinkedProperties': [
                'ConditionalAccessScheduleID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ConditionalAccessScheduleID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.TimeSpec'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'ConditionalAccessStatus',
            'LocalizedName': 'Conditional Access Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.ConditionalAccessStatus',
            'IsEnum': true,
            'Description': 'Conditional Access Status',
            'IsUdf': false
        },
        {
            'Name': 'ContinuouslyActive',
            'LocalizedName': 'Readers Continuously Active ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether or not this door reader is continuously active.',
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
            'Description': 'The controller class type associated with this door.',
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
            'Description': 'The controller ID associated with this door.',
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
            'Description': 'The object key of this door\'s controller.',
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
            'Name': 'ControllerOnlineStatus',
            'LocalizedName': 'Online Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.OnlineStatus',
            'IsEnum': true,
            'Description': 'Online Status',
            'IsUdf': false
        },
        {
            'Name': 'CrashBarChangeTime',
            'LocalizedName': 'Crash Bar Change Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 10000.0,
            'Description': 'Crash Bar Change Time. Valid Range 0-9999 (units of 0.1 seconds).',
            'IsUdf': false
        },
        {
            'Name': 'DelayRelockTime',
            'LocalizedName': 'Delay Relock Time (seconds) ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 999.0,
            'Description': 'The Delay Relock Interval for this door.  The valid range is 0 to 999 seconds.',
            'IsUdf': false
        },
        {
            'Name': 'DoorForcedAlarmsEnableStatus',
            'LocalizedName': 'Door Forced Alarms Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmStatus',
            'IsEnum': true,
            'Description': 'Door Forced Alarms Enable Status',
            'IsUdf': false
        },
        {
            'Name': 'DoorHeldAlarmsEnableStatus',
            'LocalizedName': 'Door Held Alarms Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmStatus',
            'IsEnum': true,
            'Description': 'Door Held Alarms Enable Status',
            'IsUdf': false
        },
        {
            'Name': 'DoorIntrusionZoneStatus',
            'LocalizedName': 'Status of the Door in the Intrusion Zone',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.IntrusionZoneStatusValues',
            'IsEnum': true,
            'Description': 'The current status of the intrusion zone associated with this door.',
            'IsUdf': false
        },
        {
            'Name': 'DoorLockID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Door Lock ID associated with this door.',
            'IsUdf': false
        },
        {
            'Name': 'DoorLockObjectKey',
            'LocalizedName': 'Door Lock Relay',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The ouput that uses as a door lock relay for this door',
            'LinkedProperties': [
                'DoorLockID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'DoorLockID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Output'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'DoorMode',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.iStarDoorMode',
            'IsEnum': true,
            'Description': 'Door Mode',
            'IsUdf': false
        },
        {
            'Name': 'DoorOpenAlarmStatus',
            'LocalizedName': 'Door Open Alarm Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmState',
            'IsEnum': true,
            'Description': 'Open Alarm Status',
            'IsUdf': false
        },
        {
            'Name': 'DoorOpenTamperAlarmsEnableStatus',
            'LocalizedName': 'Door Open Tamper Alarms Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmStatus',
            'IsEnum': true,
            'Description': 'Door Open Tamper Alarms Enable Status',
            'IsUdf': false
        },
        {
            'Name': 'DoorSwitchID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Door Switch ID associated with this door.',
            'IsUdf': false
        },
        {
            'Name': 'DoorSwitchObjectKey',
            'LocalizedName': 'Door Switch',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The input that uses as a door switch monitor for this door',
            'LinkedProperties': [
                'DoorSwitchID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'DoorSwitchID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInput'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipePermission',
            'LocalizedName': 'Double Swipe Permission',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoubleSwipePermission',
            'IsEnum': true,
            'Description': 'The permission of using Double Swipe',
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipePersonnelGroup2ID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': '*** iStarDoorDoubleSwipePersonnelGroup2IDToolTipText ***',
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipePersonnelGroup2Key',
            'LocalizedName': 'Doube Swipe Personnel Group 2',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'For Two-Person rule if two groups are configured a person from this group must also swipe to unlock the door.',
            'LinkedProperties': [
                'DoubleSwipePersonnelGroup2ID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'DoubleSwipePersonnelGroup2ID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.Group'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipePersonnelGroupID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Double swipe personnel group ID.',
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipePersonnelGroupKey',
            'LocalizedName': 'Double Swipe Personnel Group',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'If Double Swipe (Toggle Mode) is configured Double Swipe is allowed for any person with clearance who belong to this personnel group. For Two Person mode, if configured a person from this group is required to unlock the door.',
            'LinkedProperties': [
                'DoubleSwipePersonnelGroupID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'DoubleSwipePersonnelGroupID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.Group'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipePriority',
            'LocalizedName': 'Double Swipe Priority',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 200.0,
            'Description': 'Priority of the Double Swipe.',
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipeRelockScheduleID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Double Swipe cancellation schedule - At the leading edge of this schedule, any double swipe action will be removed from the cause list for the door.',
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipeScheduleObjectKey',
            'LocalizedName': 'Double Swipe Relock Schedule',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Double Swipe cancellation schedule - At the leading edge of this schedule, any double swipe action will be removed from the cause list for the door.',
            'LinkedProperties': [
                'DoubleSwipeRelockScheduleID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'DoubleSwipeRelockScheduleID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.CrossFire.Common.Objects.TimeSpec'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'DoubleSwipeStatus',
            'LocalizedName': 'Double Swipe Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoubleSwipeStatus',
            'IsEnum': true,
            'Description': 'Double Swipe Status.',
            'IsUdf': false
        },
        {
            'Name': 'DSMSideAChangeTime',
            'LocalizedName': 'DSM Side A Change Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 10000.0,
            'Description': 'DSM Side A Change Time. Valid Range 0-9999 (units of 0.1 seconds).',
            'IsUdf': false
        },
        {
            'Name': 'DSMSideBChangeTime',
            'LocalizedName': 'DSM Side B Change Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 10000.0,
            'Description': 'DSM Side B Change Time. Valid Range 0-9999 (units of 0.1 seconds).',
            'IsUdf': false
        },
        {
            'Name': 'DSMTamperAlarmsEnableStatus',
            'LocalizedName': 'DSM Tamper Alarms Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmStatus',
            'IsEnum': true,
            'Description': 'Door DSM Tamper Alarms Enable Status',
            'IsUdf': false
        },
        {
            'Name': 'DSMTamperStatus',
            'LocalizedName': 'DSM Tamper Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmState',
            'IsEnum': true,
            'Description': 'DSM Tamper Status',
            'IsUdf': false
        },
        {
            'Name': 'EntryAreaName',
            'LocalizedName': 'Entry Area',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'Description': 'The area opposite the door\'s inbound reader.',
            'LinkedProperties': [
                'ObjectID'
            ],
            'IsUdf': false
        },
        {
            'Name': 'ExitAreaName',
            'LocalizedName': 'Exit Area',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'Description': 'The area opposite the door\'s outbound reader.',
            'LinkedProperties': [
                'ObjectID'
            ],
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
            'Name': 'InDirectionalLinkTime',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'In Directional Link Time.',
            'IsUdf': false
        },
        {
            'Name': 'InReaderID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the in reader for this door.',
            'IsUdf': false
        },
        {
            'Name': 'InReaderObjectKey',
            'LocalizedName': 'Inbound Reader',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Inbound access reader.',
            'LinkedProperties': [
                'InReaderID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'InReaderID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.iStarReader'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'InstrusionZoneDisplayName',
            'LocalizedName': 'Intrusion Zone Display Name',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'String',
            'IsEnum': false,
            'MaxSize': 16,
            'Description': 'The display name of the door in the intrusion zone.',
            'IsUdf': false
        },
        {
            'Name': 'IntrusionZoneName',
            'LocalizedName': 'Intrusion Zone',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'String',
            'IsEnum': false,
            'Description': 'The intrusion zone to which this door belongs',
            'LinkedProperties': [
                'ObjectID'
            ],
            'IsUdf': false
        },
        {
            'Name': 'IsExpiringClearanceSupported',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
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
            'Name': 'LatchBoltChangeTime',
            'LocalizedName': 'Latch Bolt Change Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 10000.0,
            'Description': 'Latch Bolt Change Time. Valid Range 0-9999 (units of 0.1 seconds).',
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
            'Name': 'LockTamperAlarmsEnableStatus',
            'LocalizedName': 'Lock Tamper Alarms Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmStatus',
            'IsEnum': true,
            'Description': 'Door Lock Tamper Alarms Enable Status',
            'IsUdf': false
        },
        {
            'Name': 'LockTamperStatus',
            'LocalizedName': 'Lock Tamper Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmState',
            'IsEnum': true,
            'Description': 'Lock Tamper Status',
            'IsUdf': false
        },
        {
            'Name': 'LockUnsecuredAlarmsEnableStatus',
            'LocalizedName': 'Lock Unsecured Alarms Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmStatus',
            'IsEnum': true,
            'Description': 'Door Lock Unsecured Alarms Enable Status',
            'IsUdf': false
        },
        {
            'Name': 'LockUnsecuredStatus',
            'LocalizedName': 'Lock Unsecured Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmState',
            'IsEnum': true,
            'Description': 'Lock Unsecured Status',
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
            'Description': 'The current Maintenance Mode value for this iStart Door',
            'IsUdf': false
        },
        {
            'Name': 'ModeStatus',
            'LocalizedName': 'Mode Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorModeStatus',
            'IsEnum': true,
            'Description': 'The current mode status of this door.',
            'IsUdf': false
        },
        {
            'Name': 'MomentaryUnlockStatus',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorMomentaryUnlockStatus',
            'IsEnum': true,
            'Description': 'The current momentary unlock status of this door.',
            'IsUdf': false
        },
        {
            'Name': 'MonitorState',
            'LocalizedName': 'Monitor State',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorMonitorState',
            'IsEnum': true,
            'Description': 'The current monitor state.',
            'LinkedProperties': [
                'AlarmStateStatus',
                'OpenStatus',
                'ModeStatus'
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
            'Name': 'OpenGraceTime',
            'LocalizedName': 'Open Grace Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 255.0,
            'Description': 'The time (in 1/10th of a second intervals) that the C•CURE 9000 waits for an RTE, card admit, or momentary unlock signal after receiving the signal from the DSM. Setting this value to 0 indicates that there is no timer; as soon as the door opens, door forced open is reported. The range is 0 - 25.5 seconds (units of 0.1 seconds).',
            'IsUdf': false
        },
        {
            'Name': 'OpenStatus',
            'LocalizedName': 'Open Status',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorOpenStatus',
            'IsEnum': true,
            'Description': 'The current open state of this door.',
            'IsUdf': false
        },
        {
            'Name': 'OpenStatusEx',
            'LocalizedName': 'The Current open state of the door',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorOpenStatus',
            'IsEnum': true,
            'Description': 'The current open state of this door.',
            'LinkedProperties': [
                'OpenStatus',
                'OnlineStatus'
            ],
            'IsUdf': false
        },
        {
            'Name': 'OutDirectionalLinkTime',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Out Directional LinkTime.',
            'IsUdf': false
        },
        {
            'Name': 'OutReaderID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the Out Reader for this door.',
            'IsUdf': false
        },
        {
            'Name': 'OutReaderObjectKey',
            'LocalizedName': 'Outbound Reader',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'Outbound access reader',
            'LinkedProperties': [
                'OutReaderID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'OutReaderID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.iStarReader'
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
            'Description': 'The door\'s Parent Class Type.',
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
            'Description': 'The ID of the parent of this door.',
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
            'Description': 'Whether this door is protected from deletion in the database or not.',
            'IsUdf': false
        },
        {
            'Name': 'RejectLimitReachedStatus',
            'LocalizedName': 'Reject Limit Reached',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorConsecutiveRejectsStatus',
            'IsEnum': true,
            'Description': 'Consecutive Inbound or Outbound Rejects Limit has been reached when true.',
            'IsUdf': false
        },
        {
            'Name': 'RelockAfterOpen',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Whether the door should be relocked after an open or not.',
            'IsUdf': false
        },
        {
            'Name': 'RelockExpiration',
            'LocalizedName': 'Delay relock if door open after access ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Delay relock of door while door is open after valid access.',
            'IsUdf': false
        },
        {
            'Name': 'ReportNonAlarms',
            'LocalizedName': 'Report Non Alarms',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'When true, panel sends non-alarm input status to host.',
            'IsUdf': false
        },
        {
            'Name': 'RequireManualActionInstructions',
            'LocalizedName': 'Require Manual Action Instructions',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'This door requires the operator to enter instructions when performing a manual action.',
            'IsUdf': false
        },
        {
            'Name': 'RTEChangeTime',
            'LocalizedName': 'RTE Change Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 10000.0,
            'Description': 'RTE Change Time. Valid Range 0-9999 (units of 0.1 seconds).',
            'IsUdf': false
        },
        {
            'Name': 'RTEEnableStatus',
            'LocalizedName': 'RTE Functions Enabled',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.AdvancedDoorAlarmStatus',
            'IsEnum': true,
            'Description': 'Door RTE Enable Status',
            'IsUdf': false
        },
        {
            'Name': 'RTEID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the RTE (request to exit) for this door.',
            'IsUdf': false
        },
        {
            'Name': 'RTEObjectKey',
            'LocalizedName': 'RTE Input',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The input that uses as a request to exit input for this door',
            'LinkedProperties': [
                'RTEID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'RTEID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.iStarInput'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'SecondaryInReaderID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the Secondary Inbound BLE Reader',
            'IsUdf': false
        },
        {
            'Name': 'SecondaryOutReaderID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The ID of the Secondary Outbound BLE Reader',
            'IsUdf': false
        },
        {
            'Name': 'SecondaryRelayID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Secondary Relay ID.',
            'IsUdf': false
        },
        {
            'Name': 'SecondaryRelayObjectKey',
            'LocalizedName': 'Alternate Shunt Relay',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The output that uses as an alterate shunt relay for this door',
            'LinkedProperties': [
                'SecondaryRelayID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'SecondaryRelayID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Output'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'SendToJournal',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Send state change to journal.',
            'IsUdf': false
        },
        {
            'Name': 'SendToMonitorStation',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Send state change to monitoring station.',
            'IsUdf': false
        },
        {
            'Name': 'ShuntCancelDisable',
            'LocalizedName': 'Shunt for Full Shunt Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Always unlock door for full shunt time when true.',
            'IsUdf': false
        },
        {
            'Name': 'ShuntDSMOnRTE',
            'LocalizedName': 'Shunt DSM while RTE Active',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether or not to shunt DSM (door shunt monitor) while RTE (request to exit) is active for this door.',
            'IsUdf': false
        },
        {
            'Name': 'ShuntExpirationRelayID',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 1.0,
            'MaxValue': 2147483647.0,
            'Description': 'The Shunt Expiration Relay ID.',
            'IsUdf': false
        },
        {
            'Name': 'ShuntExpirationRelayObjectKey',
            'LocalizedName': 'Shunt Expiration Relay',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': false,
            'IsPersistent': false,
            'Type': 'ObjectKey',
            'IsEnum': false,
            'Description': 'The output that uses as a shunt expiration relay for this door',
            'LinkedProperties': [
                'ShuntExpirationRelayID'
            ],
            'LookupData': {
                'IsQueryable': true,
                'PersistentTypeProperty': '',
                'PersistentIdProperty': 'ShuntExpirationRelayID',
                'TargetName': 'Name',
                'TargetObjectID': 'ObjectID',
                'ValidLookupTypes': [
                    'SoftwareHouse.NextGen.Common.SecurityObjects.Output'
                ]
            },
            'IsUdf': false
        },
        {
            'Name': 'ShuntExpRelayTime',
            'LocalizedName': 'Shunt Expiration Relay Time (seconds) ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': -2147483648.0,
            'MaxValue': 2147483647.0,
            'Description': 'Select the shunt expiration warning time.  The valid range is 0 to 240 seconds (4 minutes).',
            'IsUdf': false
        },
        {
            'Name': 'ShuntTime',
            'LocalizedName': 'Shunt Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 9999.0,
            'Description': 'The shunt time in seconds for this door.  The range is 0 to 999 seconds.',
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
            'Description': 'Whether this door is used as a template or not.',
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
            'Description': 'The ID of the time zone associated with the door.',
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
            'Description': 'Time Zone for this door.',
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
            'Name': 'UnlockDoorOnRTE',
            'LocalizedName': 'Unlock Door On RTE ',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Boolean',
            'IsEnum': false,
            'Description': 'Check whether or not to unlock this door on RTE (request to exit).',
            'IsUdf': false
        },
        {
            'Name': 'UnlockGraceTime',
            'LocalizedName': 'Unlock Grace Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 1000.0,
            'Description': 'Enter the time interval that the system waits for a door open signal after the door unlock time has expired.  The value range is 0  to 1000 (0 - 100 seconds).  This prevents a false "door forced" message in situations where signals are nearly simultaneous.',
            'IsUdf': false
        },
        {
            'Name': 'UnlockTime',
            'LocalizedName': 'Unlock Time',
            'IsUserSelectable': true,
            'IsReadOnly': false,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Int32',
            'IsEnum': false,
            'MinValue': 0.0,
            'MaxValue': 255.0,
            'Description': 'The number of seconds of unlock time for this door.  The valid range is 0 to 255 seconds.',
            'IsUdf': false
        },
        {
            'Name': 'VisitorManagement',
            'LocalizedName': 'Visitor Management',
            'IsUserSelectable': true,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'SoftwareHouse.NextGen.Common.SecurityObjectDefinitions.DoorVisitorManagementStatus',
            'IsEnum': true,
            'Description': 'Whether this door is configured for Visitor Management or not.',
            'IsUdf': false
        },
        {
            'Name': 'XmlGeneral1',
            'IsUserSelectable': false,
            'IsReadOnly': true,
            'IsSearchable': true,
            'IsPersistent': true,
            'Type': 'Xml',
            'IsEnum': false,
            'IsUdf': false
        }
    ]
};

export { typeName, schema };