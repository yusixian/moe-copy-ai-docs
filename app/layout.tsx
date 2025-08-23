import "@/app/global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL("https://moe-copy-ai.cosine.ren"),
  title: {
    template: "%s | MoeCopy AI",
    default: "MoeCopy AI - 萌萌哒的 AI 网页数据提取助手"
  },
  description:
    "MoeCopy AI 是一款基于 Plasmo 框架开发的轻量级浏览器扩展，能够智能识别并提取网页中的结构化数据，为 AI 模型提供高质量输入。",
  keywords: [
    "浏览器扩展",
    "Chrome扩展",
    "AI助手",
    "网页提取",
    "Plasmo",
    "xsAI"
  ],
  authors: [{ name: "cos", url: "https://x.com/_cosine_x" }],
  creator: "cos",
  openGraph: {
    title: "MoeCopy AI - 萌萌哒的 AI 网页数据提取助手",
    description: "智能识别并提取网页中的结构化数据，为 AI 模型提供高质量输入",
    url: "https://moe-copy-ai.cosine.ren",
    siteName: "MoeCopy AI",
    images: [
      {
        url: "/images/banner.webp",
        alt: "MoeCopy AI Banner"
      }
    ],
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "MoeCopy AI",
    description: "萌萌哒的 AI 网页数据提取助手",
    images: ["/images/banner.webp"]
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  manifest: "/manifest.json"
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script
            defer
            src="https://stats.cosine.ren/script.js"
            data-website-id="bd8679bb-85aa-4c50-beca-5f8dbd6a66a5"
          />
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
