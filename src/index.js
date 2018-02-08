const Express = require('express');

const router = require("./router");
const Logger = require("./logger");

const app = new Express();

app.use("/api", router);

app.listen(3000, (err) => {
    if (err) {
        Logger.error("> Server start failed", err);
    }

    Logger.info("> Server is running at port 3000");
});
