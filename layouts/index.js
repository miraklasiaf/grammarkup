import DocsContainer from '@/components/docs-container'
import docs from '@/configs/docs-sidebar'
import grammar from '@/configs/grammar-sidebar'

const defaultLayout = (frontmatter) => ({ children }) => {
  const routes = frontmatter.slug.startsWith('/grammar') ? grammar.routes : docs.routes

  return (
    <DocsContainer sidebarRoutes={routes} frontmatter={frontmatter}>
      {children}
    </DocsContainer>
  )
}

export default defaultLayout
