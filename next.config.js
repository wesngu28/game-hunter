const { hostname } = require('os')

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
      },
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
      }
    ]
  }
}

module.exports = nextConfig
