/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com'
      }
    ]
  }
}

module.exports = nextConfig
