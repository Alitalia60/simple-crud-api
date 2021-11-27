class Person {
    constructor(jsBody) {
        let Ob = JSON.parse(jsBody);
        this.name = Ob.name;
        this.age = Ob.age;
    }

    updPerson(jsBody) {

        let Ob = JSON.parse(jsBody);
        for (const key in Ob) {
            if (Object.hasOwnProperty.call(this, key)) {
                this[key] = Ob[key]
            }
        }

    }

    checkStucturePereson(jsBody) {
        let Ob = JSON.parse(jsBody);

        for (const key in this) {
            if (!Ob[key]) {
                // return false;
                console.log("key = ", key, 'not present');

            }
        }

    }
}


// let Andrew = new Person("Andrew", 61);

// console.log(Andrew);
// console.log(Andrew.checkStucture());

let Pete = {
    name: "Pete",
    age: 26
}

let Tom = {
    name: "Tom",
    age1: 27,
}

let jPete = JSON.stringify(Pete);

let newPete = new Person(jPete)

console.log(newPete.checkStucturePereson(JSON.stringify(Tom)));