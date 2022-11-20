const { send } = require("../../core/api/requestManager");
const ConfigurationManager = require("../../core/utils/ConfigurationManager");

/**
 * It manages API requests for Board feature
 */
class BoardApi {
    params = ConfigurationManager.environment.users.admin;
    header = {};

    /**
     * It creates a board
     * @param {BoardDTO} body
     * @returns Board
     */
    async create(body) {
        return await send('POST', '/boards', this.params, body, this.header);
    }

    /**
     * It deletes a board
     * @param {string} id
     */
    async delete(id) {
        await send('DELETE', `/boards/${id}`, this.params, {}, this.header);
    }
}

module.exports = new BoardApi();
