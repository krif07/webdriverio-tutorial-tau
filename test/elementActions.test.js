const { expect, assert } = require("chai");
const internetPage = require("../pages/internet.page");
const checkboxesPage = require("../pages/checkboxes.page");
const loginPage = require("../pages/login.page");
const securePage = require("../pages/secure.page");

describe(' Test element actions', () => {
    
    it('Should click element', () => {
        browser.url('/')
        internetPage.clickOnLink(1);
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest');
    });

    it('Should get Text', () => {
        browser.url('/');
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing');
    });

    it('Should click checkbox', () => {
        browser.url('/');
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

});