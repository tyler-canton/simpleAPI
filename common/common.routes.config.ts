import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;
    router: express.IRouter;
    constructor(app: express.Application, name: string, router: express.IRouter) {
        this.app = app;
        this.name = name;
        this.router = router;
        this.configureRoutes();
        this.app.use('/api', this.router);
        console.log('here abstract');
    }

    getName() {
        return this.name;
    }

    abstract configureRoutes(): express.Application;

}