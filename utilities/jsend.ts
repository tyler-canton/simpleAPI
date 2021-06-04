/**** 
 * JSEND SPECIFICTATION GUIDE LINES
 * SUCCESS - { statusCode, data }
 * FAIL - { statusCode, data } 	
 * ERROR - { statusCode, message, code, data } 
 ****/

const to = require('await-to-js').default;
const pe = require('parse-error');

export const ato = async (promise: any) => {
    let err, res;
    [err, res] = await to(promise);
    if (err) return [pe(err)];
    return [null, res];
};

export const ReE = (res: any, err: any, code: any) => { // Error Web Response
    let send_data = {
        statusCode: code,
        data: err
    };
    return res.json(send_data);
};

export const ReS = (res: any, data: {}, code: any) => {
    let send_data = {
        statusCode: code,
        data
    };
    return res.json(send_data)
};

export const TE = (err_message: string, log: any) => {
    if (log === true) {
        console.error(err_message);
    }
    throw new Error(err_message);
};

