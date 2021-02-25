const internetPage = require("../pages/internet.page")

describe("Interacting with elements", function(){
    it("Get text for element", () => {
        browser.url('/')
        let text = $(".heading").getText()
        console.log(text)

        //internetPage.getLiText()
        console.log(internetPage.getSpecificElementText(3))
    })

    it("Is footer Displayed", () => {
        console.log(internetPage.pageFooter.isDisplayed())
    })

    it("Does the header exixt?", () => {
        console.log(internetPage.pageHeader.isExisting())
    })
    // is necesary to scroll?
    it("Is footer in viewport", () => {
        console.log(internetPage.pageFooter.isDisplayedInViewport())
    })
    it("Is the header in viewport?", () => {
        console.log(internetPage.pageHeader.isDisplayedInViewport())
    })
    
    it("Is subheader enabled?", () => {
        console.log(internetPage.subHeading.isEnabled())
    })

    it("Click Element", () => {
        internetPage.clickOnLink(1)
    })
})