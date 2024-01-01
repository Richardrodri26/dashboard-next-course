/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // https://images.unsplash.com/photo-1542909168-82c3e7fdca5c
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      }

    ]
  }
}

module.exports = nextConfig
