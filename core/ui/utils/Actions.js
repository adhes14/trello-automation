const { loggerConsole } = require("../../utils/loggerManager");
const DriverManager = require("../DriverManager");
const Conditions = require("./Conditions");

class Actions extends DriverManager {
    static async getWebElement(locator) {
        loggerConsole.debug(`Getting element: "${locator}"`);
        await Conditions.untilLocated(locator);
        await Conditions.untilVisible(locator);
        return await this.driver.findElement(locator);
    }

    static async clickOn(locator) {
        loggerConsole.debug(`Clicking on: "${locator}"`);
        const element = await this.getWebElement(locator);
        await element.click();
    }
}

module.exports = Actions;
