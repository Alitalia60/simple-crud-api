const http = require("http");
const handler = require("../handler/handlers")
const { env } = require('process');
const dotenv = require('dotenv');
const { url } = require("inspector");
const { addPerson,
    getPerson,
    delPerson,
    updatePerson,
    findPersonById } = require("../tools/tools")

const envParsed = dotenv.config().parsed;
if (envParsed.error) {
    throw envParsed.error
}
const host = envParsed.HOST || 'localhost';
const port = envParsed.PORT || 3000;

const server = http.createServer(listener).listen(port, host, () => {
    console.log('server is running on port:', port);
});

// server.on('request', (req, res) => {
// handler(req, res)
// })


function listener(req, res) {
    let [url, id] = req.url.split("/").splice(1);
    if (url == 'person') {
        switch (req.method) {
            case "GET":
                res.writeHead(200)
                res.end("GET method")
                break;
            case "PUT":
                console.log(req.data);

                res.writeHead(200)
                res.write(addPerson())
                res.end("PUT method")
                break;
            case "POST":
                res.writeHead(200)
                res.end("get method")
                break;
            case "DELETE":
                res.writeHead(200)
                res.end("DELETE method")
                break;
            default:
                res.writeHead(404)
                res.end("not supported method by API")
                break;

                break;
        }
    }
    else {
        res.writeHead(404);
        res.end(`${url} path not exist`);
    }

}

