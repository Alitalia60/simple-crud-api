const Person = require('../classes/Person')
exports.global = staff = [];

function findPersonById(id) {
    return staff.find((item) => item.name == id)
};

function addPerson(jsonPerson) {
    staff.push(new Person(jsonPerson));
}

function delPerson(id) {
    let fp = findPersonById(id);
    if (fp) {
        staff.splice(staff.indexOf(fp), 1)
    }
    else {
        console.log(`not found ${id}. Error deleting`);
    }
}

function getPerson(id = undefined) {
    if (!id) {
        if (staff.length == 0) {
            return {}
        }
        return JSON.stringify(staff)
    }
    else {
        console.log(findPersonById(id));
        return findPersonById(id);
    }
}

function updatePerson(id, jsonPerson) {
    let pers = findPersonById(id);
    if (!pers) {
        console.log("error updating. Not found id=", id);
    }
    else {
        pers.updatePerson(jsonPerson)
    }
}

module.exports = { addPerson, getPerson, delPerson, updatePerson, findPersonById }
