const { When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const { expect } = require('expect');
const Conditions = require("../../../../core/ui/utils/Conditions");
const Actions = require("../../../../core/ui/utils/Actions");

When('the user logs into Script with:', async function(dataTable) {
    const user = dataTable.rowsHash();

    const userInput = By.id('user');
    const continueButton = By.id('login');
    const loginButton = By.id('login-submit');


    await Actions.write(userInput, user.username);
    await Actions.clickOn(continueButton);

    await Conditions.untilLocated(loginButton, 10000);

    await Actions.clickOn(loginButton);
});

Then('the error label should display {string}', async function(expectedResult) {
    const errorLabel = By.id('password-error');
    const errorLabelElement = await Actions.getWebElement(errorLabel);

    const actualResult = await errorLabelElement.getText();
    expect(actualResult).toBe(expectedResult);
});
