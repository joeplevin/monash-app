/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "monash-bucket-w20039602.s3.eu-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
