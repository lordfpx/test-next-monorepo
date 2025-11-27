/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile workspace package so Next can handle its CSS modules and TS
  transpilePackages: ["@acme/core"],
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"]
  }
};

module.exports = nextConfig;
