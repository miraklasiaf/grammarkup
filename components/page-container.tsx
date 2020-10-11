import { Box, Flex, chakra } from '@chakra-ui/core'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import EditPageLink from './edit-page-button'
import Header from './header'
import Container from './container'
import BottomNav from './bottom-nav'
import SEO from './seo'

const PageContainer = ({
  frontmatter,
  children,
  sidebar,
  pagination
}: {
  frontmatter: any
  children: React.ReactNode
  sidebar?: any
  pagination?: any
}) => {
  const { title, description, editUrl } = frontmatter

  return (
    <>
      <SEO title={title} description={description} />
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <Header />
      <Container>
        <Flex>
          {sidebar || null}
          <div style={{ flex: 1 }}>
            <SkipNavContent />
            <Box pt={3} px={[0, 0, 5]} mt="4.5rem" mx="auto" maxW="3xl" minH="80vh">
              <Box>
                <chakra.h1 apply="mdx.h1">{title}</chakra.h1>
              </Box>
              {children}
              <Box mt={10}>{editUrl && <EditPageLink href={editUrl} />}</Box>
              {pagination || null}
              <BottomNav />
            </Box>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default PageContainer
