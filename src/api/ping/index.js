const { Router } = require("express");

const Logger = require("../../logger");

const router = new Router();

router.get("/ping", (req, res) => {
    Logger.info(`> Router - GET Request at port 3000`);

    Logger.log(`> Controller - Pinging!`);

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ ping: "pong" });
});

module.exports = router;
