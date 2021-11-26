const { getPerson, updPerson, delPerson, addPerson } = require('./personAction');

function setResponse(code = 200, mes = "OK", body = "") {
    return { resStatus: code, resMessage: mes, resBody: JSON.stringify(body) };

}
module.exports = function router(reqBody, method, path, id) {

    if ((path != 'person') || (id == '')) {
        return setResponse(404, "Not Found", "Path not found");
    }
    if (!id) {

        //TODO check all field of Person object - id, name, age, hobbies
        // check id structure

        switch (method) {
            case 'POST':
                return setResponse(200, "OK", addPerson(reqBody));
                break;

            case 'GET':
                return setResponse(200, "OK", staff.length == 0 ? 'No records' : staff);
                break

            default:
                return setResponse(404, "Bad request", "Unsupported method");
                break;
        }
        // response.write(getPerson());
    }
    else {
        switch (method) {
            case 'GET':
                if (!getPerson(id)) {
                    return setResponse(404, "Not found", `Person ${id} not found`);
                }
                return setResponse(200, "OK", getPerson(id));
                break

            case 'PUT':
                if (!getPerson(id)) {
                    return setResponse(404, "Not found", `Person ${id} not found`);
                }
                return setResponse(200, "OK", updPerson(id, reqBody));
                break;

            case 'DELETE':
                // setResponse(response, `deleted= ${id}`);
                delPerson(id)
                return setResponse(204, "OK", `Person ${id} deleted`);
                break;

            default:
                return setResponse(404, "Bad request", "Unsupported method");
                break;
        }
    }
    return
}