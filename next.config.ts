import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        domains: ["lh3.googleusercontent.com", "upload.wikimedia.org"], // Add Googleusercontent hostname here
    },
};

export default nextConfig;
