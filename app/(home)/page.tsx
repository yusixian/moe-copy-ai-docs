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

      <p className="mb-4 max-w-2xl text-xl font-medium text-fd-foreground">
      ✨ 萌萌哒的 AI 网页数据提取助手 ✨
      </p>

      <p className="mb-8 max-w-3xl text-base text-fd-muted-foreground">
        基于 Plasmo 框架开发的浏览器扩展，支持智能识别网页结构化数据、批量抓取、AI 内容摘要，为 AI 模型提供高质量输入
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
          href="https://addons.mozilla.org/zh-CN/firefox/addon/moe-copy-ai/"
          target="_blank"
          className="rounded-lg border border-fd-border bg-fd-background px-6 py-3 font-semibold transition-colors hover:bg-fd-muted">
          Firefox 商店安装
        </Link>

        <Link
          href="https://github.com/yusixian/moe-copy-ai"
          target="_blank"
          className="rounded-lg border border-fd-border bg-fd-background px-6 py-3 font-semibold transition-colors hover:bg-fd-muted">
          GitHub 源码
        </Link>

        <Link
          href="https://discord.gg/XzvrvNMcSe"
          target="_blank"
          className="rounded-lg border border-fd-border bg-fd-background px-6 py-3 font-semibold transition-colors hover:bg-fd-muted">
          加入 Discord
        </Link>
      </div>

      <div className="mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-fd-border bg-fd-card p-6 text-left transition-shadow hover:shadow-lg">
          <h3 className="mb-3 text-xl font-bold text-fd-foreground">
            智能内容提取
          </h3>
          <p className="mb-3 text-sm text-fd-muted-foreground">
            自动识别文章主体、标题、作者和发布日期，支持选择器、Readability 和混合三种抓取模式
          </p>
          <ul className="space-y-1 text-sm text-fd-muted-foreground">
            <li>• 高质量 Markdown 转换</li>
            <li>• 字数与 Token 统计</li>
            <li>• 图片与元数据提取</li>
          </ul>
        </div>

        <div className="rounded-lg border border-fd-border bg-fd-card p-6 text-left transition-shadow hover:shadow-lg">
          <h3 className="mb-3 text-xl font-bold text-fd-foreground">
            批量抓取处理
          </h3>
          <p className="mb-3 text-sm text-fd-muted-foreground">
            侧边栏模式支持批量抓取多个链接，可视化选择器与智能链接提取
          </p>
          <ul className="space-y-1 text-sm text-fd-muted-foreground">
            <li>• 正则过滤与 8 种预设规则</li>
            <li>• 三种抓取策略可选</li>
            <li>• ZIP 打包导出文档</li>
          </ul>
        </div>

        <div className="rounded-lg border border-fd-border bg-fd-card p-6 text-left transition-shadow hover:shadow-lg">
          <h3 className="mb-3 text-xl font-bold text-fd-foreground">AI 智能增强</h3>
          <p className="mb-3 text-sm text-fd-muted-foreground">
            集成 xsAI SDK，支持自定义 AI 摘要提示词和内容智能处理
          </p>
          <ul className="space-y-1 text-sm text-fd-muted-foreground">
            <li>• 内容摘要与总结</li>
            <li>• 自定义提示词变量</li>
            <li>• 摘要历史记录</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
