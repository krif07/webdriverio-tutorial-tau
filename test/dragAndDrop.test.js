const { expect, assert } = require("chai");
const dragAndDropPage = require("../pages/dragAndDrop.page");

describe('Test drag and drop elements', () => {

    it.skip('Shoud drag A into B', () => {
        dragAndDropPage.open();
        assert.equal("Drag and Drop", dragAndDropPage.getTitle());
        dragAndDropPage.dragAIntoB();
        assert.equal("B", dragAndDropPage.getColumnAHeader());
        assert.equal("A", dragAndDropPage.getColumnBHeader());
    });

    it.skip('Shoud drag B into A', () => {
        assert.equal("Drag and Drop", dragAndDropPage.getTitle());
        dragAndDropPage.dragBIntoA();
        assert.equal("B", dragAndDropPage.getColumnAHeader());
        assert.equal("A", dragAndDropPage.getColumnBHeader());
    });

    it('Should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        dragAndDropPage.dragDraggableToDroppable();
        assert.equal('Dropped!', dragAndDropPage.droppableParagraph.getText());
    });

});