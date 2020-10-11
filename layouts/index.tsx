import PageContainer from "@/components/page-container"
import dynamic from "next/dynamic"

const MDXLayout = dynamic(() => import("./mdx"))

export default function DefaultLayout({ frontMatter, children }) {
  const { slug } = frontMatter

  if (
    slug.startsWith("/beginner") ||
    slug.startsWith("/intermediate") ||
    slug.startsWith("/advanced")
  ) {
    return <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>
  }

  return <PageContainer frontmatter={frontMatter}>{children}</PageContainer>
}
