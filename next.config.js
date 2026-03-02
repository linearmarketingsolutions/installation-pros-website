/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false, path: false, canvas: false };
    return config;
  },
};

module.exports = nextConfig;