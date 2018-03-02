// function setupApp() {
//     this.version = "5.1.2";
//     this.createBy = "Wes";

//     document.addEventListener("click", function() {
//         console.log("Hi, Welcome to version:" 
//                     + this.version
//                     + " hand crafted by "
//                     + this.createBy);
//     });

// }

function setupApp() {
    let self = this;
    self.version = "5.1.2";
    self.createBy = "Wes";

    document.addEventListener("click", function() {
        console.log("Hi, Welcome to version:" 
                    + self.version
                    + " hand crafted by "
                    + self.createBy);
    });

}

setupApp();