/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@acme/core"],
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"]
  }
};

module.exports = nextConfig;
