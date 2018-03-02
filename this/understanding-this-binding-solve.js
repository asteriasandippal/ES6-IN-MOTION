const fullName = function () {
    console.log("FullName() Called with", this);
    console.log(this.first + " " + this.last);
}.bind(person);

const fullName1 = function () {
    console.log("FullName() Called with", this);
    console.log(this.first + " " + this.last);
}.bind({first: 'Rayel'});

let person = {
    first: "Sandip",
    last: "pal",
}
person.fullName = fullName;
person.fullName = fullName1;

let cat = {
    first: "Tommy",
    last: "Hitler",
    fullName: fullName,
}

fullName();
fullName1();

person.fullName();
cat.fullName();
