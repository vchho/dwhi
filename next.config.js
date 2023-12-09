/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // this feels gross but it's here for now
  },
};

module.exports = nextConfig;
