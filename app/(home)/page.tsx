import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="flex flex-1 justify-center text-center flex-col items-center px-4">
      <div className="mb-8 flex items-center justify-center">
        <Image
          src="/icon.png"
          alt="MoeCopy AI Logo"
          width={120}
          height={120}
          className="rounded-2xl shadow-lg"
        />
      </div>
      
      <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        MoeCopy AI
      </h1>
      
      <p className="text-xl text-fd-muted-foreground mb-8 max-w-2xl">
        ✨ 萌萌哒的 AI 网页数据提取助手 ✨
      </p>
      
      <p className="text-lg text-fd-muted-foreground mb-8 max-w-3xl">
        基于 Plasmo 框架开发的浏览器扩展，能够智能识别并提取网页中的结构化数据，为 AI 模型提供高质量输入。
      </p>
      
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/docs"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
          查看文档
        </Link>
        
        <Link
          href="https://chromewebstore.google.com/detail/moe-copy-ai/dfmlcfckmfgabpgbaobgapdfmjiihnck"
          target="_blank"
          className="px-6 py-3 bg-fd-background border border-fd-border rounded-lg font-semibold hover:bg-fd-muted transition-colors">
          Chrome 商店安装
        </Link>
        
        <Link
          href="https://github.com/yusixian/moe-copy-ai"
          target="_blank"
          className="px-6 py-3 bg-fd-background border border-fd-border rounded-lg font-semibold hover:bg-fd-muted transition-colors">
          GitHub 源码
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">🚀 智能提取</h3>
          <p className="text-fd-muted-foreground">
            自动识别文章主体、标题、作者和发布日期，支持多种抓取模式
          </p>
        </div>
        
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">🤖 AI 增强</h3>
          <p className="text-fd-muted-foreground">
            集成 xsAI SDK，支持自定义 AI 摘要提示词，智能处理内容
          </p>
        </div>
        
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">📱 移动适配</h3>
          <p className="text-fd-muted-foreground">
            响应式设计，完美支持 Kiwi 等移动端浏览器使用
          </p>
        </div>
      </div>
    </main>
  )
}
