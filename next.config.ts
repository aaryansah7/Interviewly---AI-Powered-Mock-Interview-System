// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Property exists in runtime, not in NextConfig types
  eslint: {
    ignoreDuringBuilds: true,
  },

  // @ts-ignore - Property exists in runtime, not in NextConfig types
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
