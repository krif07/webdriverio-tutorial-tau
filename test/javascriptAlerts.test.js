const { expect, assert } = require("chai");
const javascriptAlertsPage = require("../pages/javascriptAlerts.page");

describe('click alerts', () => {
    it('Should click js Alert', () => {
        javascriptAlertsPage.open();
        javascriptAlertsPage.clickJsAlert();
        assert.equal('I am a JS Alert', browser.getAlertText());
    });
    it('Should accept the alert', () => {
        browser.acceptAlert();        
        assert.equal('You successfully clicked an alert', javascriptAlertsPage.getResultMessage());
    });
    it('Should click confirm', () => {
        javascriptAlertsPage.clickJsConfirm();
        assert.equal('I am a JS Confirm', browser.getAlertText());
    });
    it('Should cancel the confirm', () => {
        browser.dismissAlert();        
        assert.equal('You clicked: Cancel', javascriptAlertsPage.getResultMessage());
    });
    it('Should click promp', () => {
        javascriptAlertsPage.clickJsPromp();
        assert.equal('I am a JS prompt', browser.getAlertText());
    });
    it('Should write and ok prompt', () => {
        browser.sendAlertText('Hola prompt');
        browser.acceptAlert();
        assert.equal('You entered: Hola prompt', javascriptAlertsPage.getResultMessage());
        browser.pause(2000);
    });
});