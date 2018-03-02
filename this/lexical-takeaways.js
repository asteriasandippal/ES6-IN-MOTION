function setupApp() {
    this.version = "5.1.2";
    this.createdBy = "Wes";

    document.addEventListener("click", () => {
        console.log("Hi, Welcome to version:" 
                    + this.version
                    + " hand crafted by "
                    + this.createdBy);
    });

    document.addEventListener("click", (function() {
        console.log("Hi, Welcome to version:" 
                    + this.version
                    + " hand crafted by "
                    + this.createdBy);
    }).bind(this));

}

setupApp();
