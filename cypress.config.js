const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yffsfq",   // ✅ comma added

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {},
  },
});