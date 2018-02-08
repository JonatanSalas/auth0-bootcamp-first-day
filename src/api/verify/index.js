const { Router } = require("express");

const owasp = require('owasp-password-strength-test');

const Logger = require("../../logger");

const router = new Router();

const strength = {
    STRONG: 'strong',
    WEAK: 'weak',
};

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
    res.json({
        result: verification.strong ? strength.STRONG : strength.WEAK,
        error: verification.errors,
    });
});

module.exports = router;
