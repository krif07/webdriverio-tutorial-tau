const Page = require("./page");

class Internet extends Page{
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    get parentMenu() { return $('ul') }
    get childMenuElements() { return this.parentMenu.$$('li') }
    specificChildElement(index) { return this.parentMenu.$(`li:nth-child(${index})`) }
    link(index) { return this.parentMenu.$(`li:nth-child(${index}) a`) }
    linkText(text) { return $(`=${text}`) }

    getLiText() {
        this.childMenuElements.filter( element => {
            console.log(element.getText())
        })
    }

    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed();
        return this.specificChildElement(index).getText();
    }

    /**
     * Clicks on the link based on the index provided
     * @param {Number} index the index of the element
     */
    clickOnLink(index) {
        if(typeof index === 'number') {
            this.link(index).waitForDisplayed();
            this.link(index).click();
        }
        else if(typeof index === 'string'){
            this.linkText(index).waitForDisplayed();
            this.linkText(index).click();
        }
    }

    // No funciona si está fuera de vista
    scrollToPageFooter() {
        this.pageFooter.moveTo();
    }

    /**
    * overwrite specifc options to adapt it to page object
    */
   open() {
        return super.open("/");
   }
}
module.exports = new Internet();