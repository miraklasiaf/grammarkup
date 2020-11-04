import * as chakraComponents from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { BlogLayout, MDX } from '@/components/core'
import { Sidebar, Pagination } from '@/components/ui'
import { beginnerSidebar, intermediateSidebar, advancedSidebar } from '@/configs'
import { findRouteByPath, removeFromLast, getRouteContext } from '@/utils'

export default function MDXLayout({ frontmatter, children }) {
  const { slug } = frontmatter

  const config = slug.startsWith('/beginner')
    ? beginnerSidebar
    : slug.startsWith('/intermediate')
    ? intermediateSidebar
    : advancedSidebar

  const { routes } = config

  const route = findRouteByPath(removeFromLast(slug, '#'), routes)
  const routeContext = getRouteContext(route, routes)

  return (
    <MDXProvider components={{ ...chakraComponents, ...MDX }}>
      <BlogLayout
        frontmatter={frontmatter}
        sidebar={<Sidebar routes={routes} display={['none', null, 'block']} />}
        pagination={
          <Pagination next={routeContext.nextRoute} previous={routeContext.prevRoute} />
        }
      >
        {children}
      </BlogLayout>
    </MDXProvider>
  )
}
