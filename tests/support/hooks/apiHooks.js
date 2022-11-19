const { After, Before } = require("@cucumber/cucumber");
const requestManager = require("../../../core/api/requestManager");
const ConfigurationManager = require("../../../core/utils/ConfigurationManager");
const logger = require("../../../core/utils/loggerManager");

Before(function(scenario) {
    logger.info(`Running ${scenario.pickle.uri} => Scenario: ${scenario.pickle.name}`);
});

After ({tags: "@deleteBoard"}, async function() {
    logger.info("Delete board hook...");
    const params = ConfigurationManager.environment.users['admin'];
    await requestManager.send('DELETE', `/boards/${this.response.data.id}`, params, {}, {});
});
