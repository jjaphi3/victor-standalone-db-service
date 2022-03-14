export type CrossFireObject = {

    // 
    // Type Full Name of the object that should be persisted/updated
    type: string;

    //
    // ObjectID of the object that should be persisted/updated
    id: number;

    //
    // Array of Property Names that should be persisted/updated. This goes in accordance with PropertyValues.
    // PropertyNames and PropertyValues have to be passed in sequential order.
    propertyNames: string[];

    //
    // Array of Property Values that should be persisted/updated. This goes in accordance with PropertyNames.
    // PropertyNames and PropertyValues have to be passed in sequential order.
    propertyValues: object[]

    //
    // Type Full Name of the Parent type to which this object has to be added to the container. This is needed if
    // the child has to be persisted along with the parent object.
    parentType: string;

    //
    // ObjectID of the parent object. Needed when the child has to be persisted with the parent.
    parentId: number;

    //
    // If this is the parent object itself, this property can be populated with an array of the children objects.
    children: CrossFireObject[];
}