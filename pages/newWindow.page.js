const Page = require("./page");

class NewWindow extends Page {

    get title() { return $('.example h3') }

    getTitle() {
        this.title.waitForDisplayed();
        return this.title.getText();
    }

    getUrl() {
        return 
    }

    open() {
        return super.open("/windows/new");
    }
}
module.exports = new NewWindow();