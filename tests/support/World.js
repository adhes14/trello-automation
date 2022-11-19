const { setDefaultTimeout, setWorldConstructor } = require("@cucumber/cucumber");
const ConfigurationManager = require("../../core/utils/ConfigurationManager");

class World {
    response;
    requestBody;

    constructor({ attach }) {
        this.attach = attach;
    }
}

setDefaultTimeout(ConfigurationManager.setUp.explicitTimeout);
setWorldConstructor(World);
