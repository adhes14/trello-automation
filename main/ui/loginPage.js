const { By } = require("selenium-webdriver");
const Actions = require("../../core/ui/utils/Actions");
const Conditions = require("../../core/ui/utils/Conditions");

class LoginPage {
    userInput = By.id('user');
    passwordInput = By.id('password');
    continueButton = By.id('login');
    loginButton = By.id('login-submit');
    errorLabel = By.id('password-error');

    async login(username, password) {

        await Actions.write(this.userInput, username);
        await Actions.clickOn(this.continueButton);
        await Conditions.untilLocated(this.loginButton, 10000);
        await Actions.write(this.passwordInput, password);
        await Actions.clickOn(this.loginButton);
    }
}

module.exports = new LoginPage();
