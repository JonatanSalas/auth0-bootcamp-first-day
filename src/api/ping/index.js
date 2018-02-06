const { Router } = require("express");

const Logger = require("../../logger");

const router = new Router();

router.get("/", (req, res) => {
    Logger.info(`> Router - GET Request at http://${process.env.HOST}:${process.env.PORT}/`);

    Logger.log(`> Controller - Pinging!`);

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ ping: "pong" });
});

module.exports = router;