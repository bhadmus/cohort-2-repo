const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kitchen.applitools.com/',
    viewportHeight: 960,
    viewportWidth: 1538,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
