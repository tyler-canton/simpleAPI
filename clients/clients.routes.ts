import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import ClientController from '../controllers/client.controller';

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application, router: express.IRouter) {
        super(app, 'ClientRoutes', router);

    }
    configureRoutes() {

        this.router.route('/v1/parse')
        .get((req,res)=>res.send('Hellow'))
        .post(ClientController.vOneparse);

        this.router.post('/v2/parse', ClientController.vTwoparse);

        return this.app;
    }
}