const reporter = require('cucumber-html-reporter');
const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-bdd-report.json',
  output: './reports/cucumber-bdd-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
