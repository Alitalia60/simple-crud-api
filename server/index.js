//server

const dotenv = require('dotenv');
const http = require("http");
const { futimes } = require('fs');

const { addPerson, updatePerson } = require('./lib/tools/tools')
const { env } = require('process');
const { getPerson } = require('./lib/tools/tools');

const envParsed = dotenv.config().parsed;
if (envParsed.error) {
    throw envParsed.error
}
const host = envParsed.HOST || 'localhost';
const port = envParsed.PORT || 3000;

// process.exit(0)

/************/

const requestListener = function (req, res) {
    // res.setHeader("Content-Type", "application/json");
    // res.writeHead(200);
    // res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`server running on port ${port}`);
})

server.on('request', (req, res) => {

    switch (req.method) {
        case 'GET':
            handlerGET(req, res)
            break;
        case 'POST':
            handlerPOST()
            break;
        case 'PUT':
            handlerPUT()
            break;
        case 'DELETE':
            handlerDEL()
            break;
        default:
            break;
    }
})
// console.log(process.env);

function handlerGET(req, res) {
    console.log('***GET recieved');
    if (req.url == '/persons') {
        let arrUrl = req.url.split('/');
        if (arrUrl[1]) {
            let onePerson = getPerson(arrUrl[1])
            if (onePerson) {
                res.statusCode = '200';
                res.statusMessage = "OK"
                res.end(onePerson)
            }
            else {
                res.statusMessage = "Not found"
                res.statusCode = '404'
            }
        }
        else
        {
            res.statusCode = '200';
            res.statusMessage = "OK"
            res.end(String(staff))

        }
    }
    res.write(String(staff))

}
function handlerPUT(req, res) {
    console.log('***PUT recieved');
    console.log(req.headers.message);

    
}
function handlerPOST() {
    console.log('***POST recieved');
}
function handlerDEL() {
    console.log('***DELETE recieved');
}