import PageContainer from '@/components/docs-container'
import docs from '@/configs/docs-sidebar'
import grammar from '@/configs/grammar-sidebar'

const defaultLayout = (frontmatter) => ({ children }) => {
  const routes = frontmatter.slug.startsWith('/grammar') ? grammar.routes : docs.routes

  return (
    <PageContainer sidebarRoutes={routes} frontmatter={frontmatter}>
      {children}
    </PageContainer>
  )
}

export default defaultLayout
