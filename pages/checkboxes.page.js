class Checboxes {
    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }
    
    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed();
        this.checkboxes(index).click();
    }
}

module.exports = new Checboxes();