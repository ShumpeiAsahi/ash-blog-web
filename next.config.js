/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["user-images.githubusercontent.com"],
  },
};

module.exports = nextConfig;
