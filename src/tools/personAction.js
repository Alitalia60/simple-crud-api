const Person = require('../classes/Person')

function findPersonById(id) {
    return staff.find((item) => item.id == id)
};

function addPerson(jsonPerson) {
    try {
        const newPerson = new Person(jsonPerson);
        staff.push(newPerson);
        return newPerson;

    } catch (error) {

        return undefined
    }
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

function updPerson(id, jsonPersony) {
    let pers = findPersonById(id);
    if (!pers) {
        return undefined;
    }
    else {
        pers.updatePerson(jsonPerson);
        return pers
    }
}

module.exports = { addPerson, getPerson, delPerson, updPerson, findPersonById }
