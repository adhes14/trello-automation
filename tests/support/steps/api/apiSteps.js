const { Given, When, Then } = require("@cucumber/cucumber");
const requestManager = require("../../../../core/api/requestManager");
const ConfigurationManager = require("../../../../core/utils/ConfigurationManager");
const { expect } = require('expect');
const { validateSchemaFromPath } = require("../../../../core/utils/schemaValidator");
const { buildPath } = require("../../../../core/utils/pathBuilder");
const { replaceSpecialString, replaceNestedValue } = require("../../../../core/utils/replacer");

Given("the user sets the following body:", function (dataTable) {
    const object = dataTable.rowsHash();
    for (const key in object) {
        object[key] = replaceSpecialString(object[key]);
        object[key] = replaceNestedValue(object[key], this);
    }
    this.requestBody = object;
});

When("the {string} user sends a {string} request to {string} endpoint", async function (user, verb, endpoint) {
    const params = ConfigurationManager.environment.users[user];
    const header = {};
    endpoint = replaceNestedValue(endpoint, this);
    this.response = await requestManager.send(verb, endpoint, params, this.requestBody, header);
});

Then("the response status code should be {int}", function(expectedCodeStatus) {
    expect(this.response.status).toBe(expectedCodeStatus);
});

Then("the response body should have the following values:", function(table) {
    const tableValues = table.raw();
    const responseBody = this.response.data;
    let actualValue = '';
    for (const value of tableValues) {
        if (responseBody[value[0]] === undefined) {
            actualValue = replaceNestedValue(`(response.data.${value[0]})`, this);
        } else {
            actualValue = responseBody[value[0]];
        }
        expect(actualValue.toString()).toBe(replaceNestedValue(value[1], this));
    }
});

Then("the schema response is verified with {string}", function(schemaName) {
    const schemaPath = buildPath(`/main/resources/${schemaName}.json`);
    expect(validateSchemaFromPath(this.response.data, schemaPath)).toBeTruthy();
});
