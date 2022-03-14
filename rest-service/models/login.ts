import { v4 as uuidv4 } from 'uuid';

export type Login = {

    //
    // UserName that is used to login to the web service
    username: string;

    //
    // Password that is used to login to the web service
    password: string;

    //
    //  Unique name of the client type that is trying to login to the web service. 
    clientName: string;

    //
    // Name of the custom login key used to identify the type of special login. If blank, does the normal login.
    customKey: string;

    //
    //  Unique ID of the client.
    clientId: string;

    //
    // Version of the client that is communicating with the victor web service. Ex: 2.50
    clientVersion: string;

    //
    // Culture/Language locale that the client wants to set for the specific connection.
    culture: string;

    //
    // UUID
    uuid: string;
}

export class Session {

    public connectTime: number;
    
    constructor(
        public login: Login,
        public sessionId: string = uuidv4()
    ){
        this.connectTime = Date.now();
    }
}