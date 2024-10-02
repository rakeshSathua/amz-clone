/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["pngimg.com", "media.graphassets.com", "ap-south-1.graphassets.com"],
  },
};

module.exports = nextConfig;
