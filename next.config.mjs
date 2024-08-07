/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/*
remotePatterns: [
      {
        protocol: "https", // or http
        hostname: "upload.wikimedia.org", // if your website has no www, drop it
      },
      {
        protocol: "https", // or http
        hostname: "encrypted-tbn0.gstatic.com", // if your website has no www, drop it
      },
      {
        protocol: "https", // or http
        hostname: "static-00.iconduck.com", // if your website has no www, drop it
      },
      {
        protocol: "https", // or http
        hostname: "cdn.freebiesupply.com", // if your website has no www, drop it
      },
      {
        protocol: "https", // or http
        hostname: "asset.brandfetch.io", // if your website has no www, drop it
      },
      {
        protocol: "https", // or http
        hostname: "cdn4.iconfinder.com", // if your website has no www, drop it
      },
    ], */
