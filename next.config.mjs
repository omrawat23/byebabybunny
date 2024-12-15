/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.graphassets.com'
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com'
          },
       {
       protocol: 'https',
       hostname: 'images.squarespace-cdn.com'
       },
              ]
        },
};

export default nextConfig;
