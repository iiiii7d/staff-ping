const handler = require('../module-handler')
module.exports = {
    name: 'KeepAlive',
    run: (client) => {
        //configure a web app, so that the repl can be kept alive
        const express = require('express');
        const app = express();
        const port = 3000;
        app.get('/', (req, res) => res.send("e"));

        app.listen(port, () => handler.log(module.exports, `web app listening at http://localhost:${port}`));
    }
}