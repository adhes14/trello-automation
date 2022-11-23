const DriverManager = require("../DriverManager");
const { setUp } = require("../../utils/ConfigurationManager");
const { loggerConsole } = require("../../utils/loggerManager");
const { until } = require("selenium-webdriver");

class Conditions extends DriverManager {
    static async untilLocated(locator, timeout = setUp.explicitTimeout) {
        loggerConsole.debug(`Waiting until element is located: "${locator}"`);
        await this.driver.wait(until.elementLocated(locator), timeout);
    }

    static async untilVisible(locator, timeout = setUp.explicitTimeout) {
        loggerConsole.debug(`Waiting until element is visible: "${locator}"`);
        const element = await this.driver.findElement(locator);
        await this.driver.wait(until.elementIsVisible(element), timeout);
    }
}

module.exports = Conditions;
