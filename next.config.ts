/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config: { module: { rules: { test: RegExp; use: string; }[]; }; }) => {
    // Add support for importing markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;