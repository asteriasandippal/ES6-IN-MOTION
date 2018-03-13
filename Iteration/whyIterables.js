const orders = [
    {desc: "Penciles", price: 2.34, quantity: 2},
    {desc: "Notepads", price: 7.85, quantity: 5},
    {desc: "paperclips", price: 5.28},    
]

let sum = 0;
for (let index = 0; index < orders.length; index++) {
    const price = orders[index].price;
    const quantity = orders[index].quantity || 1;
    sum += price * quantity;
    
}

console.log(sum);

sum = 0;
for(const order of orders) {
    const quantity = order.quantity || 1;
    sum += order.price * quantity;
}

console.log(sum);

sum = 0;
for(const property in orders) {
    const price = orders[property].price;
    const quantity = orders[property].quantity || 1;
    sum += price * quantity;
}
console.log(sum);
