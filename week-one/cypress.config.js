const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, 
    viewportHeight: 960,
    viewportWidth: 1536,
    chromeWebSecurity: false,
    experimentalWebKitSupport: true,
    baseUrl: 'https://staging.trymima.com',
    setupNodeEvents(on, config) {
      allureCypress(on)
    },
  },
});
