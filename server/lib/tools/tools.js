
const Person = require('../classes/Person')
exports.global = staff = [];

function findPersonById(id) {
    // staff.find((item) => item.id= id)
    return staff.find((item) => item.name == id)
};

function addPerson(namePerson, agePerson, hobbiesPerson) {
    staff.push(new Person(namePerson, agePerson, hobbiesPerson));
    console.log(`added: ${namePerson}, ${agePerson}, ${hobbiesPerson}`);
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
    if (id) {
        staff.forEach(element => {
            // console.log(element.describePerson());
            return element.describePerson();
        });
    }
    else {
        console.log(findPersonById(id).describePerson());
    }
}

function updatePerson(idб ) {
    if (findPersonById(id)) {
        
    }
    
}

module.exports = {addPerson, getPerson, delPerson, updatePerson, findPersonById}
