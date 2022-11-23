const { When, Then } = require("@cucumber/cucumber");
const { expect } = require('expect');
const Actions = require("../../../../core/ui/utils/Actions");
const loginPage = require("../../../../main/ui/loginPage");

When('the user logs into Script with:', async function(dataTable) {
    const user = dataTable.rowsHash();

    await loginPage.login(user.username, user.password);
});

Then('the error label should display {string}', async function(expectedResult) {
    const actualResult = await Actions.getText(loginPage.errorLabel);

    expect(actualResult).toBe(expectedResult);
});
