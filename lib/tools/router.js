const { getPerson, updatePerson, delPerson, addPerson } = require('./lib/tools/personAction');

module.exports = function router(response, method, path, id) {


    if (!path || path != 'persons') {
        if (path != 'persons') {
            console.log(1);
            return setResponse(404, "Not Found");
        }
        if (method == 'GET') {
            console.log(2);
            return setResponse();
        }
        else {
            console.log(3);
            return setResponse(404, "Not Found");
        }
    }
    if (!id) {
        switch (method) {
            case 'PUT':
                console.log('attemp to add person');
                console.log(addPerson());
                return setResponse();
                break;

            case 'GET':
                console.log(getPerson());
                return setResponse();
                // setResponse(response, "GET all persons");
                return 200;
                break

            default:
                return setResponse(404, "No ID passed");
                break;
        }
        // response.write(getPerson());
    }
    else {
        switch (method) {
            case 'GET':
                console.log(getPerson(id));
                return setResponse();
                // setResponse(response, `GET person ID= ${id}`);
                break

            case 'POST':
                return setResponse();
                // response.write(updatePerson(id, getRequestBody(request)));
                // setResponse(response, `POST person ID= ${id}`);
                break;

            case 'DELETE':
                // setResponse(response, `deleted= ${id}`);
                delPerson(id)
                return setResponse();
                break;

            default:

                return setResponse(400, "error");
                break;
        }
    }
    return
}

function setResponse(code = 200, mes = "OK") {
    return { operStatus: code, operMessage: mes }

}