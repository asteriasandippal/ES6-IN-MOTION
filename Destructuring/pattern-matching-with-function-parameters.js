function request({url, method, body}) {
    console.log(url);
    console.log(method);
    console.log(body);    
}
request({url: "http://www.google.co.in", method: "GET"});