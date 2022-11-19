const axios = require("axios");
const ConfigurationManager = require("../utils/ConfigurationManager");

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
        console.log(`Sending a ${verb} request to ${options.url}`);
        const response = await axios.request(options);
        console.log(`Response returned with ${response.status} code`);
        console.log(response.data);
        return response;
    }
}

module.exports = new RequestManager();
