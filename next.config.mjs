import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/beginner/:path*',
        destination: '/learn/beginner/:path*',
        permanent: true,
      },
      {
        source: '/intermediate/:path*',
        destination: '/learn/intermediate/:path*',
        permanent: true,
      },
      {
        source: '/advanced/:path*',
        destination: '/learn/advanced/:path*',
        permanent: true,
      }
    ];
  },
};

export default withMDX(config);
