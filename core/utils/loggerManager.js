const { getLogger, configure } = require("log4js");
const ConfigurationManager = require("./ConfigurationManager");

const loglevel = ConfigurationManager.setUp['log-level'];

configure({
    appenders: {
        console: { type: "console" },
        file: {
            type: "file",
            filename: "reports/log/exec.log",
            backups: 3
        }
    },
    categories: {
        default: {
            appenders: ["console", "file"],
            level: loglevel.default
        },
        console: {
            appenders: ["console"],
            level: loglevel.console
        },
        file: {
            appenders: ["file"],
            level: loglevel.file
        }
    }
});
const logger = getLogger();
const loggerConsole = getLogger("console");
const loggerFile = getLogger("file");

module.exports = { logger, loggerConsole, loggerFile };
