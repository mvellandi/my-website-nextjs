/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: __dirname,
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/projects',
            },
        ]
    },
}

module.exports = nextConfig
