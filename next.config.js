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
      // statusCode 301 (not `permanent: true`, which emits a 308) per the
      // agreed SEO handling for the removed pages.
      {
        source: '/services/commercial-construction',
        destination: '/services',
        statusCode: 301,
      },
      {
        source: '/services/project-management',
        destination: '/services',
        statusCode: 301,
      },
    ];
  },
}

module.exports = nextConfig
