console.clear();

function asUsed() {
    const numbers = [1.00, 2.07, 3.05];

    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }

    // const avarage = sum / numbers.length;
    const avarage = sum / numbers.length;
    const result = {
        avarage: avarage,
        sum: sum
    }
    console.log("The average price is: "+ avarage.toFixed(2));

    result.avarage = 1;
}

asUsed();
