import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "git-stats.cosine.ren"
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats-rust-tau.vercel.app"
      },
      {
        protocol: "https",
        hostname: "wakatime.com"
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment"
  }
}

export default withMDX(config)
