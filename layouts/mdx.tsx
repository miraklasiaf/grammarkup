import * as chakraComponents from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/mdx-components'
import PageContainer from '@/components/page-container'
import Sidebar from '@/components/sidebar/sidebar'
import Pagination from '@/components/pagination'
import { beginnerSidebar, intermediateSidebar, advancedSidebar } from '@/configs/sidebar'
import { findRouteByPath, removeFromLast } from '@/utils/find-route-by-path'
import { getRouteContext } from '@/utils/get-route-context'

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
    <MDXProvider components={{ ...chakraComponents, ...MDXComponents }}>
      <PageContainer
        frontmatter={frontmatter}
        sidebar={<Sidebar routes={routes} display={['none', null, 'block']} />}
        pagination={
          <Pagination next={routeContext.nextRoute} previous={routeContext.prevRoute} />
        }
      >
        {children}
      </PageContainer>
    </MDXProvider>
  )
}
