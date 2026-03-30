import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer2"

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    qualities: [60, 75],
  },
  turbopack: {
    root: process.cwd(),
  },
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "vow.co.il" }],
      destination: "https://uxellent.com/:path*",
      permanent: true,
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.vow.co.il" }],
      destination: "https://uxellent.com/:path*",
      permanent: true,
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "app.vow.co.il" }],
      destination: "https://app.uxellent.com/:path*",
      permanent: true,
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "dsign.vow.co.il" }],
      destination: "https://dsign.uxellent.com/:path*",
      permanent: true,
    },
    {
      source: "/blog/ai-seo-engine",
      destination: "/blog/seo-ai-engine",
      permanent: true,
    },
    {
      source: "/en/seo",
      destination: "/en/seo-ai",
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
}

export default withBundleAnalyzer(withContentlayer(nextConfig))
