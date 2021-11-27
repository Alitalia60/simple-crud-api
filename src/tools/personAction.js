const Person = require('../classes/Person')

function checkStructure(reqBody) {
    let checkResult = true;
    const correctStrucrure = ["name", "age", "hobbies"];
    let reqBodyToObject = JSON.parse(reqBody);
    correctStrucrure.forEach(key => {
        if (!reqBodyToObject[key]) {
            checkResult = false
        }
    })
    return checkResult
}

function isExistPersById(id) {
    return staff.find((item) => item.id == id)
}

function getPersonById(id) {
    return staff.find((item) => item.id == id)
}

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
    staff.splice(staff.indexOf(getPersonById(id)), 1)
}

function updPerson(id, jsonPerson) {
    getPersonById(id).updatePerson(jsonPerson);
}

module.exports = {
    addPerson,
    getPersonById,
    delPerson,
    updPerson,
    isExistPersById,
    checkStructure
}
