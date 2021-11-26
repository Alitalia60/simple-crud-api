const http = require('http');

const router = require("./lib/tools/router")

const dotenv = require('dotenv');
const { checkPrime } = require('crypto');
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
    // response.end("response = OK");
    let { url, method, headers } = request;


    const [path, id] = url.split("/").splice(1);
    reqBody = [];
    request.on('error', (err) => console.log(err));
    request.on('data', (chunk) => reqBody.push(chunk));
    request.on('end', () => {
        reqBody = Buffer.concat(reqBody).toString();
        let { resStatus, resMessage, resBody } = router(reqBody, method, path, id);
        response.on('error', (err) => {
            console.error(err);
        });
        response.writeHead(resStatus, resMessage, { 'Content-Type': 'application/json' })
        response.write(resBody);
        response.end();
    });

    // console.log("staff=", staff);
}

