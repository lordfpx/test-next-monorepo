import baseConfig from "./base.js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  ...baseConfig,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      // Libraries using Next components (outside of a Next app) don't have a pages directory.
      "@next/next/no-html-link-for-pages": "off"
    }
  }
];
