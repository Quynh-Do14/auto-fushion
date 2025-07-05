/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['giphy.com', 'media.giphy.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'autofusion.vn/',
        pathname: '/api/uploads/**'
      },
      {
        protocol: 'http',
        hostname: 'autofusion.vn/',
        pathname: '/api/uploads/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/api/uploads/**'
      }
    ]
  },
  reactStrictMode: true,
  transpilePackages: ['antd']
}

module.exports = nextConfig
