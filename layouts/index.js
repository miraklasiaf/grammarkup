import DocsContainer from '@/components/docs-container'
import guides from '@/configs/guides-sidebar'
import grammar from '@/configs/grammar-sidebar'

const defaultLayout = (frontmatter) => ({ children }) => {
  const routes = frontmatter.slug.startsWith('/grammar') ? grammar.routes : guides.routes

  return (
    <DocsContainer sidebarRoutes={routes} frontmatter={frontmatter}>
      {children}
    </DocsContainer>
  )
}

export default defaultLayout
