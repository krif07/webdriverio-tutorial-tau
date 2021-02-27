const { expect, assert } = require("chai");
const iframePage = require("../pages/iframe.page");
const iFramePage = require("../pages/iframe.page");
const internetPage = require("../pages/internet.page");

describe('Switch to Frames', ()=> {

    it('Should enter text in iframe', () => {
        let text = "This is my text, Im Cristian!!";
        iFramePage.open();
        iFramePage.changeIframe();
        iframePage.enterText(text);
        assert.equal(text, iframePage.getText());
    });
});
