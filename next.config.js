/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Set to true for Cloudflare Pages (optional)
  },
  webpack: (config, { isServer }) => {
    // Keeping Webpack cache for faster builds
    if (!isServer) {
      config.cache = true;
    }
    return config;
  },
};

module.exports = nextConfig;
