const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a2czm3',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
