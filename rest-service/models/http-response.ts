import { StatusCodes, getReasonPhrase  } from 'http-status-codes';

export class HttpResponse {

    constructor(
        public status: StatusCodes, 
        public body: unknown = null) {
            if (this.body == null) {
                this.body = getReasonPhrase(this.status);
            }
    }
}