const { expect, assert } = require("chai");
const internetPage = require("../pages/internet.page");
const dynamicControlsPage = require("../pages/dynamicControls.page");

describe('Wait For Enabled', ()=> {
    it('Should wait for the input field to be enabled', () => {
        dynamicControlsPage.open();
        dynamicControlsPage.clickEnableDisableButton();
        dynamicControlsPage.input.waitForEnabled(4000);
        assert.equal(true, dynamicControlsPage.input.isEnabled());
    });

    it('Shoud wait for the input to be disabled', () => {
        dynamicControlsPage.clickEnableDisableButton();
        /* Now wait por disable*/
        dynamicControlsPage.input.waitForEnabled({timeout:4000, reverse:true });
        assert.equal(false, dynamicControlsPage.input.isEnabled());
    });
});
