const { getLogger, configure } = require("log4js");
const ConfigurationManager = require("./ConfigurationManager");

const loglevel = ConfigurationManager.setUp['log-level'] ?? "info";

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
            level: loglevel
        },
        console: {
            appenders: ["console"],
            level: loglevel
        },
        file: {
            appenders: ["file"],
            level: loglevel
        }
    }
});
const logger = getLogger();

module.exports = logger;
