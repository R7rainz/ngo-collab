/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          type: "asset/source",
          resourceQuery: /raw/,
        },
        {
          use: ['@svgr/webpack'],
        },
      ],
    })
    return config
  },
}

export default nextConfig
