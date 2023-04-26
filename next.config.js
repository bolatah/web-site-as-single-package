/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = nextConfig;

module.exports = {
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.resolve.modules = [path.resolve(__dirname, "node_modules")];
    }
    return config;
  },
};
