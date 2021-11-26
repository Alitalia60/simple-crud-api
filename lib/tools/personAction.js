const Person = require('../classes/Person')

function findPersonById(id) {
    return staff.find((item) => item.id == id)
};

function addPerson(jsonPerson) {
    const newPerson = new Person(jsonPerson);
    staff.push(newPerson);
    return newPerson;
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
        return staff
    }
    else {
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
