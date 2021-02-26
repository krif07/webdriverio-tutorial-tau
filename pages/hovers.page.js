const Page = require("./page");

class Hovers extends Page {

    getFigure(index) { return $(`div.figure:nth-child(${index})`) }
    get figure1() { return this.getFigure(3) }

    hoverOnFigure(index) {
        if(index === 1){
            this.figure1.waitForDisplayed();
            this.figure1.moveTo();
        }
    }

    getFigureCaption(index){
        
        this.hoverOnFigure(index);
        let text = '';

        if(index === 1){
            text = this.figure1.$('.figcaption h5').getText();
        }

        return text;
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open("hovers");
    }
}
module.exports = new Hovers();