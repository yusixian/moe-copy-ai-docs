import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 flex h-48 w-full items-center justify-center">
        <Image
          src="/img/banner.webp"
          alt="MoeCopy AI Logo"
          objectFit="contain"
          fill
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <h1 className="mb-4 text-4xl font-bold text-fd-foreground">MoeCopy AI</h1>

      <p className="mb-8 max-w-2xl text-xl text-fd-muted-foreground">
        ✨ 萌萌哒的 AI 网页数据提取助手 ✨
      </p>

      <p className="mb-8 max-w-3xl text-lg text-fd-muted-foreground">
        基于 Plasmo
        框架开发的浏览器扩展，能够智能识别并提取网页中的结构化数据，为 AI
        模型提供高质量输入。
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/docs"
          className="rounded-lg border border-fd-border bg-fd-background px-6 py-3 font-semibold transition-colors hover:bg-fd-muted">
          查看文档
        </Link>

        <Link
          href="https://chromewebstore.google.com/detail/moe-copy-ai/dfmlcfckmfgabpgbaobgapdfmjiihnck"
          target="_blank"
          className="rounded-lg border border-fd-border bg-fd-background px-6 py-3 font-semibold transition-colors hover:bg-fd-muted">
          Chrome 商店安装
        </Link>

        <Link
          href="https://github.com/yusixian/moe-copy-ai"
          target="_blank"
          className="rounded-lg border border-fd-border bg-fd-background px-6 py-3 font-semibold transition-colors hover:bg-fd-muted">
          GitHub 源码
        </Link>
      </div>

      <div className="mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-left">
          <h3 className="mb-2 text-lg font-semibold">🚀 智能提取</h3>
          <p className="text-fd-muted-foreground">
            自动识别文章主体、标题、作者和发布日期，支持多种抓取模式
          </p>
        </div>

        <div className="text-left">
          <h3 className="mb-2 text-lg font-semibold">🤖 AI 增强</h3>
          <p className="text-fd-muted-foreground">
            集成 xsAI SDK，支持自定义 AI 摘要提示词，智能处理内容
          </p>
        </div>

        <div className="text-left">
          <h3 className="mb-2 text-lg font-semibold">📱 移动适配</h3>
          <p className="text-fd-muted-foreground">
            响应式设计，完美支持 Kiwi 等移动端浏览器使用
          </p>
        </div>
      </div>
    </main>
  )
}
