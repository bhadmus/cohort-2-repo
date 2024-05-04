const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    includeShadowDom: true,
    baseUrl:'https://www.lambdatest.com/selenium-playground',
    viewportHeight: 900,
    viewportWidth: 1400,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
