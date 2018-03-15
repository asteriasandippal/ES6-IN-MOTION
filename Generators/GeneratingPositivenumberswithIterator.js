function* oneTwoThree() {
    yield 1;
    yield 2;
    yield 3;
}

const generatorObject = oneTwoThree();
console.log(generatorObject);

const iterator = generatorObject[Symbol.iterator]();
console.log(generatorObject === iterator);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());