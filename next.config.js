/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static01.nyt.com', 'i.pinimg.com','wallpaperaccess.com', 'ipfs.io', 'cloudflare-ipfs.com', 'wallpaperaccess.com', 'i.ytimg.com'],
  }
}

module.exports = nextConfig
