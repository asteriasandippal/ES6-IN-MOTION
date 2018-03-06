// var maths = (function() {
//     let pi = 3.14159;

//     return {
//         PI: pi
//     };
// }());

var maths;

{
    var pi = 3.14159;

    maths = {
        PI: pi
    };
}

console.log(typeof pi);
console.log(maths.PI);
