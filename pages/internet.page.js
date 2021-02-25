class Internet{
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    get parentMenu() { return $('ul') }
    get childMenuElements() { return this.parentMenu.$$('li') }
    specificChildElement(index) { return this.parentMenu.$(`li:nth-child(${index})`) }
    link(index) { return this.parentMenu.$(`li:nth-child(${index}) a`) }

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
        this.link(index).waitForDisplayed()
        this.link(index).click();        
    }
}
module.exports = new Internet();