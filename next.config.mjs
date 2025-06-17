/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Tắt kiểm tra type TypeScript khi build
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
