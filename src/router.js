const { Router } = require("express");

const pingRouter = require("./api/ping");
const encryptRouter = require("./api/encrypt");
const generateRouter = require("./api/generate");
const verifyRouter = require("./api/verify");
const compareRouter = require("./api/compare");

const appRouter = new Router();

appRouter.use(pingRouter);
appRouter.use(encryptRouter);
appRouter.use(generateRouter);
appRouter.use(verifyRouter);
appRouter.use(compareRouter);

module.exports = appRouter;
