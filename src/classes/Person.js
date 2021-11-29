const { v4: uuidv4 } = require('uuid');

module.exports = class Person {
    constructor(jsonPerson) {
        const objPerson = JSON.parse(jsonPerson);
        this.id = uuidv4();
        this.name = objPerson.name;
        this.age = objPerson.age;
        this.hobbies = objPerson.hobbies;
    }

    updatePerson(jsonPerson) {
        const objPerson = JSON.parse(jsonPerson);
        for (const key in objPerson) {
            if (Object.hasOwnProperty.call(this, key)) {
                this[key] = objPerson[key]
            }
        }
    }

};