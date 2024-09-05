/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: "**",
                protocol: "https",
            },
        ],
    },
};

module.exports = nextConfig;
