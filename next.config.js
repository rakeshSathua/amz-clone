/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images : {
    domains : ['pngimg.com'],
  }
};

module.exports = nextConfig;
