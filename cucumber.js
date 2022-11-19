module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: ['tests/support/**/*.js'],
        format: ['progress-bar', 'json:./reports/cucumber-report.json', 'html:./reports/cucumber-report.html'],
        publishQuiet: true
    }
};
