import express from 'express';
import { ato, ReE, ReS } from '../utilities/jsend';

const ClientController = {
    vOneparse: async (req: express.Request, res: express.Response) => {

        try {
            const data = req.body.data;
            const propArrTwo = data.split(/[.0+\d](0+)/g);
            const [firstnameA, firstnameB, lastnameA, lastnameB, clientId] = propArrTwo;

            return ReS(res, {
                firstname: `${firstnameA}${firstnameB}`,
                lastname: `${lastnameA}${lastnameB}`,
                clientId: `${clientId}`
            }, 200);

        } catch (error) {
            ReE(res, error, 400);
        }
    },
    vTwoparse: async (req: express.Request, res: express.Response) => {

        try {
            const data = req.body.data;
            const propArrVOne = data.match(/[^0]+(?:00[^0]+)*/g);
            const [firstname, lastname, clientId] = propArrVOne;
            return ReS(res, {
                firstname, lastname, clientId
            }, 201);
        } catch (error) {
            ReE(res, error, 400);
        }
    },

}
export default ClientController;