const prices = [1.10, 2.32, 3.68, 4.90];
const taxRate = 0.7;

let priceWithTax = [];

for (let index = 0; index < prices.length; index++) {
    const price = prices[index];
    const tax = price * taxRate;
    priceWithTax.push(price + tax);
}

console.log(priceWithTax);

let priceWithTaxArrow = prices.map(p => p + (p * taxRate));
console.log(priceWithTaxArrow);
