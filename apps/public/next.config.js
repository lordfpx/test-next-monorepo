/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@acme/core"],
  // Static export so GitHub Pages can serve from pre-rendered output
  output: "export",
  images: {
    unoptimized: true
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"]
  }
};

export default nextConfig;
