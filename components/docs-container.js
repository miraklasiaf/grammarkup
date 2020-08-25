import { Box, Flex, Heading } from '@chakra-ui/core'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import SEO from './seo'
import Container from './container'
import Header from './header'
import Pagination from './pagination'
import Footer from './footer'
import Sidebar from './sidebar/sidebar'
import EditPageLink from './edit-page-button'
import { findRouteByPath, removeFromLast } from '@/utils/find-route-by-path'
import { getRouteContext } from '@/utils/get-route-context'

const DocsContainer = ({ frontmatter, sidebarRoutes: routes, children }) => {
  const { title, description, slug, editUrl } = frontmatter

  const currentRoute = findRouteByPath(removeFromLast(slug, '#'), routes)

  console.log('route', currentRoute)
  console.log('routes', routes)

  const { prevRoute, nextRoute } = getRouteContext(currentRoute, routes)

  console.log('Previous', prevRoute)
  console.log('Next', nextRoute)

  return (
    <>
      <SEO title={title} description={description} />
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <Header />
      <Container>
        <Flex>
          <Sidebar routes={routes} display={['none', null, 'block']} />
          <div style={{ flex: 1 }}>
            <SkipNavContent />
            <Box pt={2} px={5} mx="auto" maxW="3xl" mt={16} minH="80vh">
              <Heading letterSpacing="tight" mt={4} as="h1" size="xl">
                {title}
              </Heading>
              {children}
              <Box mt={10}>{editUrl && <EditPageLink href={editUrl} />}</Box>
              <Pagination next={nextRoute} previous={prevRoute} />
            </Box>
            <Footer />
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default DocsContainer
