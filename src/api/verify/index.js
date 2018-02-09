const { Router } = require("express");

const owasp = require('owasp-password-strength-test');

const Logger = require("../../logger");

const router = new Router();

const passwordStrength = require('./verify.strings').strength;

router.get("/password/verify", (req, res) => {
    Logger.info('> Controller - Password strength verification');

    owasp.config({
        allowPassphrases       : false,
        maxLength              : 128,
        minLength              : 10,
        minOptionalTestsToPass : 4,
    });

    // owasp.tests.required.push(fn) or owasp.tests.optional.push(fn) to add tests

    const verification = owasp.test(req.query.value);

    res.status(200);
    res.setHeader("content-type", "application/json; charset=utf-8");
    console.log(verification.strong ? passwordStrength.STRONG : passwordStrength.WEAK)
    res.json({
        result: verification.strong ? passwordStrength.STRONG : passwordStrength.WEAK,
        error: verification.errors,
    });
});

module.exports = router;
