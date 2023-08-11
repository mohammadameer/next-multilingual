const { getConfig } = require("next-multilingual/config");

const config = getConfig("exampleApp", ["en-US", "ar-SA", "fr-CA"], "en-US", {
  poweredByHeader: false,
  /* This is required since Next.js 11.1.3-canary.69 until we support ESM. */
});

module.exports = config;
