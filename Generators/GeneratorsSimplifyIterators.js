
function positiveNumberUpTo(stop) {
    const iterable = {
        [Symbol.iterator]() {
            let current = 1;
            return {
                next() {
                    if(stop < current) {
                        return {done: true}
                    }
                    return {done: false, value: current++}
                }
            }
        }
    };
    return iterable;
}

const [...numbers] = positiveNumberUpTo(20);

console.log(numbers);
