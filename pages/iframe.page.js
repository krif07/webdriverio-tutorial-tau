const Page = require("./page");

class IFrame extends Page {

    get iFrameId() { return $('#mce_0_ifr') }
    get iFrameBody() { return $('#tinymce') }

    changeIframe() {
        browser.switchToFrame(this.iFrameId);
    }

    enterText(text) {
        this.iFrameBody.waitForDisplayed();
        this.iFrameBody.clearValue();
        this.iFrameBody.click();
        this.iFrameBody.keys(text);
    }

    getText() {
        this.iFrameBody.waitForDisplayed();
        return this.iFrameBody.getText();
    }

    open() {
        return super.open("iframe");
    }
}
module.exports = new IFrame();