import { Box, Flex, chakra } from '@chakra-ui/core'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import EditPageLink from './edit-page-button'

import SEO from '@/components/seo'
import Container from './container'
import Header from './header'
import Pagination from './pagination'
import Footer from './footer'

import Sidebar from '@/components/sidebar/sidebar'
import { findRouteByPath, removeFromLast } from '@/utils/find-route-by-path'
import { getRouteContext } from '@/utils/get-route-context'

const DocsContainer = ({ frontmatter, sidebarRoutes: routes, children }) => {
  const { title, description, slug, editUrl } = frontmatter

  const route = findRouteByPath(removeFromLast(slug, '#'), routes)
  const { prevRoute, nextRoute } = getRouteContext(route, routes)

  return (
    <>
      <SEO title={title} description={description} />
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <Header />
      <Container>
        <Flex>
          <Sidebar routes={routes} />
          <div style={{ flex: 1 }}>
            <SkipNavContent />
            <Box pt={3} px={5} mt={18} mx="auto" maxW="3xl" minH="80vh">
              <Box>
                <chakra.h1 apply="mdx.h1">{title}</chakra.h1>
              </Box>
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
