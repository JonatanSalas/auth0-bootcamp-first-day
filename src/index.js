const Express = require('express');

const app = new Express();

app.listen(8080, (err) => {
    if (err) {
        console.error("> Server start failed", err);
    }

    console.info("> Server is at http://localhost:8080");
});