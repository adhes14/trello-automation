const { Given, When, Then } = require("@cucumber/cucumber");
const requestManager = require("../../../core/api/requestManager");
const ConfigurationManager = require("../../../core/utils/ConfigurationManager");
const { expect } = require('expect');
const { cwd } = require('process');
const { validateSchemaFromPath } = require("../../../core/utils/schemaValidator");

Given("the user sets the following body:", function (dataTable) {
    const object = dataTable.rowsHash();
    this.requestBody = object;
});

When("the {string} user sends a {string} request to {string} endpoint", async function (user, verb, endpoint) {
    const params = ConfigurationManager.environment.users[user];
    const header = {};
    this.response = await requestManager.send(verb, endpoint, params, this.requestBody, header);
});

Then("the response status code should be {int}", function(expectedCodeStatus) {
    expect(this.response.status).toBe(expectedCodeStatus);
});

Then("the response body should have the following values:", function(table) {
    const tableValues = table.raw();
    const responseBody = this.response.data;
    for (const value of tableValues) {
        expect(responseBody[value[0]].toString()).toBe(value[1]);
    }
});

Then("the schema response is verified with {string}", function(schemaName) {
    const schemaPath = cwd() + '/main/resources/' + schemaName + '.json';
    expect(validateSchemaFromPath(this.response.data, schemaPath)).toBeTruthy();
});
