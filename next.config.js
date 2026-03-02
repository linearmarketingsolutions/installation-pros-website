/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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