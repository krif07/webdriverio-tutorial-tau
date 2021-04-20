const { expect, assert } = require("chai");
const internetPage = require("../pages/internet.page");
const windowsPage = require("../pages/windows.page");
const newWindowPage = require("../pages/newWindow.page");

describe('Scroll to Element', () => {

    it('Should Scroll to footer', ()=> {
        internetPage.open();
        internetPage.pageHeader.waitForDisplayed(1000, true);
        internetPage.pageHeader.scrollIntoView();
        internetPage.scrollToPageFooter(); // No funciona si está fuera de vista
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    });

    it('Should open new window', () => {
        windowsPage.open();
        assert.equal(windowsPage.getTitle(), "Opening a new window");
        windowsPage.clickLink();
        let path = 'windows/new';
        windowsPage.switchWindow(`https://the-internet.herokuapp.com/${path}`);
        assert.equal(true, newWindowPage.title.isExisting());
        assert.equal(newWindowPage.getTitle(), "New Window");
        //expect(browser).toHaveUrlContaining(path);
    });

});
