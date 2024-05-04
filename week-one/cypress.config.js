const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, 
    viewportHeight: 960,
    viewportWidth: 1536,
    chromeWebSecurity: false,
    baseUrl: 'https://staging.trymima.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
