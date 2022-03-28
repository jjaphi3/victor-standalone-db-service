import express from 'express';

export class Utils {
    
    //
    // set object ingnoring the case of the parameters
    public static setObjectIgnoreCase(from: object, to: object): object {
        const fromKeys = Object.keys(from);
        for(const toKey of Object.keys(to)) {
            const key = fromKeys.find(k => k.toLowerCase() == toKey.toLowerCase());
            if (key) {
                const a = (to as unknown); 
                const b = (from as unknown); 
                (a as Record<string, unknown>)[toKey] = (b as Record<string, unknown>)[key];
            }
        }
        return to;
    }

    //
    // set object ingnoring the case of the parameters
    public static setObjectFromRequestBody(req: express.Request, to: object): object {
        let obj = req.body;
        if (obj instanceof String) {
            const params = new URLSearchParams(req.body);
            obj = Utils.fromParams(params);
        }
        return Utils.setObjectIgnoreCase(obj, to);
    }

    //
    // the Content-Type is always application/x-www-form-urlencoded; confusing the 
    // express body parser
    public static getObjectFromFormData(req: express.Request): object | undefined {
        const formData: object =  req.body as object;
        const keys = Object.keys(formData);
        if (keys.length > 0) {
            return JSON.parse(keys[0]);
        }
        return undefined;
    }

    //
    // object from url params
    public static fromParams(from: URLSearchParams): object { 
        const entries = [...from.entries()];
        return entries.reduce((previous, current) => {
            console.log(previous);
            console.log(current);
            const previousRecord = previous as Record<string, unknown>;
            const [key, value] = current;
            if (Object.keys(previous).find(k => k == key)) {
                if(Array.isArray(previousRecord[key])) {
                    const previousRecordArray = previous as Record<string, string[]>;
                    previousRecordArray[key] = [...previousRecordArray[key], value];
                  } 
                  else {
                    previousRecord[key] = [previousRecord[key], value];
                  }
            }
            else {
                previousRecord[key] = value;
            }
            return previous;
        }, {});
    }
}