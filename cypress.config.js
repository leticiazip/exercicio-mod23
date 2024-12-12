const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    defaultCommandTimeout: 10000,
  },
  env: {
    snapshotOnly: true
  }
});
