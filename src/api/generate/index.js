const { Router } = require("express");

const PasswordGenerator = require("generate-password");

const Logger = require("../../logger");

const router = new Router();

router.get("/password/generate", (req, res) => {
    Logger.info('> Controller - Password generation');

    const password = PasswordGenerator.generate({
        length: 12,
        numbers: true,
        symbols: true,
        strict: true,
        exclude: '%;|/?:@&=+$,[](){}^`#\'\"<>',
    });

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.json({ value: password });
});

module.exports = router;
