const Express = require('express');

const router = require("./router");

const app = new Express();

app.use(router);

app.listen(8080, (err) => {
    if (err) {
        console.error("> Server start failed", err);
    }

    console.info("> Server is at http://localhost:8080");
});