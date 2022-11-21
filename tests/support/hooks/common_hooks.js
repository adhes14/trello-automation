const { Before, After } = require("@cucumber/cucumber");
const driverFactory = require("../../../core/ui/driverFactory");
const { environment } = require("../../../core/utils/ConfigurationManager");
const { logger } = require("../../../core/utils/loggerManager");

Before({ tags: '@ui' }, async function() {
    logger.info('Setting driver up...');
    this.driver = await driverFactory.createDriver();
    await this.driver.get(environment.uiUrl);
});

After({ tags: '@ui'}, async function() {
    logger.info('Closing driver...');
    await this.driver.quit();
});
