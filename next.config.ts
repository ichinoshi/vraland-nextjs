import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel deployment (comment out for development)
  // Uncomment the line below when building for cPanel deployment
  output: process.env.DEPLOY_TARGET === 'cpanel' ? 'export' : undefined,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers for production
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Webpack configuration for better performance (only when not using Turbopack)
  webpack: (config: any, { buildId, dev, isServer, defaultLoaders, webpack }: any) => {
    // Skip webpack configuration if using Turbopack
    if (process.env.TURBOPACK) {
      return config;
    }

    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    };

    return config;
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Turbopack configuration (replaces experimental.turbo)
  turbopack: {
    rules: {
      // Configure Turbopack rules if needed
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
