const number = [1, 2, 3, 4, 5, 6, 9];
const number1 = undefined;
const number2 = [1, 2, undefined, 4, 5, 6, 9];

const prices = [1.10, 2.32, 3.68, 4.90];
const taxRate = 0.07;

const orders = [
    {desc: "Pencils", price: 1.50, quantity: 2},
    {desc: "Notepads", price: 6.00, quantity: 3},
    {desc: "Paperclips", price: 4.50}
];

function sum(num = []) {
    // num = num || [];
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += num[index] || 0;
    }
    return sum;
}

// const costs = orders.map(order => order.price * order.quantity);
// const costs = orders.map(({price, quantity}) => price * quantity);
const costs = orders.map(({price, quantity = 1}) => price * quantity);

console.log(costs);
