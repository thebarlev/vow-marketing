import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer2"

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
}

export default withContentlayer(nextConfig)
