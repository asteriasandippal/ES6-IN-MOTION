const data = 'https://jsonplaceholder.eewtypicode.com/posts/1/comments';
// const promise = fetch(data);
// promise.then(function(res) {
//     const parsePromise = res.json();
//     parsePromise.then(function (museums) {
//         console.log(museums);
//     });
// });

// const promise = fetch(data)
// .then(res => res.json())
// .then(museums =>console.log(museums));

// const promise = fetch(data);
// promise.then(function(res) {
//             const parsePromise = res.json();
//             return parsePromise;
//         })
//         .then(function (museums) {
//             console.log(museums);
//         });

// fetch(data)
//     .then(res => res.json())
//     .then(mus => console.log(mus))
//     .catch(error => console.log("Oh no", error));

// fetch(data)
// .then(res => res.json())
// .catch(function(e) {
//     console.log("Triped")
//     return [];
// })
// .then(mus => console.log(mus));

fetch(data)
    .then(res => res.json())
    .then(mus => console.log(mus))
    .catch(error => console.log("Oh no", error));