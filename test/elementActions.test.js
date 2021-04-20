const { expect, assert } = require("chai");
const internetPage = require("../pages/internet.page");
const checkboxesPage = require("../pages/checkboxes.page");
const loginPage = require("../pages/login.page");
const securePage = require("../pages/secure.page");
const hoversPage = require("../pages/hovers.page");
const keyPressPage = require("../pages/keyPress.page");

describe(' Test element actions', () => {

    it('Should click element', () => {
        internetPage.open();
        internetPage.clickOnLink(1);
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest');
    });

    it('Should get Text', () => {
        internetPage.open();
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing');
    });

    it('Should click checkbox', () => {
        internetPage.open();
        internetPage.clickOnLink(6);
        checkboxesPage.clickCheckbox(1);
        expect(checkboxesPage.checkboxes(1).isSelected()).equals(true);
    });

    it('Should uncheck checbox', () => {
        checkboxesPage.clickCheckbox(1);
        expect(checkboxesPage.checkboxes(1).isSelected()).equal(false);
    });

    it('Should not login', () => {
        loginPage.open();
        loginPage.login("tomsmith", "Itsnotthepassword");
        expect(loginPage.getFlashError()).to.include('Your password is invalid!');
    });

    it('Should login', () => {
        loginPage.login("tomsmith", "SuperSecretPassword!");
        expect(securePage.getFlashSuccess()).to.include("You logged into a secure area!");
    });

    it('Should hover element', () => {
        internetPage.open();
        internetPage.clickOnLink("Hovers");
        assert.equal(hoversPage.getFigureCaption(1), "name: user1");
    });

    it('Should press a Back space key', () => {
        internetPage.open();
        internetPage.clickOnLink("Key Presses");
        keyPressPage.clickTarget();
        let key = 'BACK_SPACE';
        keyPressPage.sendKeysToTarget('Backspace');
        assert.equal(keyPressPage.getResultText(), `You entered: ${key}`);
    });

    it('Should press a Space key', () => {
        internetPage.open();
        internetPage.clickOnLink("Key Presses");
        keyPressPage.clickTarget();
        let key = 'SPACE';
        keyPressPage.sendKeysToTarget('Space');
        assert.equal(keyPressPage.getResultText(), `You entered: ${key}`);
    });

    it('Should scroll into view', ()=> {
        internetPage.open();
        internetPage.pageFooter.scrollIntoView();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    });

});
