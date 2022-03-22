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
        const params = new URLSearchParams(req.body);
        const loginObject = Object.fromEntries(params);
        return Utils.setObjectIgnoreCase(loginObject, to);
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
}