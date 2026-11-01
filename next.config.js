/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
	domains: ['tr.rbxcdn.com']
  }
}

module.exports = nextConfig
