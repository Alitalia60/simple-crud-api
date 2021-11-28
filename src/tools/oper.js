const errorHttp = require("./errors");
const { isExistPersById,
    getPersonById,
    addPerson,
    delPerson,
    updPerson,
    checkStructure } = require("./personAction")

const statusCode = require("./statusCodes")

let resSet = {}
function setResponseSet(code, body = "") {
    let mes = statusCode[code];
    resSet = { resStatus: code, resMessage: mes, resBody: JSON.stringify(body) };
}

function getResponseSet() { return resSet }

function postHandl(id = undefined) {

    if (checkStructure(reqBody)) {
        try {
            let newPerson = addPerson(reqBody);
            if (isExistPersById(newPerson.id)) {
                setResponseSet(200, newPerson);
            }
            else {
                setResponseSet(500, 'New person not created');
            }
        } catch (error) {
            setResponseSet(500, "Server can't store record");
        }
    }
    else {
        setResponseSet(400, 'Structure person not valid, expect: "name, age, hobbies" ');
    }
};

function putHandl(id) {
    try {
        updPerson(id, reqBody);
        if (isExistPersById(id)) {
            setResponseSet(201, getPersonById(id));
        }
        else {
            setResponseSet(400, `Person with id=${id} not found`);
            throw new errorHttp(400, 'Person with id=${id} not found')
        }

    } catch (error) {
        setResponseSet(500, `Server can't update person with id=${id}`);

    }
};

function delHandl(id) {
    delPerson(id);
    if (!isExistPersById(id)) {
        setResponseSet(200, 'Person deleted');
    }
    else {
        setResponseSet(500, "Server can't delete person");
    }
};

function getHandl(id, body = '') {
    if (id) {
        setResponseSet(200, staff.length == 0 ? 'There are no records' : getPersonById(id));
    }
    else {
        setResponseSet(200, staff.length == 0 ? 'There are no records' : staff);
    }
};

module.exports = {
    postHandl,
    putHandl,
    getHandl,
    delHandl,
    setResponseSet,
    getResponseSet
}