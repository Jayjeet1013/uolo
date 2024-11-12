import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.auraui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
