const { Router } = require("express");

const pingRouter = require("./api/ping");

const appRouter = new Router();

appRouter.use(pingRouter);

module.exports = appRouter;