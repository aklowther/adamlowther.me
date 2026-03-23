import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
    remotePatterns: [
      new URL('https://applitrack.me/**'),
      new URL('https://external.lowther.me/adam/**'),
    ],
  },
};

export default nextConfig;
