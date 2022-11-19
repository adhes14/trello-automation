module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: ['tests/support/**/*.js'],
        format: ['json:./reports/cucumber-report.json', 'html:./reports/cucumber-report.html'],
        publishQuiet: true
    }
};
