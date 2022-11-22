const { Before, AfterAll } = require("@cucumber/cucumber");
const DriverManager = require("../../../core/ui/DriverManager");
const { environment } = require("../../../core/utils/ConfigurationManager");
const { logger } = require("../../../core/utils/loggerManager");

Before({ tags: '@ui' }, async function() {
    logger.info('Opening driver from hook...');
    this.driver = await DriverManager.getDriver();
    await this.driver.get(environment.uiUrl);
});

AfterAll(async function() {
    logger.info('Closing driver from hook...');
    await DriverManager.quit();
});
