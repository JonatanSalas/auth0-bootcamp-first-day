const { Router } = require("express");

const Logger = require("../../logger");
const { hashValue } = require("../../utils");

const router = new Router();

router.get("/password/encrypt", async (req, res) => {
    Logger.log('> Controller - Start to encrypt value');

    const hashedValue = await hashValue(req.query.value, 10);

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ hashedValue });
});

module.exports = router;
