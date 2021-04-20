const Page = require("./page");

class AddRemoveElementsPage extends Page {

    get addElement() { return $(`.example button:nth-child(1)`) }
    deleteElement(index) { return $('#elements button:nth-child(1)') }

    clickAddElement() {
        this.addElement.waitForClickable();
        this.addElement.click();
    }

    clickDeleteElement(index) {
        this.deleteElement(index).waitForClickable();
        this.deleteElement(index).click();
    }

    open() {
        return super.open("add_remove_elements/");
    }
}
module.exports = new AddRemoveElementsPage();
