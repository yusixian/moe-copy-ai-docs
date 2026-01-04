import { source } from "@/lib/source"

export function generateBreadcrumbs(slug?: string[]) {
  if (!slug || slug.length === 0) {
    return []
  }

  const breadcrumbs = []
  let currentPath = ""

  for (let i = 0; i < slug.length; i++) {
    currentPath += (i > 0 ? "/" : "") + slug[i]
    const page = source.getPage(slug.slice(0, i + 1))

    if (page) {
      breadcrumbs.push({
        title: page.data.title,
        href: `/docs/${currentPath}`
      })
    }
  }

  return breadcrumbs
}
