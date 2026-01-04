import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-fd-primary px-2 py-1 text-xs font-medium text-fd-primary-foreground">
      {children}
    </span>
  )
}

// Custom video component to avoid SSR hydration errors
function Video(props: React.VideoHTMLAttributes<HTMLVideoElement>) {
  return <video {...props} />
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Badge,
    video: Video,
    ...components
  }
}

export const useMDXComponents = getMDXComponents
