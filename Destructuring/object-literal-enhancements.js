const first = "Wes";
const last = "Higere";

const pet = "cat";

const person = {
    first,
    last,
    favoriteColor: "Blue",
    address: {
        street: "100 Fox lame",
        city: "New York",
        state: "NY"
    },
    fullName() {
        return `Your Full Name: ${this.first} ${this.last}`;
    },
    [pet]: {
        name: "Fluffly"
    }
}
console.log(person);
console.log(person.fullName());
