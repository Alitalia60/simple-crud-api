module.exports = function handler(req, res) {

    if (req.url === '/person') {
        console.log(req.IncomingMessage);
        switch (req.method) {
            case 'PUT': {

                console.log(req.body);
                res.writeHead(200, { "Content-type": "application/json" });
                res.end("PUT method done");
            }
            case 'POST':
                {

                    console.log(req.body);
                    res.writeHead(200);
                    res.end("POST method done");
                }
            case 'DELETE':
                console.log(req.body);
                res.writeHead(200);
                res.end("DEL method done");
            case 'GET':
                res.writeHead(200);
                res.end("GET method done");
                break;

            default:
                res.writeHead(400);
                res.end("unknown method");
                break;
        }
    }
    else {
        res.writeHead(404);
        res.end("My first server!", req.method);
    }
}
