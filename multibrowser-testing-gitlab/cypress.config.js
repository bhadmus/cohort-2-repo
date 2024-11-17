const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require('@cypress/browserify-preprocessor')
const {preprendTransformerToOptions} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', 
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)));

  return config

}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    viewportHeight: 960,
    viewportWidth: 1538,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    specPattern: '**/*.feature',
    // env: {
    //   "MAILSLURP_API_KEY": "50dde13318eef36ffd69ee6974950ce2b2b5ddb1ff125a5ef4f0f560ea2c78f0"
    // },
    setupNodeEvents,
  },
});
