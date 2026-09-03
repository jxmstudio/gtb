/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      // Services removed from the offering (Sep 2026) — 301 to the
      // services overview so old backlinks / indexed URLs keep working.
      {
        source: '/services/commercial-construction',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/project-management',
        destination: '/services',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
