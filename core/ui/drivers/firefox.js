/**
 * Firefox Driver
 */

const { Builder, Browser } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/firefox");

/**
 * Configures Firefox browser
 * @param {Object} capabilities
 * @returns Firefox Driver
 */
async function firefox(capabilities) {
    const options = new Options();
    if (capabilities.headless) options.headless();
    if (!capabilities.maximizeWindow) options.windowSize(capabilities.windowSize);

    return await new Builder().forBrowser(Browser.FIREFOX).setFirefoxOptions(options).build();
}

module.exports = firefox;
