const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json/",
  reportPath: "./reports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "firefox",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress project made for learning purposes" },
      { label: "Author", value: "Marko Markovikj" },
    ],
  },
});
