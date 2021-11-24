const { v4: uuidv4 } = require('uuid');

module.exports = class Person {
    constructor(namePerson, agePerson, hobbiesPerson, id = uuidv4()) {
        this.id = id;
        this.name = namePerson;
        this.age = agePerson;
        this.hobbies = hobbiesPerson;
    }

    updatePerson(newName = this.namePerson, newAge = this.agePerson, newHobbies = this.hobbiesPerson) {
        this.name = newName;
        this.age = agePerson;
        this.hobbies = newHobbies;
    }

    describePerson() {
        console.log(`${this.name}, ${this.age}, ${this.hobbies}`);
    }
};