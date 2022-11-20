const axios = require("axios");
const ConfigurationManager = require("../utils/ConfigurationManager");
const { loggerConsole } = require('../utils/loggerManager');

class RequestManager {
    async send(verb, endpoint, queryParams, body, headers) {
        const options = {
            url: `${ConfigurationManager.environment.apiUrl}${endpoint}`,
            method: verb,
            headers: headers,
            params: queryParams,
            data: body,
            validateStatus: undefined
        };
        loggerConsole.debug(`Sending a ${verb} request to ${options.url}`);
        const response = await axios.request(options);
        loggerConsole.debug(`Response returned with ${response.status} code`);
        loggerConsole.debug(response.data);
        return response;
    }
}

module.exports = new RequestManager();
