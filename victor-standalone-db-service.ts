import { ApiService } from './rest-service/api-service';
import { Login } from './rest-service/models/login';
import querystring from 'querystring';
//var querystring = require('querystring');
import { version } from './package.json';


export class VictorStandaloneDbService {

    public static test() {

        console.log(version);

        const login = { 
            username: 'user',
            password: 'password',
            clientName: 'clientName',
            customKey: 'customKey',
            clientId: 'clientId',
            clientVersion: 'clientVersion',
            culture: 'culture',
        };
        // const data = querystring.stringify(login);
        const searchParams = new URLSearchParams(login);
        const a1 = searchParams.toString();
        const searchParams2 = new URLSearchParams(a1);
        const a2 = Object.fromEntries(searchParams2) as Login;
        // a2.uuid
        console.log(a2.uuid);
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
