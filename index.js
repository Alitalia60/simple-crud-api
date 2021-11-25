const http = require('http');
const dotenv = require('dotenv');

const router = require("./lib/tools/router")

const envParsed = dotenv.config().parsed;
if (envParsed.error) {
    throw envParsed.error
}
const host = envParsed.HOST || 'localhost';
const port = envParsed.PORT || 3000;

const server = http.createServer();
server.listen(port, () => console.log('server is running on port', port));
server.on('request', reqHandler);


function reqHandler(request, response) {
    // response.end("response = OK");
    let { url, method, headers } = request;
    const [path, id] = url.split("/").splice(1);
    body = [];
    request.on('error', (err) => console.log(err));
    request.on('data', (chunk) => body.push(chunk));
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        let { operStatus, operMessage } = router(response, method, path, id);
        response.on('error', (err) => {
            console.error(err);
        });
        response.writeHead(operStatus, operMessage, { 'Content-Type': 'application/json' })
        response.end();
    });
}

