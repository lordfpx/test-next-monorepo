import baseConfig from "./base.js";
import storybookPlugin from "eslint-plugin-storybook";

export default [
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
