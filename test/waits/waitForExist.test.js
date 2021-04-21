const addRemoveElementsPage = require('../../pages/addRemoveElements.page');
describe('Wait For Exist', () => {
    it('Should wait until the delete button exists', () => {
        addRemoveElementsPage.open();
        addRemoveElementsPage.clickAddElement();
        addRemoveElementsPage.deleteElement(1).waitForDisplayed();
        assert.equal(true, addRemoveElementsPage.deleteElement(1).isExisting());
    });

    it('Should wait for the delete button to not exist', () => {
        addRemoveElementsPage.clickDeleteElement(1);
        addRemoveElementsPage.deleteElement(1).waitForExist({timeout:500, reverse:true});
        assert.equal(false, addRemoveElementsPage.deleteElement(1).isExisting());
    });
});
