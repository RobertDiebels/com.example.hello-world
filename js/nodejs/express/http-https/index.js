const Https = require("https");
const Fs = require("fs");
const Express = require("express");
const Helmet = require("helmet");

const keyAbsolutePath = (process.env.KEY_ABSOLUTE_PATH)? process.env.KEY_ABSOLUTE_PATH : "/tls/tls.key";
const certificateAbsolutePath = (process.env.CERTIFICATE_ABSOLUTE_PATH)? process.env.CERTIFICATE_ABSOLUTE_PATH : "/tls/tls.cert";

const options = {
  key: Fs.readFileSync(keyAbsolutePath),
  cert: Fs.readFileSync(certificateAbsolutePath)
};

const application = Express();
application.use(Helmet());

application.use((req, res) => {
  res.writeHead(200);
  res.end("Hello (HTTP & HTTPS) world!\n");
});

const httpPort = (process.env.HTTP_PORT) ? parseInt(process.env.HTTP_PORT) : 80;
const httpsPort = (process.env.HTTPS_PORT) ? parseInt(process.env.HTTPS_PORT) : 443;
const hostName = (process.env.HOST_NAME) ? process.env.HOST_NAME: "0.0.0.0"

application.listen(httpPort, hostName);
console.log(`HTTP listening on: ${hostName}:${httpPort}`);

Https.createServer(options, application).listen(httpsPort, hostName);
console.log(`HTTPS listening on: ${hostName}:${httpsPort}`);