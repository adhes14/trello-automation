const { logger } = require("../utils/loggerManager");
const driverFactory = require("./driverFactory");

class DriverManager {
    static driver;

    static async getDriver() {
        if (!DriverManager.driver) {
            logger.info('Creating a new driver session...');
            DriverManager.driver = await driverFactory.createDriver();
        } else {
            logger.warn('A driver session already exists');
        }
        logger.info('Driver session ID:', (await DriverManager.driver.getSession()).getId());
        return DriverManager.driver;
    }

    static async quit() {
        logger.info('Quitting driver session...');
        await DriverManager.driver?.quit();
        DriverManager.driver = null;
    }
}

module.exports = DriverManager;
