const axios = require("axios");
const ConfigurationManager = require("../utils/ConfigurationManager");
const logger = require('../utils/loggerManager');

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
        logger.debug(`Sending a ${verb} request to ${options.url}`);
        const response = await axios.request(options);
        logger.debug(`Response returned with ${response.status} code`);
        logger.debug(response.data);
        return response;
    }
}

module.exports = new RequestManager();
