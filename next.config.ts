/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "", // No basePath needed since it's served from the root
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
