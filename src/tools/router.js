const { postHandl, putHandl, getHandl, delHandl, setResponseSet } = require("./oper.js");
const { isExistPersById } = require("../tools/personAction")
const ErrorHttp = require("./errors");
const statusCode = require("./statusCodes.json")

function router(url, method) {
    const routHandler = {
        'GET': getHandl,
        'POST': postHandl,
        'PUT': putHandl,
        'DELETE': delHandl
    }

    const [path, id] = url.split("/").splice(1);
    if ((path != 'person') || (id == '')) {

        setResponseSet(400, `Path ${url} not valid`);
        // throw new ErrorHttp(400, `Path ${url} not valid`)
        return
    }

    if ((id == undefined) && ((method == 'GET') || (method == 'POST'))) {
        routHandler[method]()
        return
    }

    if (id) {
        if (method != 'POST') {
            if (isExistPersById(id)) {
                routHandler[method](id)
            }
            else {
                setResponseSet(404, `Person with id=${id} not found`);
            }
        }
        else {
            setResponseSet(404, `Person Id  not expected`);
        }
    }
}

module.exports = { router }
