import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permit testing the development server from a phone on this local network.
  // This setting affects `next dev` only and does not weaken production CORS.
  allowedDevOrigins: ["192.168.29.89"],
};

export default nextConfig;
