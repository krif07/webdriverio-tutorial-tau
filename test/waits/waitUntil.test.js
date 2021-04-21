const { expect, assert } = require('chai');
const dynamicControlsPage = require('../../pages/dynamicControls.page');

describe('Wait Until', () => {
    it('Should wait until remove the a checkbox to Add', () => {
        dynamicControlsPage.open();
        dynamicControlsPage.clickRemoveAddCheckboxButton();
        //dynamicControlsPage.checkboxA.waitUntil();
        browser.waitUntil(() => {
            return dynamicControlsPage.removeAddCheckboxButton.getText() === 'Add'
        }, {timeout:6000, timeoutMsg:'Expect button text to change'});
        assert.equal('Add', dynamicControlsPage.removeAddCheckboxButton.getText());
    });

    it('Should wait until add the a checkbox to Remove', () => {
        dynamicControlsPage.open();
        dynamicControlsPage.clickRemoveAddCheckboxButton();
        browser.waitUntil(() => {
            return dynamicControlsPage.removeAddCheckboxButton.getText() === 'Remove'
        }, {timeout:6000, timeoutMsg:'Expect button text to change'});
        assert.equal(true, dynamicControlsPage.checkboxA.isExisting());
    });
});
