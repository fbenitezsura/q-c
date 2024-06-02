/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['.'],
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
