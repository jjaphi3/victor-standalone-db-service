import { v4 as uuidv4 } from 'uuid';

export class Login {

    constructor(
        //
        // UserName that is used to login to the web service
        public username: string = '',

        //
        // Password that is used to login to the web service
        public password: string = '',

        //
        // Unique name of the client type that is trying to login to the web service. 
        public clientName: string = '',

        //
        // Name of the custom login key used to identify the type of special login. If blank, does the normal login.
        public customKey: string = '',

        //
        // Unique ID of the client.
        public clientId: string = '',

        //
        // Version of the client that is communicating with the victor web service. Ex: 2.50
        public clientVersion: string = '',

        //
        // UUID
        public uuid: string = ''
    ) { }
}

export class Session {

    public connectTime: number;
    public culture = '';
    
    constructor(
        public login: Login,
        public sessionId: string = uuidv4()
    ){
        this.connectTime = Date.now();
    }
}