let message = "Hello";

function sayHello(language) {
    if (language == "german") {
        let message = "hallo";
        return message;
    } else if (language == "spanish"){
        let message = "hala";
        return message;
    }

    return message;

}

console.log(sayHello("spanish"));
console.log(sayHello("german"));
console.log(sayHello());
