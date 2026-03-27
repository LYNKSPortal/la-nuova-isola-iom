import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
  },
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
