const { Router } = require("express");

const Logger = require("../../logger");

const router = new Router();

router.get("/password/compare", (req, res) => {
    Logger.log('> Controller - Password comparison');

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ result: "true" });
});

module.exports = router;