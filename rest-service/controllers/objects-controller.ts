import { StatusCodes } from 'http-status-codes';
import { Criteria } from '../models/criteria';
import { CrossFireObject } from '../models/crossFireObject';
import { HttpResponse } from '../models/http-response';

export class ObjectsController {

    private static objectsController: ObjectsController;

    public constructor() { 
        console.log('ObjectsController');
    }

    //
    // ObjectsController instance
    public static get instance(): ObjectsController {
        return ObjectsController.objectsController 
            ? ObjectsController.objectsController
            : ObjectsController.objectsController = new ObjectsController();
    }

    //
    // Gets all the objects of the specific type and having the specific ObjectID
    public get(type: string, id: number): HttpResponse {
        console.log(`Get:${type}, ${id}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Gets all the objects of the specific object type.
    public getAll(type: string): HttpResponse {
        console.log(`GetAll:${type}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Gets all the objects defined in the Criteria.
    public getAllWithCriteria(criteria: Criteria): HttpResponse {
        console.log(`GetAllWithCriteria:${criteria}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Updates the object defined by the properties in the crossFireObject.
    public put(type: string, id: number, crossFireObject: CrossFireObject): HttpResponse {
        console.log(`Get:${type}, ${id}, ${crossFireObject}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Deletes the object specified by the type and ID from the system.
    public delete(type: string, id: number): HttpResponse {
        console.log(`delete:${type}, ${id}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Finds and returns all the objects defined in the Criteria
    public findObjsWithCriteriaFilter(criteria: Criteria): HttpResponse {
        console.log(`FindObjsWithCriteriaFilter:${criteria}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Persists the object defined in the crossFireObject into the system. 
    public persist(crossFireObject: CrossFireObject, validateProps = true): HttpResponse {
        console.log(`Persist:${crossFireObject}, ${validateProps}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // API call used to add an object into the system using the container if the parent object already exists in the system.
    public persistToContainer(crossFireObject: CrossFireObject): HttpResponse {
        console.log(`persistToContainer:${crossFireObject}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // API call used to remove an object from the system using the container if the parent object already exists in the system.
    public removeFromContainer(crossFireObject: CrossFireObject): HttpResponse {
        console.log(`removeFromContainer:${crossFireObject}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Gets all the enum properties for a specific type with the enum values including the enum indexes.
    public getEnumProperties(type: string): HttpResponse {
        console.log(`getEnumProperties:${type}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Request Personnel id from client and return back Credentials associated to PersonnelID
    public getCredential(id: number): HttpResponse {
        console.log(`getCredential:${id}, ${id}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Request credential id from client and return back BadgeLayout in pdf form
    public getBadgePreview(id: number, imageId = Number.MIN_VALUE): HttpResponse {
        console.log(`getBadgePreview:${id}, ${imageId}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Sets one or more property values in one or more objects of a given ClassType.
    public setProperty(params: unknown): HttpResponse {
        console.log(`setProperty:${params}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Get a list of valid partitions which client can use for changing the partition of a set of objects.
    public partitionsForChange(params: unknown): HttpResponse {
        console.log(`partitionsForChange:${params}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }

    //
    // Get a list of valid objects which client can use for assignment to a set of parent objects.
    public getObjectsForAssignment(params: unknown): HttpResponse {
        console.log(`partitionsForChange, ${params}`);
        return new HttpResponse(StatusCodes.NOT_IMPLEMENTED);
    }
}