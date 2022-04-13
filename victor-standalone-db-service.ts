import { ApiService } from './rest-service/api-service';
import { Login } from './rest-service/models/login';
import querystring from 'querystring';
//var querystring = require('querystring');
import { version } from './package.json';
import { Utils } from './rest-service/utils';
import { Criteria } from './rest-service/models/criteria';
import { ACCEPTED } from 'http-status-codes';
import { stringify } from 'uuid';
import * as NodeSqlParser from 'node-sql-parser';
import { ObjectsController } from './rest-service/controllers/objects-controller';
import { GenericController } from './rest-service/controllers/generic-controller';
import { ServiceManager } from './service-manager';
import axios, { AxiosRequestConfig } from 'axios';




export class VictorStandaloneDbService {

    public static test() {

        console.log(version);
        console.log(process.pid);

        // const config: AxiosRequestConfig = { };
        // config.
        // const client = axios.create({ baseURL: 'http://localhost:4000'});
        // client.get('/appMode')
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });

        const login = { 
            username: 'user',
            password: 'password',
            clientName: 'clientName',
            customKey: 'customKey',
            clientId: 'clientId',
            clientVersion: 'clientVersion',
            culture: 'culture',
        };
        const data1 = querystring.stringify(login);
        console.log(data1);
        // const searchParams = new URLSearchParams(login);
        // const a1 = searchParams.toString();
        // const searchParams2 = new URLSearchParams(a1);
        // const a2 = Object.fromEntries(searchParams2) as Login;
        // a2.uuid      
        // console.log(a2.uuid);

        // const args = ['String_4', 2]; //, '5000', 'true'];
        const criteriaIn = {
            TypeFullName: 'Test.Table',
            DisplayProperties: '',
            WhereClause: 'String = ? AND Boolean = ?', // AND Object = ? AND ID = ?',
            Arguments: ['String_5', 'false'],
            PageSize: 10,
            PageNumber: 1,
            LoadCollection: false,
            CountOnly: false,
            Sort: ''
        };
        //const data = querystring.stringify(criteriaIn);

        
        type ArgumentValuesParams = {
            ArgumentValues: string;
        };

        const body = "ArgumentValues=%5B%22PartitionKey%22%2C%22SoftwareHouse.CrossFire.Common.Objects.XFEvent%22%5D";

        const methodArgsParams = new URLSearchParams(body);
        const methodArgsValues = Utils.fromParams(methodArgsParams) as ArgumentValuesParams;
        

        // methodArgsValues.ArgumentValues = methodArgsValues.ArgumentValues?.replaceAll('\\r\\n', '');
        let args = {};
        try {
            args = JSON.parse(methodArgsValues.ArgumentValues);
            const criteria2 = Utils.setObjectIgnoreCase(args, new Criteria()) as Criteria;
            // GenericController.instance.executeCrossfireMethod('SoftwareHouse.CrossFire.Common.Shared.IEnhancedDataAccessService', 'FindCollection', args);
        }
        catch (e) {
            // 
        }

        
        const data = "ArgumentValues=%7B%22className%22%3A%22SoftwareHouse.CrossFire.Common.Objects.ApplicationServer%22%2C%22whereClause%22%3A%22%22%2C%22args%22%3Anull%2C%22propertyList%22%3A%5B%22ObjectID%22%2C%22Name%22%2C%22IPAddress%22%2C%22Status%22%5D%2C%22sortColumnName%22%3A%22Name%22%2C%22pageSize%22%3A200%2C%22pageNumber%22%3A1%2C%22explicitPropertyList%22%3Anull%7D";
        
        const params = new URLSearchParams(data);

        const obj = Utils.fromParams(params);
        const criteria = Utils.setObjectIgnoreCase(obj, new Criteria()) as Criteria;

        const result = ObjectsController.instance.findObjsWithCriteriaFilter(criteria);
        console.log(JSON.stringify(result.body));

        let where = criteria.whereClause;
        for (const arg of criteria.Arguments) {
            where = where.replace('?', `'${arg}'`);
        }
        const parser = new NodeSqlParser.Parser();
        try {
            const ast = parser.parse(`SELECT * FROM _table_ WHERE ${where}`);
            // const ast = parser.parse('SELECT * FROM _table_ WHERE WindowsPrincipal = \'VM-INGRTN-16-15\\TEST\' AND Object = \'5000\'');

            console.log(ast);
        }
        catch (e) {
            console.log(e);
        }

    }

    public static main() {
        
        const apiService = ApiService.startServer(3000);
        if (apiService != null) {
            console.log(apiService);
        }
        const serverManager = ServiceManager.instance;
        serverManager.start();

    }
}

VictorStandaloneDbService.test();
VictorStandaloneDbService.main();
