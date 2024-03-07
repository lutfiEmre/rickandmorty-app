/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'rickandmortyapi.com',
            },
        ],
    },
};

export default nextConfig;
