const Page = require("./page");

class KeyPress extends Page {

    get target() { return $('#target') }
    get result() { return $('#result') }

    clickTarget() {
        this.target.waitForDisplayed();
        this.target.click();
    }

    /**
     * Send keybord keys to Target
     * @param {String} text The text with the keys
     */
    sendKeysToTarget(text) {
        this.target.waitForDisplayed();
        this.target.keys(text);
    }

    getResultText() {
        this.result.waitForDisplayed();
        return this.result.getText();
    }

    open() {
        return super.open("key_presses");
    }
}
module.exports = new KeyPress();