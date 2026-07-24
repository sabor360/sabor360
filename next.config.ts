import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Figma exports are already production-sized and compressed. Serving
  // them directly keeps local previews and the deployed Worker independent of
  // an optional Cloudflare Images binding.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
