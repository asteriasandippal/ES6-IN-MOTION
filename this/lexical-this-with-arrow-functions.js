function setupApp() {
    this.version = "5.1.2";
    this.createdBy = "Wes";

    let handler = () => {
        console.log("Hi, Welcome to version:" 
                    + this.version
                    + " hand crafted by "
                    + this.createdBy);
    }
    // handler = handler.bind(this);
    document.addEventListener("click", handler);

}

setupApp();
