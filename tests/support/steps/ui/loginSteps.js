const { When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const { expect } = require('expect');

When('the user logs into Script with:', async function(dataTable) {
    const user = dataTable.rowsHash();

    const userInput = By.id('user');
    const continueButton = By.id('login');
    const loginButton = By.id('login-submit');

    const userInputElement = await this.driver.findElement(userInput);
    const continueButtonElement = await this.driver.findElement(continueButton);

    await userInputElement.sendKeys(user.username);
    await continueButtonElement.click();

    await this.driver.wait(until.elementLocated(loginButton), 10000);

    const loginButtonElement = await this.driver.findElement(loginButton);
    await loginButtonElement.click();
});

Then('the error label should display {string}', async function(expectedResult) {
    const errorLabel = By.id('password-error');
    const errorLabelElement = await this.driver.findElement(errorLabel);

    const actualResult = await errorLabelElement.getText();
    expect(actualResult).toBe(expectedResult);
});
