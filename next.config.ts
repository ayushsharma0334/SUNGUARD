import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'vsdstudio.in',
      port: '',
      pathname: '/wp-content/uploads/2025/05/sssssssssssss.png',
    },
  ],
},
};

export default nextConfig;
