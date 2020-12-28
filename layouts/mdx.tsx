import * as chakraComponents from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { MDX, BlogLayout, Sidebar } from '@/components/common'
import { Pagination } from '@/components/ui'
import { beginnerSidebar, intermediateSidebar, advancedSidebar } from '@/configs'
import { findRouteByPath, removeFromLast, getRouteContext } from '@/lib/docs'

export function getRoutes(slug: string) {
  const config = slug.startsWith('/beginner')
    ? beginnerSidebar
    : slug.startsWith('/intermediate')
    ? intermediateSidebar
    : advancedSidebar
  return config.routes
}

export default function MDXLayout({ frontmatter, children }) {
  const routes = getRoutes(frontmatter.slug)
  const route = findRouteByPath(removeFromLast(frontmatter.slug, '#'), routes)
  const routeContext = getRouteContext(route, routes)

  return (
    <MDXProvider components={{ ...chakraComponents, ...MDX }}>
      <BlogLayout
        frontmatter={frontmatter}
        sidebar={<Sidebar routes={routes} display={['none', null, 'block']} />}
        pagination={<Pagination next={routeContext.nextRoute} previous={routeContext.prevRoute} />}
      >
        {children}
      </BlogLayout>
    </MDXProvider>
  )
}
