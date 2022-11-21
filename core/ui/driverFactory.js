const ConfigurationManager = require("../utils/ConfigurationManager");
const { loggerConsole } = require("../utils/loggerManager");
const chrome = require("./drivers/chrome");
const firefox = require("./drivers/firefox");

class DriverFactory {
    browser = ConfigurationManager.setUp.browser;
    capabilities = ConfigurationManager.setUp.capabilities;

    createDriver() {
        switch (this.browser) {
            case "chrome":
                return chrome(this.capabilities);
            case "firefox":
                return firefox(this.capabilities);
            default:
                loggerConsole.error("browser not found");
                break;
        }
    }
}

module.exports = new DriverFactory();
