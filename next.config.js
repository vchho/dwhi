/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // this feels gross but it's here for now
  },
};

module.exports = nextConfig;
