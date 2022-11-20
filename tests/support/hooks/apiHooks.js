const { After, Before } = require("@cucumber/cucumber");
const logger = require("../../../core/utils/loggerManager");
const boardApi = require("../../../main/api/boardApi");

Before(function(scenario) {
    logger.info(`Running ${scenario.pickle.uri} => Scenario: ${scenario.pickle.name}`);
});

Before({tags: "@createBoard"}, async function() {
    logger.info("Create board hook...");
    const response = await boardApi.create({ name: "New board from hook"});
    this.board = response.data;
});

After ({tags: "@deleteBoard"}, async function() {
    logger.info("Delete board hook...");
    await boardApi.delete(this.response.data.id);
});
