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
}

module.exports = Actions;
