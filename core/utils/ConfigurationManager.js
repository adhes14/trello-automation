const { readJson } = require("./fileReader");

/**
 * Sets static values from configuration and environment FileSystem
 */
class ConfigurationManager {
    static setUp = readJson('./configurationFile.json');
    static environment = readJson('./environment.json')[ConfigurationManager.setUp.environment];
}

module.exports = ConfigurationManager;
