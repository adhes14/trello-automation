module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: ['tests/support/**/*.js'],
        format: ['@cucumber/pretty-formatter', 'json:./reports/cucumber-report.json', 'html:./reports/cucumber-report.html'],
        publishQuiet: true
    }
};
