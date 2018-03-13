function PersinQuery() {
    const wes = {first: "Wes", last: "Higbee"};
    const pax = {first: "Pax", last: "Higbee"};
    const jonathan = {first: "Jonathan", last: "Higbee"};

    let theNextRecord = wes;
    this.next = function() {
        // return wes;
        // return theNextRecord;
        switch(theNextRecord) {
            case wes:
                theNextRecord = pax;
                return {value: wes, done: false};
            case pax:
                theNextRecord = jonathan;
                return {value: pax, done: false};
            case jonathan:
                theNextRecord = undefined;
                return {value: jonathan, done: false};
        }
        return {done: true};
    }
}

const query = new PersinQuery();

console.log(query.next());
console.log(query.next());
console.log(query.next());
console.log(query.next());