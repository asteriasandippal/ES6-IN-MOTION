const people = [
    {
        first: "Bob",
        last: "DOE"
    },
    {
        first: "pax",
        last: "HigBEe"
    },
    {
        first: "Anne",
        last: "Jostol"
    }
];

const names = people.map(p => upper`Hi ${p.last}, ${p.first}`);

function upper(strings, ...cooked) {
    let result = [];
    for (let index = 0; index < strings.length; index++) {
        result.push(strings[index]);
        result.push((cooked[index] || "").toUpperCase());        
    }

    return result.join("");
}

console.log(names);
