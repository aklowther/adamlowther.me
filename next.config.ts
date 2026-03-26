import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // Static exports do not ship the Next image optimization endpoint.
    unoptimized: true,
    remotePatterns: [
      new URL('https://applitrack.me/**'),
      new URL('https://external.lowther.me/adam/**'),
      new URL('https://cdn.buymeacoffee.com/**'),
    ],
  },
}

export default nextConfig;
