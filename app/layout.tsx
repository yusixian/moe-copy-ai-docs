import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moe-copy-ai.cosine.ren'),
  title: {
    template: '%s | MoeCopy AI',
    default: 'MoeCopy AI - 萌萌哒的 AI 网页数据提取助手',
  },
  description: 'MoeCopy AI 是一款基于 Plasmo 框架开发的浏览器扩展，能够智能识别并提取网页中的结构化数据，为 AI 模型提供高质量输入。',
  keywords: ['浏览器扩展', 'Chrome扩展', 'AI助手', '网页提取', 'Plasmo', 'xsAI'],
  authors: [{ name: 'cos', url: 'https://cosine.ren' }],
  creator: 'cos',
  openGraph: {
    title: 'MoeCopy AI - 萌萌哒的 AI 网页数据提取助手',
    description: '智能识别并提取网页中的结构化数据，为 AI 模型提供高质量输入',
    url: 'https://moe-copy-ai.cosine.ren',
    siteName: 'MoeCopy AI',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'MoeCopy AI Logo',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'MoeCopy AI',
    description: '萌萌哒的 AI 网页数据提取助手',
    images: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
