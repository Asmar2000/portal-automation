const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 350000,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  form: true,
  defaultCommandTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
