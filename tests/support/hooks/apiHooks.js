const { After } = require("@cucumber/cucumber");
const requestManager = require("../../../core/api/requestManager");
const ConfigurationManager = require("../../../core/utils/ConfigurationManager");

After ({tags: "@deleteBoard"}, async function() {
    console.log("Delete board hook...");
    const params = ConfigurationManager.environment.users['admin'];
    await requestManager.send('DELETE', `/boards/${this.response.data.id}`, params, {}, {});
});
