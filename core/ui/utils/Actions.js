const { loggerConsole, logger } = require("../../utils/loggerManager");
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

    static async rightClick(locator) {
        loggerConsole.debug(`Right clicking on: "${locator}"`);
        const element = await this.getWebElement(locator);
        await this.driver.actions().contextClick(element).perform();
    }

    static async write(locator, value) {
        loggerConsole.debug(`Writting "${value}" on "${locator}"`);
        const element = await this.getWebElement(locator);
        await element.clear();
        await element.sendKeys(value);
    }

    static async getText(locator) {
        loggerConsole.debug(`Getting text from: "${locator}"`);
        const element = await this.getWebElement(locator);
        return await element.getText();
    }

    static async takeScreenshot() {
        logger.info('Screenshot has been taken');
        return await this.driver.takeScreenshot();
    }
}

module.exports = Actions;
