import { StatusCodes } from 'http-status-codes';
import { DbController } from '../../database/db-controller';
import { Criteria } from '../models/criteria';
import { GlobalSearchCriteria } from '../models/global-search-criteria';
import { HttpResponse } from '../models/http-response';

export class GlobalSearchController {

    private static globalSearchController: GlobalSearchController;

    public constructor() { 
        console.log('GlobalSearchController');
    }

    //
    // ObjectsController instance
    public static get instance(): GlobalSearchController {
        return GlobalSearchController.globalSearchController 
            ? GlobalSearchController.globalSearchController
            : GlobalSearchController.globalSearchController = new GlobalSearchController();
    }

    //
    // Gets all the objects of the specific type and having the specific ObjectID
    public performSearchByQuery(query: GlobalSearchCriteria): HttpResponse {
        console.log(`GlobalSearchController:performSearchByQuery:${query}`);

        let objects: unknown[] = [];
        if (query?.types) {
            for (const type of query.types) {
                const criteria = new Criteria(type);
                objects = objects.concat(DbController.instance.getObjects(criteria));
            }
        }
        if (query.query) {
            objects = objects.filter(i => {
                const name = (i as Record<string, unknown>)?.Name as string;
                if (name) {
                    return name.toLowerCase().includes(query.query.toLowerCase());
                }
                return false;
            });
        }

        const searchResultCountByType = {};
        if (query?.types) {
            for (const type of query.types) {
                const resultsCount = searchResultCountByType as Record<string, unknown>;
                resultsCount[type] = objects.filter(i => (i as Record<string, unknown>)?.ClassType == type);
            }
        }

        let id = 0;

        const results = [
            {
                'SearchResults': objects.map((object: any) => {
                    return {
                        '_data': {
                            'ID': id++,
                            'Name': object?.Name,
                            'PartitionID': object?.PartitionID,
                            'ObjectKey': {
                                'ID': object?.ObjectID,
                                'ClassType': object?.ClassType,
                                'GUID': object?.GUID,
                                'ToObjectKey': object?.['*id'],
                            }
                        }
                    };
                }),
                'SearchResultCountByType': searchResultCountByType,
                'TotalSearchResultsAvailable': objects.length
            }
        ];
                
                
                
                
        // const results2 = [
        //     {
        //         'SearchResults': [
        //             {
        //                 '_data': {
        //                     'ID': 27,
        //                     'Name': 'Exacq_Camera_1',
        //                     'PartitionID': 1,
        //                     'ObjectKey': {
        //                         'ID': 5283,
        //                         'ClassType': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                         'GUID': 'c2bfa35d-46a3-4cd3-b98d-e0090561ac36',
        //                         'ToObjectKey': {
        //                             '_enabledStateInt': -1,
        //                             '_isTemplate': false,
        //                             '_tag': {},
        //                             '_isOwned': true,
        //                             '_values': [
        //                                 5283
        //                             ],
        //                             '_objectTypeName': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                             '_appServer': 'VM-INGRTN-16-15',
        //                             'Guid': 'c2bfa35d-46a3-4cd3-b98d-e0090561ac36',
        //                             'RoutingInfo': null,
        //                             'ContextId': '00000000-0000-0000-0000-000000000000',
        //                             'TransactionID': null
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 '_data': {
        //                     'ID': 1459,
        //                     'Name': 'Exacq_Camera_2',
        //                     'PartitionID': 1,
        //                     'ObjectKey': {
        //                         'ID': 5321,
        //                         'ClassType': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                         'GUID': '47a0f1a0-eb03-4e2a-9aa0-05d988f80c22',
        //                         'ToObjectKey': {
        //                             '_enabledStateInt': -1,
        //                             '_isTemplate': false,
        //                             '_tag': {},
        //                             '_isOwned': true,
        //                             '_values': [
        //                                 5321
        //                             ],
        //                             '_objectTypeName': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                             '_appServer': 'VM-INGRTN-16-15',
        //                             'Guid': '47a0f1a0-eb03-4e2a-9aa0-05d988f80c22',
        //                             'RoutingInfo': null,
        //                             'ContextId': '00000000-0000-0000-0000-000000000000',
        //                             'TransactionID': null
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 '_data': {
        //                     'ID': 1458,
        //                     'Name': 'Exacq_Camera_3',
        //                     'PartitionID': 1,
        //                     'ObjectKey': {
        //                         'ID': 5322,
        //                         'ClassType': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                         'GUID': 'b6ceb7e1-9be2-479d-a919-0de70b1b5bf9',
        //                         'ToObjectKey': {
        //                             '_enabledStateInt': -1,
        //                             '_isTemplate': false,
        //                             '_tag': {},
        //                             '_isOwned': true,
        //                             '_values': [
        //                                 5322
        //                             ],
        //                             '_objectTypeName': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                             '_appServer': 'VM-INGRTN-16-15',
        //                             'Guid': 'b6ceb7e1-9be2-479d-a919-0de70b1b5bf9',
        //                             'RoutingInfo': null,
        //                             'ContextId': '00000000-0000-0000-0000-000000000000',
        //                             'TransactionID': null
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 '_data': {
        //                     'ID': 14810,
        //                     'Name': 'Exacq_Camera_4',
        //                     'PartitionID': 1,
        //                     'ObjectKey': {
        //                         'ID': 5323,
        //                         'ClassType': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                         'GUID': 'f488f6dd-a9b2-438a-9062-90873a03c0f0',
        //                         'ToObjectKey': {
        //                             '_enabledStateInt': -1,
        //                             '_isTemplate': false,
        //                             '_tag': {},
        //                             '_isOwned': true,
        //                             '_values': [
        //                                 5323
        //                             ],
        //                             '_objectTypeName': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera',
        //                             '_appServer': 'VM-INGRTN-16-15',
        //                             'Guid': 'f488f6dd-a9b2-438a-9062-90873a03c0f0',
        //                             'RoutingInfo': null,
        //                             'ContextId': '00000000-0000-0000-0000-000000000000',
        //                             'TransactionID': null
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 '_data': {
        //                     'ID': 166,
        //                     'Name': 'Flex Camera outside',
        //                     'PartitionID': 1,
        //                     'ObjectKey': {
        //                         'ID': 5259,
        //                         'ClassType': 'ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera',
        //                         'GUID': '161d415d-ef8c-4210-8fe3-d98d37ab1e63',
        //                         'ToObjectKey': {
        //                             '_enabledStateInt': -1,
        //                             '_isTemplate': false,
        //                             '_tag': {},
        //                             '_isOwned': true,
        //                             '_values': [
        //                                 5259
        //                             ],
        //                             '_objectTypeName': 'ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera',
        //                             '_appServer': 'VM-INGRTN-16-15',
        //                             'Guid': '161d415d-ef8c-4210-8fe3-d98d37ab1e63',
        //                             'RoutingInfo': null,
        //                             'ContextId': '00000000-0000-0000-0000-000000000000',
        //                             'TransactionID': null
        //                         }
        //                     }
        //                 }
        //             }
        //         ],
        //         'SearchResultCountByType': {
        //             'ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera': 1,
        //             'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera': 4
        //         },
        //         'TotalSearchResultsAvailable': 5
        //     },
        //     {
        //         'SearchResults': [
        //             {
        //                 '_data': {
        //                     'ID': 56,
        //                     'Name': 'VideoEdge 4.0 Camera',
        //                     'ClassType': 'ConnectedPro.Common.VideoEdge4.Objects.VideoEdge4VideoCamera'
        //                 }
        //             },
        //             {
        //                 '_data': {
        //                     'ID': 57,
        //                     'Name': 'exacqVision/HDVR Video Camera',
        //                     'ClassType': 'ConnectedPro.Common.HDVR.Objects.HDVRVideoCamera'
        //                 }
        //             }
        //         ],
        //         'SearchResultCountByType': null,
        //         'TotalSearchResultsAvailable': 2
        //     }
        // ];

        return new HttpResponse(StatusCodes.OK, results);
    }
}