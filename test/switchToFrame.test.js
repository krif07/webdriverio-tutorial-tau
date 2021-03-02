const { expect, assert } = require("chai");
const iFramePage = require("../pages/iframe.page");
const internetPage = require("../pages/internet.page");

describe('Switch to Frames', ()=> {

    it('Should enter text in iframe', () => {
        let text = "This is my text, Im Cristian!!";
        iFramePage.open();
        iFramePage.changeIframe();
        iFramePage.enterText(text);
        assert.equal(text, iFramePage.getText());
    });
});
