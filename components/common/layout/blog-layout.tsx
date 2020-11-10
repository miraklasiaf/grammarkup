import { Box, Flex, chakra } from '@chakra-ui/core'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import { BlogSEO, Header } from '@/components/common'
import { PageTransition, Container, BottomNav } from '@/components/ui'

interface Props {
  frontmatter: any
  children: React.ReactNode
  sidebar?: any
  pagination?: any
}

const BlogLayout = ({ frontmatter, children, sidebar, pagination }: Props) => {
  const { title, description } = frontmatter

  return (
    <>
      <BlogSEO title={title} description={description} slug={frontmatter.slug} />
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <Header />
      <Container>
        <Flex>
          {sidebar || null}
          <div style={{ flex: 1 }}>
            <SkipNavContent />
            <Box pt={3} px={[0, 0, 5]} mt="4.5rem" mx="auto" maxW="3xl" minH="80vh">
              <PageTransition>
                <Box>
                  <chakra.h1 apply="Blog.h1">{title}</chakra.h1>
                </Box>
                {children}
                {pagination || null}
              </PageTransition>
              <BottomNav />
            </Box>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default BlogLayout
