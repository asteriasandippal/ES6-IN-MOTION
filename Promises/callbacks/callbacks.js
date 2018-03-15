const data = 'https://jsonplaceholder.typicode.com/posts/1/comments';

    const request = new XMLHttpRequest();
    request.open("GET", data);
    
    request.onload = function() {
        const dataOfData = JSON.parse(this.responseText);
        console.log("xhr", dataOfData);
    };
    
    request.onerror = function() {
        console.errot(error);
    };
    
    request.send();

setTimeout(function() {
    console.log("after delay");
}, 1000);
