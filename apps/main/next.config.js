const isCi = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
// On GitHub Pages the site is served from /<repo>, not root. Leave local/dev unchanged.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isCi && repository && !repository.endsWith(".github.io") ? `/${repository}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/core", "@repo/public-section", "@repo/client-section"],
  // Static export so GitHub Pages can serve from pre-rendered output
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
