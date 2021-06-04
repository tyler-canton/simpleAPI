import express from 'express';
import { ato, ReE, ReS } from '../utilities/jsend';

const ClientController = {

    vOneparse: async (req: express.Request, res: express.Response) => {
        res.setHeader('Content-Type', 'application/json');
        
        try {
            const data = req.body.data;
            const propArrVOne = data.split("000");
            const [firstname, lastname, clientId] = propArrVOne;
            return ReS(res, {
                firstname, lastname, clientId
            }, 201);
        } catch (error) {
            ReE(res, error, 400);
        }



    },
    vTwoparse: async (req: express.Request, res: express.Response) => {
        res.setHeader('Content-Type', 'application/json');

        const data = req.body.data;
        const propArrVOne = data.replace(/[^a-z0-9]/gi, '').split("000").map((e: any) => e.replace(/0/g, ''));
        const [firstname, lastname, clientId] = propArrVOne;

        return ReS(res, {
            firstname, lastname, clientId
        }, 200);
    }
}
export default ClientController;