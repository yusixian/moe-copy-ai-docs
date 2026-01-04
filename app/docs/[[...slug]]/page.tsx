import { source } from "@/lib/source"
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle
} from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { createRelativeLink } from "fumadocs-ui/mdx"
import { getMDXComponents } from "@/mdx-components"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { generateBreadcrumbs } from "@/lib/breadcrumbs"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDXContent = page.data.body
  const breadcrumbs = generateBreadcrumbs(params.slug)
  const filePath = params.slug ? params.slug.join("/") + ".mdx" : "index.mdx"

  // Get last edit time from GitHub API
  const lastEditTime = await fetch(
    `https://api.github.com/repos/yusixian/moe-copy-ai-docs/commits?path=content/docs/${filePath}&page=1&per_page=1`,
    { next: { revalidate: 3600 } } // Cache for 1 hour
  )
    .then((res) => (res.ok ? res.json() : null))
    .then((commits) => (commits?.[0]?.commit?.committer?.date ? commits[0].commit.committer.date : null))
    .catch(() => null)

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={lastEditTime ? new Date(lastEditTime) : undefined}
      editOnGithub={{
        owner: "yusixian",
        repo: "moe-copy-ai-docs",
        sha: "main",
        path: `content/docs/${filePath}`
      }}
    >
      {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page)
          })}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description
  }
}
