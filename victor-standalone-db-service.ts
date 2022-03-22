import { ApiService } from './rest-service/api-service';
import { Login } from './rest-service/models/login';
import querystring from 'querystring';
//var querystring = require('querystring');
import { version } from './package.json';
import { Utils } from './rest-service/utils';
import { inspect } from 'util';


export class VictorStandaloneDbService {

    public static test() {

        console.log(version);

        const logindata = { 
            'UserName': 'user',
            'Password' : 'password',
            'ClientName': 'clientName',
            'CustomKey': 'customKey',
            'ClientId': 'clientId',
            'ClientVersion': 'clientVersion',
            'Culture': 'culture',
            abc: [ { a1:true, a2: {aa1: false, aa2: 10}}, { b1:false, b2: {bb1:false, bb2: 20}} ]
        };

        //const d = '[{"Name:"""}]'
        const d = [
            {
                'Name': 'Access View',
                'PartitionID': 1,
                'ObjectID': 1000,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': 'a091d988-8414-495c-a366-bc4d16ff2791',
                'Description': 'Access view with event viewer and swipe and show',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":2001,"cols":5,"rows":3,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"ed81d583-7888-45f7-9217-fff051f532d1","key":"EVENTVIEWER","icon":"bolt","description":"Security system event viewer","name":"Event Viewer","loader":{"libPath":"ccure-event-viewer","component":"EventViewerComponent","data":{"Name":"Event Viewer","translationKey":"EVENTVIEWER","Description":"Security system event viewer","GUID":"ed81d583-7888-45f7-9217-fff051f532d1","intrinsic":true}}}},{"id":2002,"cols":2,"rows":3,"x":5,"y":0,"layerIndex":0,"dataObject":{"guid":"f0739385-431e-4a12-8b9f-7be43cefd625","key":"SWIPEANDSHOW","icon":"transfer_within_a_station","description":"Swipe & Show Activity","name":"Swipe & Show","loader":{"libPath":"ccure-swipe-show","component":"SwipeShowComponent","data":{"Name":"Swipe & Show","translationKey":"SWIPEANDSHOW","Description":"Swipe & Show Activity","GUID":"f0739385-431e-4a12-8b9f-7be43cefd625","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2508,
                '*id': {
                    '_values': [
                        1000
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'a091d988-8414-495c-a366-bc4d16ff2791',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Access View and Video',
                'PartitionID': 1,
                'ObjectID': 1001,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': '9d886583-eaaf-45eb-96d3-2da4305785c0',
                'Description': 'Access view with event viewer, swipe and show and video',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":2003,"cols":3,"rows":2,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"ed81d583-7888-45f7-9217-fff051f532d1","key":"EVENTVIEWER","icon":"bolt","description":"Security system event viewer","name":"Event Viewer","loader":{"libPath":"ccure-event-viewer","component":"EventViewerComponent","data":{"Name":"Event Viewer","translationKey":"EVENTVIEWER","Description":"Security system event viewer","GUID":"ed81d583-7888-45f7-9217-fff051f532d1","intrinsic":true}}}},{"id":2004,"cols":3,"rows":1,"x":0,"y":2,"layerIndex":0,"dataObject":{"guid":"f0739385-431e-4a12-8b9f-7be43cefd625","key":"SWIPEANDSHOW","icon":"transfer_within_a_station","description":"Swipe & Show Activity","name":"Swipe & Show","loader":{"libPath":"ccure-swipe-show","component":"SwipeShowComponent","data":{"Name":"Swipe & Show","translationKey":"SWIPEANDSHOW","Description":"Swipe & Show Activity","GUID":"f0739385-431e-4a12-8b9f-7be43cefd625","intrinsic":true}}}},{"id":2005,"cols":4,"rows":3,"x":3,"y":0,"layerIndex":0,"dataObject":{"guid":"df8fa35c-7253-495a-b72a-6d1d503fbcde","key":"VIDEOMONITORING","icon":"video_call","description":"Video Monitoring Activity","name":"Video Monitoring","loader":{"libPath":"ccure-video-monitor","component":"entry","data":{"Name":"Video Monitoring","translationKey":"VIDEOMONITORING","Description":"Video Monitoring Activity","GUID":"df8fa35c-7253-495a-b72a-6d1d503fbcde","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2993,
                '*id': {
                    '_values': [
                        1001
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '9d886583-eaaf-45eb-96d3-2da4305785c0',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Event Viewer',
                'PartitionID': 1,
                'ObjectID': 1002,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': '8421e1e6-4eeb-49e3-be6e-2ee6d3cbc689',
                'Description': 'Event Viewer',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":1002,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"ed81d583-7888-45f7-9217-fff051f532d1","key":"EVENTVIEWER","icon":"bolt","description":"Security system event viewer","name":"Event Viewer","loader":{"libPath":"ccure-event-viewer","component":"EventViewerComponent","data":{"Name":"Event Viewer","translationKey":"EVENTVIEWER","Description":"Security system event viewer","GUID":"ed81d583-7888-45f7-9217-fff051f532d1","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2002,
                '*id': {
                    '_values': [
                        1002
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8421e1e6-4eeb-49e3-be6e-2ee6d3cbc689',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Video Monitoring',
                'PartitionID': 1,
                'ObjectID': 1003,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': 'e2a17982-4af8-4d07-9517-b7be6a08db6c',
                'Description': 'Video Monitoring Activity',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":1003,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"df8fa35c-7253-495a-b72a-6d1d503fbcde","key":"VIDEOMONITORING","icon":"video_call","description":"Video Monitoring Activity","name":"Video Monitoring","loader":{"libPath":"ccure-video-monitor","component":"entry","data":{"Name":"Video Monitoring","translationKey":"VIDEOMONITORING","Description":"Video Monitoring Activity","GUID":"df8fa35c-7253-495a-b72a-6d1d503fbcde","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2021,
                '*id': {
                    '_values': [
                        1003
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'e2a17982-4af8-4d07-9517-b7be6a08db6c',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Swipe and Show',
                'PartitionID': 1,
                'ObjectID': 1004,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': '89fd47d4-8158-4ed2-a8fa-2163e2f8961e',
                'Description': 'Swipe and Show Activity',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":1004,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"f0739385-431e-4a12-8b9f-7be43cefd625","key":"SWIPEANDSHOW","icon":"transfer_within_a_station","description":"Swipe & Show Activity","name":"Swipe & Show","loader":{"libPath":"ccure-swipe-show","component":"SwipeShowComponent","data":{"Name":"Swipe & Show","translationKey":"SWIPEANDSHOW","Description":"Swipe & Show Activity","GUID":"f0739385-431e-4a12-8b9f-7be43cefd625","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2020,
                '*id': {
                    '_values': [
                        1004
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '89fd47d4-8158-4ed2-a8fa-2163e2f8961e',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Personnel Monitoring',
                'PartitionID': 1,
                'ObjectID': 1005,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': 'c49da43a-7bce-4660-a9ae-c4e2631b4e5d',
                'Description': 'Personnel Monitoring Activity',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":1005,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"fae34b07-be27-445a-b7ce-0cde58814b0a","key":"PERSONNELMONITORING","icon":"person","description":"Personnel Monitoring Activity","name":"Personnel Monitoring","loader":{"libPath":"ccure-personnel-monitoring","component":"PersonnelMonitoringComponent","data":{"Name":"Personnel Monitoring","translationKey":"PERSONNELMONITORING","Description":"Personnel Monitoring Activity","GUID":"fae34b07-be27-445a-b7ce-0cde58814b0a","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2079,
                '*id': {
                    '_values': [
                        1005
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c49da43a-7bce-4660-a9ae-c4e2631b4e5d',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Video Search',
                'PartitionID': 1,
                'ObjectID': 1006,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': 'aa359213-289a-4262-a3c8-6b70c335ab77',
                'Description': 'Video Search Activity',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":1006,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"3d2bd399-c1da-4c31-8cbe-a4c301640c3f","key":"VIDEOSEARCH","icon":"search","description":"Video Search Activity","name":"Video Search","loader":{"libPath":"ccure-video-search","component":"entry","data":{"Name":"Video Search","translationKey":"VIDEOSEARCH","Description":"Video Search Activity","GUID":"3d2bd399-c1da-4c31-8cbe-a4c301640c3f","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 1984,
                '*id': {
                    '_values': [
                        1006
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'aa359213-289a-4262-a3c8-6b70c335ab77',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'System Health Dashboard',
                'PartitionID': 1,
                'ObjectID': 1007,
                'LastModifiedByID': 5344,
                'LastModifiedTime': '2022-02-14T08:00:45.617Z',
                'GUID': '97ceca9b-c78e-4265-b788-214e0f7b98cd',
                'Description': 'System health performance dashboard',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":1001,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"2fe7a413-0999-4847-9f99-7ac26bf2351c","key":"DASHBOARD","icon":"dashboard","description":"Overall system health performance dashboard","name":"System health dashboard","loader":{"libPath":"ccure-dashboard-viewer","component":"SystemHealthComponent","data":{"Name":"System health dashboard","translationKey":"DASHBOARD","Description":"Overall system health performance dashboard","GUID":"2fe7a413-0999-4847-9f99-7ac26bf2351c","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2094,
                '*id': {
                    '_values': [
                        1007
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '97ceca9b-c78e-4265-b788-214e0f7b98cd',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Default',
                'PartitionID': 1,
                'ObjectID': 5000,
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2021-10-08T14:06:33.363Z',
                'GUID': '65e65cc9-b11a-49ec-a981-82b0a43debdd',
                'Description': 'Default system dashboard',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":6364,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"58048bd4-bf36-47bc-96ce-82ae0d7d960d","key":"DASHBOARD","icon":"dashboard","description":"Overall security system performance dashboard","name":"Server dashboard","loader":{"libPath":"ccure-dashboard-viewer","component":"DashboardComponent","data":{"Name":"Server dashboard","translationKey":null,"Description":"Overall security system performance dashboard","GUID":"58048bd4-bf36-47bc-96ce-82ae0d7d960d"}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2030,
                '*id': {
                    '_values': [
                        5000
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '65e65cc9-b11a-49ec-a981-82b0a43debdd',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Access View & Video',
                'PartitionID': 1,
                'ObjectID': 5001,
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2022-02-14T09:35:02.373Z',
                'GUID': '98087add-591b-473d-bea2-ae0e663ae03b',
                'Description': 'Access view with event viewer, swipe and show and video',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":2003,"cols":3,"rows":2,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"ed81d583-7888-45f7-9217-fff051f532d1","key":"EVENTVIEWER","icon":"bolt","description":"Security system event viewer","name":"Event Viewer","loader":{"libPath":"ccure-event-viewer","component":"EventViewerComponent","data":{"Name":"Event Viewer","translationKey":"EVENTVIEWER","Description":"Security system event viewer","GUID":"ed81d583-7888-45f7-9217-fff051f532d1","intrinsic":true}}}},{"id":2004,"cols":3,"rows":1,"x":0,"y":2,"layerIndex":0,"dataObject":{"guid":"f0739385-431e-4a12-8b9f-7be43cefd625","key":"SWIPEANDSHOW","icon":"transfer_within_a_station","description":"Swipe & Show Activity","name":"Swipe & Show","loader":{"libPath":"ccure-swipe-show","component":"SwipeShowComponent","data":{"Name":"Swipe & Show","translationKey":"SWIPEANDSHOW","Description":"Swipe & Show Activity","GUID":"f0739385-431e-4a12-8b9f-7be43cefd625","intrinsic":true}}}},{"id":2005,"cols":4,"rows":3,"x":3,"y":0,"layerIndex":0,"dataObject":{"guid":"df8fa35c-7253-495a-b72a-6d1d503fbcde","key":"VIDEOMONITORING","icon":"video_call","description":"Video Monitoring Activity","name":"Video Monitoring","loader":{"libPath":"ccure-video-monitor","component":"entry","data":{"Name":"Video Monitoring","translationKey":"VIDEOMONITORING","Description":"Video Monitoring Activity","GUID":"df8fa35c-7253-495a-b72a-6d1d503fbcde","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2991,
                '*id': {
                    '_values': [
                        5001
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '98087add-591b-473d-bea2-ae0e663ae03b',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Swipe & Show',
                'PartitionID': 1,
                'ObjectID': 5002,
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2022-02-14T09:35:02.533Z',
                'GUID': 'c57f2814-639d-4ec0-8e64-2fb03e43b144',
                'Description': 'Swipe & Show Activity',
                'Template': false,
                'Protected': true,
                'SpecialEditingRequired': false,
                'Panes': '[{"id":1004,"cols":1,"rows":1,"x":0,"y":0,"layerIndex":0,"dataObject":{"guid":"f0739385-431e-4a12-8b9f-7be43cefd625","key":"SWIPEANDSHOW","icon":"transfer_within_a_station","description":"Swipe & Show Activity","name":"Swipe & Show","loader":{"libPath":"ccure-swipe-show","component":"SwipeShowComponent","data":{"Name":"Swipe & Show","translationKey":"SWIPEANDSHOW","Description":"Swipe & Show Activity","GUID":"f0739385-431e-4a12-8b9f-7be43cefd625","intrinsic":true}}}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":2,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":0,"outerMargin":false,"outerMarginTop":0,"outerMarginRight":0,"outerMarginBottom":0,"outerMarginLeft":0,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":150,"fixedRowHeight":150,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":true,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"pushDirections":{"north":true,"east":true,"south":true,"west":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 2016,
                '*id': {
                    '_values': [
                        5002
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'c57f2814-639d-4ec0-8e64-2fb03e43b144',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Andrew1',
                'PartitionID': 1,
                'ObjectID': 5004,
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2022-03-07T11:21:41.557Z',
                'GUID': 'bf69df25-44d0-4248-aebe-c29dde7cdaec',
                'Description': '',
                'Template': false,
                'Protected': false,
                'SpecialEditingRequired': false,
                'Panes': '[{"x":0,"y":0,"cols":7,"rows":4,"id":58672,"layerIndex":2,"dataObject":{"guid":"df8fa35c-7253-495a-b72a-6d1d503fbcde","key":"VIDEOMONITORING","icon":"video_call","description":"Video Management Activity","name":"Video Monitoring","intrinsic":true,"loader":{"libPath":"ccure-video-monitor","component":"entry","dataProp":"videoControlInput","data":{"layout":"2x2","cameras":[{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCureFishEye on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCureFishEye","Description":"","ObjectID":5130,"GUID":"877372ef-44f2-4733-9060-d0cf7e143ffb","LastModifiedByID":5000,"LastModifiedTime":"2021-08-23T16:48:41.397Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":1,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.SS015.01.00.00.0011","CameraIPAddress":"192.168.25.71","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":375,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":1,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","paneId":"cell-0","isFisheye":true},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCureFixed1 on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCureFixed1","Description":"","ObjectID":5131,"GUID":"597cab8e-6b0d-498f-b935-de4b2e665490","LastModifiedByID":5000,"LastModifiedTime":"2021-11-10T19:58:48.303Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":5,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.Ess4.01.01.00.3811","CameraIPAddress":"192.168.25.72","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":373,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":5,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","paneId":"cell-1"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCureFixed2 on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCureFixed2","Description":"","ObjectID":5132,"GUID":"879a9a05-0469-4c3b-ab55-d0d3075375ff","LastModifiedByID":5000,"LastModifiedTime":"2021-08-23T16:48:42.287Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":6,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.Pro3.02.07.00.0015","CameraIPAddress":"192.168.25.73","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":373,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":6,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","paneId":"cell-2"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCurePTZ1 on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCurePTZ1","Description":"","ObjectID":5133,"GUID":"bbf891fd-adcc-4005-8ae2-dfadca224e8b","LastModifiedByID":5000,"LastModifiedTime":"2021-08-23T16:48:42.3Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":7,"CameraType":1,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.SS004.01.08.00.0154","CameraIPAddress":"192.168.25.74","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":372,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":7,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","paneId":"cell-3"}],"sideOpenStatus":true}}},"compInstance":null,"tempState":{"rows":4,"cols":7,"x":0,"y":0,"layerIndex":0,"gridType":"fixed"}}]',
                'Options': '{"gridType":"fit","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":1,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":20,"outerMargin":true,"outerMarginTop":10,"outerMarginRight":10,"outerMarginBottom":10,"outerMarginLeft":10,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":200,"fixedRowHeight":200,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":false,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":100,"emptyCellDragMaxRows":100,"ignoreMarginInRow":true,"draggable":{"enabled":true},"ignoreContentClass":"gridster-item-content","ignoreContent":true,"dragHandleClass":"drag-handler","resizable":{"enabled":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushDirections":{"north":true,"east":true,"south":true,"west":true},"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': -2147483648,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': -2147483648,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 7765,
                '*id': {
                    '_values': [
                        5004
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': 'bf69df25-44d0-4248-aebe-c29dde7cdaec',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'Andrew2',
                'PartitionID': 1,
                'ObjectID': 5005,
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2022-03-14T11:19:48.603Z',
                'GUID': '0c57430e-1550-4fbb-a217-e4ee89b81907',
                'Description': '',
                'Template': false,
                'Protected': false,
                'SpecialEditingRequired': false,
                'Panes': '[{"x":0,"y":0,"cols":7,"rows":4,"id":10096,"layerIndex":0,"dataObject":{"guid":"df8fa35c-7253-495a-b72a-6d1d503fbcde","key":"VIDEOMONITORING","icon":"video_call","description":"Video Management Activity","name":"Video Monitoring","intrinsic":true,"loader":{"libPath":"ccure-video-monitor","component":"entry","dataProp":"videoControlInput","data":{"layout":"2x2","cameras":[{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"wegmans on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"wegmans","Description":"","ObjectID":5239,"GUID":"81d195d9-fae4-4f61-9724-42e2699fcf88","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:27.667Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":28,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.144","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":360,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":28,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","paneId":"cell-0"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCureFixed2 on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCureFixed2","Description":"","ObjectID":5132,"GUID":"879a9a05-0469-4c3b-ab55-d0d3075375ff","LastModifiedByID":5000,"LastModifiedTime":"2021-08-23T16:48:42.287Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":6,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.Pro3.02.07.00.0015","CameraIPAddress":"192.168.25.73","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":373,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":6,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","paneId":"cell-1"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCurePTZ1 on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCurePTZ1","Description":"","ObjectID":5133,"GUID":"bbf891fd-adcc-4005-8ae2-dfadca224e8b","LastModifiedByID":5000,"LastModifiedTime":"2021-08-23T16:48:42.3Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":7,"CameraType":1,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.SS004.01.08.00.0154","CameraIPAddress":"192.168.25.74","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":372,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":7,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","paneId":"cell-3"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCureFixed1 on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCureFixed1","Description":"","ObjectID":5131,"GUID":"597cab8e-6b0d-498f-b935-de4b2e665490","LastModifiedByID":5000,"LastModifiedTime":"2021-11-10T19:58:48.303Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":5,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.Ess4.01.01.00.3811","CameraIPAddress":"192.168.25.72","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":373,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":5,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","paneId":"cell-2"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"15_people on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"15_people","Description":"","ObjectID":5266,"GUID":"26815d6e-2648-463d-bf40-a2a4b10a18d5","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:30.253Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":55,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.148","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":362,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":55,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","paneId":"cell-1dda8e1-0"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"people138 on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"people138","Description":"","ObjectID":5233,"GUID":"b0eddc2d-1472-4985-961c-dd8fbd6bf871","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:33.867Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":22,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.138","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":362,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":22,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","paneId":"cell-1dda8e1-2"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"people139 on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"people139","Description":"","ObjectID":5234,"GUID":"3474b7a5-c6ba-4e4f-b2a3-f54986f66ede","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:28.883Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":23,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.139","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":362,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":23,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","paneId":"cell-1dda8e1-1"},{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"people140 on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"people140","Description":"","ObjectID":5235,"GUID":"05720344-5168-4b04-afee-ec259983f05c","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:30.713Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":24,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.140","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":362,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":24,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","paneId":"cell-1dda8e1-3"}],"sideOpenStatus":false},"loadDataOnSave":true}},"compInstance":null}]',
                'Options': '{"gridType":"fixed","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":1,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":20,"outerMargin":true,"outerMarginTop":10,"outerMarginRight":10,"outerMarginBottom":10,"outerMarginLeft":10,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":200,"fixedRowHeight":200,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":false,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":100,"emptyCellDragMaxRows":100,"ignoreMarginInRow":true,"draggable":{"enabled":true},"ignoreContentClass":"gridster-item-content","ignoreContent":true,"dragHandleClass":"drag-handler","resizable":{"enabled":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushDirections":{"north":true,"east":true,"south":true,"west":true},"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': -2147483648,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': -2147483648,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 13178,
                '*id': {
                    '_values': [
                        5005
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '0c57430e-1550-4fbb-a217-e4ee89b81907',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            },
            {
                'Name': 'VideoIsMine',
                'PartitionID': 1,
                'ObjectID': 5006,
                'LastModifiedByID': 5000,
                'LastModifiedTime': '2022-03-14T11:19:23.833Z',
                'GUID': '8f4aa7dc-3f71-4479-9d11-7ce31f525dc5',
                'Description': '',
                'Template': false,
                'Protected': false,
                'SpecialEditingRequired': false,
                'Panes': '[{"x":0,"y":0,"cols":3,"rows":2,"id":29332,"layerIndex":0,"dataObject":{"disabled":false,"guid":"597cab8e-6b0d-498f-b935-de4b2e665490","key":"CAMERAS","icon":"videocam","name":"CCureFixed1","description":"","loader":{"libPath":"ccure-video-monitor-ve","component":"entry","dataProp":"camera","vendor":"videoedge","data":{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"10.160.98.75","SoftTriggerDetail":"","DisplayName":"CCureFixed1 on 10.160.98.75","ParentObjectID":5005,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"CCureFixed1","Description":"","ObjectID":5131,"GUID":"597cab8e-6b0d-498f-b935-de4b2e665490","LastModifiedByID":5000,"LastModifiedTime":"2021-11-10T19:58:48.303Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5005,"Number":5,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.98.75","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"Illustra.Ess4.01.01.00.3811","CameraIPAddress":"192.168.25.72","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":373,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":5,"vendor":"videoedge","host":"10.160.98.75","auth":{"username":"admin","password":"ccureweb","secureConnection":false},"version":"5.7.1.174","layoutPaneId":29332,"editMode":true}}},"compInstance":null},{"x":0,"y":2,"cols":3,"rows":2,"id":65040,"layerIndex":0,"dataObject":{"disabled":false,"guid":"6c338ccd-4bdf-4c5b-918e-39dc27328703","key":"CAMERAS","icon":"videocam","name":"Daryl_10s","description":"","loader":{"libPath":"ccure-video-monitor-ve","component":"entry","dataProp":"camera","vendor":"videoedge","data":{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"Daryl_10s on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"Daryl_10s","Description":"","ObjectID":5231,"GUID":"6c338ccd-4bdf-4c5b-918e-39dc27328703","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:28.34Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":20,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.136","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":362,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":20,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","layoutPaneId":65040,"editMode":true}}},"compInstance":null},{"x":3,"y":0,"cols":3,"rows":2,"id":5270,"layerIndex":0,"dataObject":{"disabled":false,"guid":"0ba1c51e-6a9e-47a2-afda-d1b02f0de809","key":"CAMERAS","icon":"videocam","name":"Daryl_Lindsay25s","description":"","loader":{"libPath":"ccure-video-monitor-ve","component":"entry","dataProp":"camera","vendor":"videoedge","data":{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"Daryl_Lindsay25s on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"Daryl_Lindsay25s","Description":"","ObjectID":5232,"GUID":"0ba1c51e-6a9e-47a2-afda-d1b02f0de809","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:27.483Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":21,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.137","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":369,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":21,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","layoutPaneId":5270,"editMode":true}}},"compInstance":null},{"x":3,"y":2,"cols":3,"rows":2,"id":14482,"layerIndex":0,"dataObject":{"disabled":false,"guid":"81d195d9-fae4-4f61-9724-42e2699fcf88","key":"CAMERAS","icon":"videocam","name":"wegmans","description":"","loader":{"libPath":"ccure-video-monitor-ve","component":"entry","dataProp":"camera","vendor":"videoedge","data":{"MonitorState":0,"DryContact":false,"UserAlarm":false,"ServerName":"QA","SoftTriggerDetail":"","DisplayName":"wegmans on QA","ParentObjectID":5010,"LocationMetaTagFullName":"","GISLocation":false,"GeographicLocation":null,"Name":"wegmans","Description":"","ObjectID":5239,"GUID":"81d195d9-fae4-4f61-9724-42e2699fcf88","LastModifiedByID":5000,"LastModifiedTime":"2021-12-06T16:52:27.667Z","PartitionID":1,"Protected":false,"Template":false,"Enabled":true,"ServerID":5010,"Number":28,"CameraType":0,"FrameRate":0,"PresetPosition":0,"PTZ":0,"BIDAction":0,"CurrentPreset":0,"CurrentPattern":0,"IPAddress":"10.160.99.17","PreAlarmTime":0,"PostAlarmTime":0,"RecordEndTime":"1970-01-01T00:00:00Z","AlarmType":0,"Alarmin":false,"Videoloss":false,"Override":false,"Motion":false,"Perimeter":false,"Light":false,"Advanced":false,"Museum":false,"Recording":false,"FullScreen":false,"VideoCameraAlarm":1,"EventGUID":null,"FirmwareVersion":"1.3.2.C17223A1581","CameraIPAddress":"192.168.44.144","ClassType":"ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera","*routing":null,"*ObjectSize":360,"*PK":["ObjectID"],"__state":1,"__appServer":"VM-INGRTN-16-15","*context":"00000000-0000-0000-0000-000000000000","id":28,"vendor":"videoedge","host":"10.160.99.17","auth":{"username":"admin","password":"admin","secureConnection":false},"version":"5.7.1.214","layoutPaneId":14482,"editMode":true}}},"compInstance":null}]',
                'Options': '{"gridType":"fixed","compactType":"none","allowMultiLayer":true,"defaultLayerIndex":0,"baseLayerIndex":1,"maxLayerIndex":1,"pushItems":false,"swap":true,"swapWhileDragging":false,"margin":20,"outerMargin":true,"outerMarginTop":10,"outerMarginRight":10,"outerMarginBottom":10,"outerMarginLeft":10,"useTransformPositioning":true,"mobileBreakpoint":640,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":200,"fixedRowHeight":200,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":false,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":true,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":true,"emptyCellDragMaxCols":100,"emptyCellDragMaxRows":100,"ignoreMarginInRow":true,"draggable":{"enabled":true},"ignoreContentClass":"gridster-item-content","ignoreContent":true,"dragHandleClass":"drag-handler","resizable":{"enabled":true},"disablePushOnDrag":false,"disablePushOnResize":false,"pushDirections":{"north":true,"east":true,"south":true,"west":true},"pushResizeItems":true,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}',
                'Locked': false,
                'SaveAsDefault': false,
                'AutoCloseOnAck': false,
                'ConfirmOnAutoClose': false,
                'LayoutOpen': false,
                'AutoCloseOnClear': false,
                'ConfirmEventClearOnAutoClose': false,
                'AllowFiltering': false,
                'ShowMaintenanceObject': null,
                'LayoutType': 0,
                'RefreshType': 0,
                'WebLayoutType': null,
                'WidgetsPartitionID': null,
                'ClassType': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                '*routing': null,
                '*ObjectSize': 8606,
                '*id': {
                    '_values': [
                        5006
                    ],
                    '_objectTypeName': 'SoftwareHouse.CrossFire.Common.Objects.WebLayout',
                    '_appServer': 'VM-INGRTN-16-15',
                    'Guid': '8f4aa7dc-3f71-4479-9d11-7ce31f525dc5',
                    'RoutingInfo': null,
                    'ContextId': '00000000-0000-0000-0000-000000000000',
                    'TransactionID': null
                },
                '*PK': [
                    'ObjectID'
                ],
                '*state': 1,
                '*appServer': 'VM-INGRTN-16-15',
                '*context': '00000000-0000-0000-0000-000000000000'
            }
        ];
        //const di = JSON.parse(d);

        const i = inspect(logindata);
        console.log(i);
        const j = JSON.stringify(logindata);
        console.log(j);

        console.log(logindata.UserName);

        const login = Utils.setObjectIgnoreCase(logindata, new Login());


        // const data = querystring.stringify(login);
        // const searchParams = new URLSearchParams(logindata);
        // const a1 = searchParams.toString();
        // const loginParams = new URLSearchParams(a1);



        // const loginObject = Object.fromEntries(loginParams);
        // const login = new Login();
        // const pnames = Object.getOwnPropertyNames(login);
        // const psymbols = Object.getOwnPropertySymbols(login);
        // const loginKeys = Object.keys(login);
        // for(const objectKey of Object.keys(loginObject)) {
        //     const key = loginKeys.find(k => k.toLowerCase() == objectKey.toLowerCase());
        //     if (key) {
        //         const a = (login as unknown); // Record<string, unknown>;
        //         (a as Record<string, unknown>)[key] = loginObject[objectKey];
        //     }
        // }

        // const a2 = Object.fromEntries(searchParams2) as Login;
        // a2.uuid
        console.log(JSON.stringify(login));
    }

    public static main() {
        
        const apiService = ApiService.startServer(3000);
        if (apiService != null) {
            console.log(apiService);
        }

    }
}

VictorStandaloneDbService.test();
VictorStandaloneDbService.main();
