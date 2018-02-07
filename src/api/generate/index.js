const { Router } = require("express");

const Logger = require("../../logger");

const router = new Router();

router.get("/password/generate", (req, res) => {
    Logger.log('> Controller - Password generation');

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ value: "generated password" });
});

module.exports = router;