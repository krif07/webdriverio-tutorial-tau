const Page = require("./page");

class Secure extends Page {

    get flashSuccess() { return $('#flash') }

    getFlashSuccess() {
        this.flashSuccess.waitForDisplayed();
        return this.flashSuccess.getText().trim().replace(/[\n\t\r]/g,"");
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open("secure");
    }
}
module.exports = new Secure();