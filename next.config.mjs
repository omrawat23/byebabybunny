/** @type {import('next').NextConfig} */
const nextConfig = {
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
