const { isExistPersById,
    getPersonById,
    addPerson,
    delPerson,
    updPerson,
    checkStructure } = require("./personAction")

let resSet = {}
function setResponseSet(code = 200, mes = "OK", body = "") {
    resSet = { resStatus: code, resMessage: mes, resBody: JSON.stringify(body) };
}

function getResponseSet() { return resSet }

function postHandl(id = undefined) {

    if (checkStructure(reqBody)) {
        try {
            let newPerson = addPerson(reqBody);
            if (isExistPersById(newPerson.id)) {
                setResponseSet(200, "OK", newPerson);
            }
            else {
                setResponseSet(500, "Server error", 'oper 1. New person is not created');
            }
        } catch (error) {
            setResponseSet(500, "Server error", 'oper 2. Can not store record');
        }
    }
    else {
        setResponseSet(400, "Bad request", 'Structure person not valid, expect: "name, age, hobbies" ');
    }
};

function putHandl(id) {
    updPerson(id, reqBody);
    if (isExistPersById(id)) {
        setResponseSet(200, "OK", getPersonById(id));
    }
    else {
        setResponseSet(500, "Server error", 'oper 3. Person is not updated');
    }
};

function delHandl(id) {
    delPerson(id);
    if (!isExistPersById(id)) {
        setResponseSet(200, "OK", 'Person deleted');
    }
    else {
        setResponseSet(500, "Server error", "oper 4. Can't delete person");
    }
};

function getHandl(id, body = '') {
    if (id) {
        setResponseSet(200, "OK", staff.length == 0 ? 'oper 5.There is no records' : getPersonById(id));
    }
    else {
        setResponseSet(200, "OK", staff.length == 0 ? 'oper 6.There is no records' : staff);
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