const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    console.log('server work');
    let urlRequest = url.parse(request.url, true);

    const [path, id] = urlRequest.path.split("/").splice(1);
    console.log(path, id);

    if (!path) {
        if (request.method == 'GET') {
            // -> GET status OK
            sendResponse(response, "usual GET");
            return
        }
        else {
            sendResponse(response, "bad request", 404);
            return
        }
    }

    if (path === "persons") {
        if (!id) {
            sendResponse(response, "GET all persons");
        }
        else {
            sendResponse(response, `GET person ID= ${id}`);
        }
        return
    }
    else {
        //unknown path
        sendResponse(response, `not found`, 404);
        return
    }
    if (request.method == 'GET') {
        // GET -> получить обработать
        // console.log(urlRequest); // ! GET Params
        // console.log(urlRequest.query.test); // ! GET Params
        response.end(urlRequest.query.test);
    }

    if (request.method == 'PUT' || request.method == 'POST') {
        let body = getRequestBody(request);
    }

    if (request.method == 'DELETE') {
    }
}).listen(3000);

function getRequestBody(request) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        console.log(body);
        response.end('ok');
    });

}

function sendResponse(res, message = '', status = 200) {
    console.log(message);
    res.writeHead(status)
    res.end(message);

}