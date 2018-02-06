const { Router } = require("express");

const pingRouter = require("./api/ping");
const encryptRouter = require("./api/encrypt");

const appRouter = new Router();

appRouter.use(pingRouter);
appRouter.use(encryptRouter);

module.exports = appRouter;