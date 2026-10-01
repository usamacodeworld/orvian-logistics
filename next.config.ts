import type { NextConfig } from "next";

const repo = "orvian-logistics";
const isGhPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGhPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: isGhPages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
