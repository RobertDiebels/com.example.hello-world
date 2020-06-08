const Express = require("express");

const application = Express();
application.use((req, res) => {
    res.writeHead(200);
    res.end("Hello (HTTP) world!\n");
});

const httpPort = (process.env.HTTP_PORT) ? parseInt(process.env.HTTP_PORT) : 80;
const hostName = (process.env.HOST_NAME) ? process.env.HOST_NAME: "0.0.0.0";

application.listen(httpPort, hostName);
console.log(`HTTP listening on: ${hostName}:${httpPort}`);