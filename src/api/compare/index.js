const { Router } = require("express");

const Logger = require("../../logger");
const { compareHashWithValue } = require("../../utils");

const router = new Router();

router.get("/password/compare", async (req, res) => {
    Logger.log('> Controller - Password comparison');

    const comparisonResult = await compareHashWithValue(req.query.hash, req.query.value);

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ result: comparisonResult });
});

module.exports = router;