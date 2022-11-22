/**
 * Chrome Driver
 */

const { Builder, Browser } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

/**
 * Configures Chrome browser
 * @param {Object} capabilities
 * @returns Chrome Driver
 */
async function chrome(capabilities) {
    const options = new Options();
    if (capabilities.headless) options.headless();
    if (capabilities.excludeSwitches) options.excludeSwitches(capabilities.excludeSwitches);
    if (capabilities.maximizeWindow) options.addArguments("--start-maximized");
    else options.windowSize(capabilities.windowSize);
    options

    return await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
}

module.exports = chrome;
