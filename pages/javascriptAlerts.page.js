const Page = require("./page");

class JavascriptAlerts extends Page {

    get jsAlertButton() { return $('.example li:nth-child(1) button') }
    get jsConfirmButton() { return $('.example li:nth-child(2) button') }
    get jsPrompt() { return $('.example li:nth-child(3) button') }
    get resultMessage() { return $('#result') }

    clickJsAlert() {
        this.jsAlertButton.waitForDisplayed();
        this.jsAlertButton.click();
    }

    clickJsConfirm() {
        this.jsConfirmButton.waitForDisplayed();
        this.jsConfirmButton.click();
    }

    clickJsPromp() {
        this.jsPrompt.waitForDisplayed();
        this.jsPrompt.click();
    }

    getResultMessage() {
        this.resultMessage.waitForDisplayed();
        return this.resultMessage.getText();
    }

    open() {
        return super.open("javascript_alerts");
    }
}
module.exports = new JavascriptAlerts();