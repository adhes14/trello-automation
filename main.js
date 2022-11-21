const driverFactory = require("./core/ui/driverFactory");
const { environment } = require("./core/utils/ConfigurationManager");

console.log('hello');

(async () => {
    const driver = await driverFactory.createDriver();
    await driver.get(environment.uiUrl);
})();
