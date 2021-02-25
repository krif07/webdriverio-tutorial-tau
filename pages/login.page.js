const Page = require("./page");

class LoginPage extends Page{

    get userNameInput() { return $('#username') }
    get passwordInput() { return $('#password') }
    get flashError() { return $('#flash') }
    get loginBtn() { return $('button[type="submit"]') }

    enterUsername(text){
        this.userNameInput.waitForDisplayed();
        this.userNameInput.setValue(text);
    }

    enterPassword(text){
        this.passwordInput.waitForDisplayed();
        this.passwordInput.setValue(text);
    }

    getFlashError() {
        this.flashError.waitForDisplayed();
        return this.flashError.getText().trim().replace(/[\n\t\r]/g,"");
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.loginBtn.click();        
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }

}
module.exports = new LoginPage();