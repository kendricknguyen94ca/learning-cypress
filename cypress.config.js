const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // MocaAwesome Report
  require('cypress-mochawesome-reporter/plugin')(on);

  // Cucumber
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: '4xg6tg',
  video: true,
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
  },
  env: {
    URL: "https://rahulshettyacademy.com",
    loginApiUrl: "https://rahulshettyacademy.com/api/ecom/auth/login",
    userEmail: "khoa.ngp@yopmail.com",
    userPass: "lM#b05zh!mF0M7sH"
  },
  e2e: {
    setupNodeEvents,
    // specPattern: "**/*.feature", // For BDD Cucumber framework
    specPattern: 'cypress/integration/examples/*.js' // For normal Cypress framework
  },
  
});
