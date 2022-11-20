const path = require('path');
const { cwd } = require('process');

/**
 * It transform a given path into a valid path acording to the OS
 * @param {string} givenPath
 * @returns string representation of a valid path
 */
module.exports.buildPath = function(givenPath) {
    return cwd() + path.sep + givenPath.replace('/', path.sep);
};
