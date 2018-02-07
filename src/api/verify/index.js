const { Router } = require("express");

const Logger = require("../../logger");

const router = new Router();

router.get("/password/verify", (req, res) => {
    Logger.log('> Controller - Password strength verification');

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ result: "strong" });
});

module.exports = router;