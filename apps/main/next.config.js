/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/core", "@repo/public-section", "@repo/client-section"]
};

export default nextConfig;
