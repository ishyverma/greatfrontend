/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.greatfrontend.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
