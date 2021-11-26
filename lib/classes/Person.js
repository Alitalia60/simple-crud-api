const { v4: uuidv4 } = require('uuid');

module.exports = class Person {
    constructor(jsonPerson) {
        const objPerson = JSON.parse(jsonPerson);
        this.id = uuidv4();
        this.name = objPerson.name;
        this.age = objPerson.age;
        this.hobbies = objPerson.hobbies;
    }

    // updatePerson(newName = this.name, newAge = this.age, newHobbies = this.hobbies) {
    updatePerson(jsonPerson) {
        const objPerson = JSON.parse(jsonPerson);
        this.name = objPerson.name;
        this.age = objPerson.age;
        this.hobbies = objPerson.Hobbies;
    }

};