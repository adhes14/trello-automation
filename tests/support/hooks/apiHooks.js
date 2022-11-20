const { After, Before } = require("@cucumber/cucumber");
const { logger, loggerFile } = require("../../../core/utils/loggerManager");
const boardApi = require("../../../main/api/boardApi");
const listApi = require("../../../main/api/listApi");

Before(function(scenario) {
    loggerFile.info(`Running ${scenario.pickle.uri} => Scenario: ${scenario.pickle.name}`);
});

Before({tags: "@createBoard"}, async function() {
    logger.info("Create board hook...");
    const response = await boardApi.create({ name: "New board from hook"});
    this.board = response.data;
});

Before({tags: "@createList"}, async function() {
    logger.info("Create list hook...");
    const response = await listApi.create({ name: "New list from hook", idBoard: this.board.id});
    this.list = response.data;
});

After ({tags: "@deleteBoard"}, async function() {
    logger.info("Delete board hook...");
    if (this.board)
        await boardApi.delete(this.board.id);
    else
        await boardApi.delete(this.response.data.id);
});

After ({tags: "@archiveList"}, async function() {
    logger.info("Archive list hook...");
    if (this.list)
        await listApi.archive(this.list.id);
    else
        await listApi.archive(this.response.data.id);
});

After(function(scenario) {
    loggerFile.info(`Result ${scenario.result.status}`);
});
