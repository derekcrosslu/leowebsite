/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
              frame-src 'self' https://player.vimeo.com;
              connect-src 'self' https://vitals.vercel-insights.com;
            `
              .replace(/\s{2,}/g, ' ')
              .trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
