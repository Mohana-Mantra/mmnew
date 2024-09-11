/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // trailingSlash: true,
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                hostname: "**",
                protocol: "https",
            },
        ],
    },
};

module.exports = nextConfig;
