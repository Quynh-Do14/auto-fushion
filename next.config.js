/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['giphy.com', 'media.giphy.com', '103.130.215.248'], // 👈 Thêm IP vào đây
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'autofusion.vn',
        pathname: '/api/uploads/**'
      },
      {
        protocol: 'http',
        hostname: 'autofusion.vn',
        pathname: '/api/uploads/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/api/uploads/**'
      },
      {
        protocol: 'http',
        hostname: '103.130.215.248',
        port: '43216',
        pathname: '/api/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'api.autofusion.vn',
        pathname: '/api/uploads/**'
      }
    ]
  },
  reactStrictMode: true,
  transpilePackages: ['antd']
}

module.exports = nextConfig
