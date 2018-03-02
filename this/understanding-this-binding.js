const fullName = function () {
    console.log("FullName() Called with", this);
    console.log(this.first + " " + this.last);
}

let person = {
    first: "Sandip",
    last: "pal",
}
person.fullName = fullName;

let cat = {
    first: "Tommy",
    last: "Hitler",
    fullName: fullName,
}

fullName();

person.fullName();
cat.fullName();
