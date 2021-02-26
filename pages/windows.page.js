const Page = require("./page");

class Windows extends Page {

    get title() { return $('.example h3') }
    get link() { return $('.example a') }

    getTitle() { 
        this.title.waitForDisplayed();
        return this.title.getText();
    }

    clickLink() {
        this.link.waitForDisplayed();
        this.link.click();
    }

    open() {
        return super.open("windows");
    }
   
}
module.exports = new Windows();