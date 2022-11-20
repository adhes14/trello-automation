const logger = require("./loggerManager");

class Replacer {
    /**
     * It replaces a key by its value on nested objects
     * @param {string} valueToReplace
     * @param {World} source
     * @returns It returns a value
     */
    replaceNestedValue(valueToReplace, source) {
        const regex = RegExp(/\(.+\)/g);
        if (!regex.test(valueToReplace)) return valueToReplace;
        const foundMatches = valueToReplace.match(regex);
        let valueReplaced = valueToReplace;
        for (const match of foundMatches) {
            const matchValue = match;
            const splitedValues = matchValue.match(/\w+/g);
            let actualValue = source;
            splitedValues.forEach(nestedKey => {
                if (!Number.isNaN(Number(nestedKey)))
                    actualValue = actualValue[parseInt(nestedKey)];
                else
                    actualValue = actualValue[nestedKey] ?? '';
            });
            logger.info(`Replacing values ${matchValue} to ${actualValue}`);
            valueReplaced = valueReplaced.replace(matchValue, actualValue);
        }
        return valueReplaced;
    }

    /**
     * It replaces special string content
     * @param {string} value
     * @returns string
     */
    replaceSpecialString(value) {
        value = value === "(space)" ? ' ' : value;
        value = value === "(empty)" ? '' : value;
        return value;
    }
}

module.exports = new Replacer();
