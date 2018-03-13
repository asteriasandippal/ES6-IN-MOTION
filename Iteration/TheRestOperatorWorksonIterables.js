function PersinQuery() {
    const wes = {first: "Wes", last: "Higbee"};
    const pax = {first: "Pax", last: "Higbee"};
    const jonathan = {first: "Jonathan", last: "Higbee"};

    function createIterator() {
        let theNextRecord = wes;
        function next() {
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
        return {next};
    }
    this[Symbol.iterator] = createIterator;
}

const query = (new PersinQuery())[Symbol.iterator]();

console.log(query.next());
console.log(query.next());
console.log(query.next());
console.log(query.next());

for(const record of new PersinQuery()) {
    console.log(record);
}

const [firstRecord, ...rest] = new PersinQuery();
console.log(firstRecord);
console.log(rest);
