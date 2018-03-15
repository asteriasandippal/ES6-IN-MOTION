function* positiveNumberUpTo(stop) {
    let current = 1;
    while(current <= stop)
        yield current++;
}

const [...numbers] = positiveNumberUpTo(10);

console.log(numbers);
