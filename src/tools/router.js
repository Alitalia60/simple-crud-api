const { postHandl, putHandl, getHandl, delHandl, setResponseSet } = require("./oper.js");
const { isExistPersById } = require("../tools/personAction")
const ErrorHttp = require("../classes/Errors");
const { v4: validate } = require('uuid');


function isValidUUID(uuid) {
    let s = "" + uuid;

    s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
    if (s === null) {
        return false;
    }
    return true;
}


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
        if (!isValidUUID(id)) {
            setResponseSet(400, 'Passed id not valid');
        }
        else {
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
}

module.exports = { router }
