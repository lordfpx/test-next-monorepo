const isGithubPages = process.env.GITHUB_PAGES === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
// Sur Pages, l'app est servie depuis /<repo>. En dehors, on ne définit pas de basePath.
const basePath =
  isGithubPages && repository && !repository.endsWith(".github.io") ? `/${repository}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/core", "@repo/public-section", "@repo/client-section"],
  ...(isGithubPages
    ? {
        output: "export",
        basePath: basePath || undefined,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
        images: { unoptimized: true }
      }
    : {})
};

export default nextConfig;
