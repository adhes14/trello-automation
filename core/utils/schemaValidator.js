const { Validator } = require("jsonschema");
const { readJson } = require("./fileReader");

/**
 * Validate response schema
 * @param {Response} response 
 * @param {String} schemaPath 
 * @returns Boolean
 */
module.exports.validateSchemaFromPath = function(response, schemaPath) {
    const validator = new Validator();
    const schema = readJson(schemaPath);
    return validator.validate(response, schema).valid;
};
