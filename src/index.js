const Express = require('express');

const router = require("./router");

const app = new Express();

app.use("/api", router);

app.listen(3000, (err) => {
    if (err) {
        console.error("> Server start failed", err);
    }

    console.info("> Server is running at port 3000");
});


// /api/password/compare?hash=&value=
// /api/password/encrypt?value=
// /api/password/verify?value=
// /api/password/generate 