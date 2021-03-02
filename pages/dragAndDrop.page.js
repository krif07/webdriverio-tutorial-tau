const Page = require("./page");

class DragAndDrop extends Page {

    get title() { return $('.example h3') }
    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }

    getTitle() {
        this.title.waitForDisplayed();
        return this.title.getText();
    }

    getColumnAHeader() {
        this.columnA.waitForDisplayed();
        return this.columnA.$("header").getText();
    }

    getColumnBHeader() {
        this.columnB.waitForDisplayed();
        return this.columnB.$('header').getText();
    }

    dragAIntoB() {
        this.columnA.waitForDisplayed();
        this.columnB.waitForDisplayed();

        this.columnA.dragAndDrop(this.columnB);
    }

    dragBIntoA(){
        this.columnA.waitForDisplayed();
        this.columnB.waitForDisplayed();

        this.columnB.dragAndDrop(this.columnA);
    }

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    /**
     * Drag and drop
     */
    dragDraggableToDroppable() {
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)

    }

    open() {
        return super.open("drag_and_drop");
    }    
}
module.exports = new DragAndDrop();