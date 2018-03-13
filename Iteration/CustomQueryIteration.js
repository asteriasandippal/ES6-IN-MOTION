function PersinQuery() {
    const wes = {first: "Wes", last: "Higbee"};
    const pax = {first: "Pax", last: "Higbee"};
    const jonathan = {first: "Jonathan", last: "Higbee"};

    let theNextRecord = wes;
    this.nextRecord = function() {
        // return wes;
        // return theNextRecord;
        switch(theNextRecord) {
            case wes:
                theNextRecord = pax;
                return wes;
            case pax:
                theNextRecord = jonathan;
                return pax;
            case jonathan:
                theNextRecord = undefined;
                return jonathan; 
        }
        return theNextRecord;
    }
}

const query = new PersinQuery();

console.log(query.nextRecord());
console.log(query.nextRecord());
console.log(query.nextRecord());
console.log(query.nextRecord());