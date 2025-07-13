import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.1.15'],
};

export default nextConfig;
