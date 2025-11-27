const baseConfig = require("./base");
const storybookPlugin = require("eslint-plugin-storybook");

module.exports = [
  ...baseConfig,
  {
    files: ["**/*.stories.{ts,tsx,js,jsx}"],
    plugins: {
      storybook: storybookPlugin
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules
    }
  }
];
