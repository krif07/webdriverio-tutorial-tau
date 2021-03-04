const { expect, assert } = require("chai");
const internetPage = require("../pages/internet.page");
const dropDownPage = require("../pages/dropdown.page");

describe('Select elements', () => {
    it('Shoud select options by index', () => {
        internetPage.open();
        internetPage.clickOnLink("Dropdown");
        dropDownPage.selectElementByIndex(1);
        assert.equal(dropDownPage.option1.isSelected(), true);
        dropDownPage.selectElementByIndex(2);
        assert.equal(dropDownPage.option2.isSelected(), true);
    });
    it('Shoud select options by value', () => {
        internetPage.open();
        internetPage.clickOnLink("Dropdown");
        dropDownPage.selectElementByValue("1");
        assert.equal(dropDownPage.option1.isSelected(), true);
        dropDownPage.selectElementByValue("2");
        assert.equal(dropDownPage.option2.isSelected(), true);
    });
    it('Shoud select options by text', () => {
        dropDownPage.open();
        dropDownPage.selectElementByText("Option 1");
        assert.equal(dropDownPage.option1.isSelected(), true);
        dropDownPage.selectElementByText("Option 2");
        assert.equal(dropDownPage.option2.isSelected(), true);
    });
    it('Shoud select options by click', () => {
        dropDownPage.open();
        dropDownPage.clicOnOption(1);
        assert.equal(dropDownPage.option1.isSelected(), true);
        dropDownPage.clicOnOption(2);
        assert.equal(dropDownPage.option2.isSelected(), true);
    });
    
});