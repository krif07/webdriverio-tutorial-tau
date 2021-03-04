const Page = require("./page");

class DropDown extends Page {

    get dropDownElement() { return $('#dropdown') }

    get option1() { return $('#dropdown option:nth-child(2)') }
    get option2() { return $('#dropdown option:nth-child(3)') }
        

    selectElementByText(text) {
        this.dropDownElement.waitForDisplayed();
        this.dropDownElement.selectByVisibleText(text);
    }

    selectElementByValue(value) {
        this.dropDownElement.waitForDisplayed();
        this.dropDownElement.selectByAttribute('value', value);
    }

    selectElementByIndex(index) {
        this.dropDownElement.waitForDisplayed();
        this.dropDownElement.selectByIndex(index);
    }

    clicOnOption(index) {
        this.dropDownElement.waitForDisplayed();
        this.dropDownElement.click();
        
        if(index === 1){
            this.option1.click();
        }
        else if(index === 2){
            this.option2.click();
        }
    }

    open() {
        return super.open("dropdown");
    }
}
module.exports = new DropDown();