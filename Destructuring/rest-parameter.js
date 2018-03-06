function computeTax(taxRate) {
    const [, ...prices] = arguments;
    return prices.map(p => p * taxRate);
}

console.log(computeTax(0.07, 1.00, 2.00, 3.00));

function computeTax1(taxRate, ...prices) {
    return prices.map(p => p * taxRate);
}

console.log(computeTax1(0.07, 1.00, 2.00, 3.00));
