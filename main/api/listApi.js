const { send } = require("../../core/api/requestManager");
const ConfigurationManager = require("../../core/utils/ConfigurationManager");

/**
 * It manages API requests for List feature
 */
class ListApi {
    params = ConfigurationManager.environment.users.admin;
    header = {};

    /**
     * It creates a board
     * @param {ListDTO} body
     * @returns List
     */
    async create(body) {
        return await send('POST', '/lists', this.params, body, this.header);
    }

    /**
     * It archives a list
     * @param {string} id
     */
    async archive(id) {
        await send('PUT', `/lists/${id}/closed`, this.params, { value: true }, this.header);
    }
}

module.exports = new ListApi();
