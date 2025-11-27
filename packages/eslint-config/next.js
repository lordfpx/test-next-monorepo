const baseConfig = require("./base");
const nextPlugin = require("@next/eslint-plugin-next");

module.exports = [
  ...baseConfig,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules
    }
  }
];
