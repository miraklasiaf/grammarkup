import DocsContainer from '@/components/docs-container'
import beginner from '@/configs/beginner-sidebar'
import intermediate from '@/configs/intermediate-sidebar'
import advanced from '@/configs/advanced-sidebar'

const defaultLayout = (frontmatter) => ({ children }) => {
  const routes = frontmatter.slug.startsWith('/beginner')
    ? beginner.routes
    : frontmatter.slug.startsWith('/intermediate')
    ? intermediate.routes
    : advanced.routes

  return (
    <DocsContainer sidebarRoutes={routes} frontmatter={frontmatter}>
      {children}
    </DocsContainer>
  )
}

export default defaultLayout
