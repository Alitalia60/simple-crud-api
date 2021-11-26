const { getPerson, updatePerson, delPerson, addPerson } = require('./personAction');

module.exports = function router(reqBody, method, path, id) {


    if (path != 'persons') {
        console.log(1);
        return setResponse(404, "Not Found", "Path not found");
    }
    if (!id) {
        switch (method) {
            case 'POST':
                return setResponse(200, "OK", JSON.stringify(addPerson(reqBody)));
                break;

            case 'GET':
                return setResponse(200, "OK", JSON.stringify(staff));
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
                if (!getPerson(id)) {
                    console.log('Not found');
                    return setResponse(404, "Not found", JSON.stringify(`Person ${id} not found`));
                }
                return setResponse(200, "OK", JSON.stringify(getPerson(id)));
                break

            case 'PUT':
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

function setResponse(code = 200, mes = "OK", body = "") {
    let rsp = { resStatus: code, resMessage: mes, resBody: body };
    // console.log(rsp);
    return rsp

}