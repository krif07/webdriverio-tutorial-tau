const Page = require("./page");

class DynamicControls extends Page {

    get input() { return $('#input-example input') }
    get enableDisableButton() { return $('#input-example button') }

    get removeAddCheckboxButton() { return $('#checkbox-example button') }
    get checkboxA() { return $('#checkbox-example div input') }

    clickRemoveAddCheckboxButton() {
        this.removeAddCheckboxButton.waitForDisplayed();
        this.removeAddCheckboxButton.click();
    }

    clickEnableDisableButton() {
        this.enableDisableButton.waitForClickable();
        this.enableDisableButton.click();
    }

    open() {
        return super.open("dynamic_controls");
    }
}
module.exports = new DynamicControls();
