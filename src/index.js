const http = require('http');
const { router } = require("./tools/router")
const { getResponseSet } = require("./tools/oper")
const dotenv = require('dotenv');
const errorHttp = require('../src/classes/Errors');

const envParsed = dotenv.config().parsed;
if (envParsed.error) {
    throw envParsed.error
}
const host = envParsed.HOST || 'localhost';
const port = envParsed.PORT || 3000;

exports.global = staff = [];

const server = http.createServer();
server.listen(port, () => console.log('server is running on port', port));
server.on('request', reqHandler);

function reqHandler(request, response) {
    let { url, method, headers } = request;

    reqBody = [];
    request.on('error', (err) => console.log(err));
    request.on('data', (chunk) => reqBody.push(chunk));
    request.on('end', () => {
        reqBody = Buffer.concat(reqBody).toString();
        router(url, method);
        let { resStatus, resMessage, resBody } = getResponseSet();
        response.on('error', (err) => {
            throw new errorHttp(500,)
        });
        response.writeHead(resStatus, resMessage, { 'Content-Type': 'application/json' })
        response.write(resBody);
        response.end();
    });

}

