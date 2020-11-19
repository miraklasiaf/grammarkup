import { Box, chakra, useColorModeValue } from '@chakra-ui/react'
import { BlogSEO, Header, Footer } from '@/components/common'
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
      <Header />
      <Container>
        <Box display={{ base: 'block', md: 'flex' }}>
          {sidebar || null}
          <div style={{ flex: 1 }}>
            <Box pt={3} px={[0, 0, 5]} mt="4.5rem" mx="auto" maxW="3xl" minH="80vh">
              <PageTransition>
                <Box>
                  <chakra.h1
                    tabIndex={-1}
                    outline={0}
                    apply="mdx.h1"
                    color={useColorModeValue('teal.900', 'hsl(53deg, 100%, 50%)')}
                  >
                    {title}
                  </chakra.h1>
                </Box>
                {children}
                {pagination || null}
              </PageTransition>
              <Footer />
              <BottomNav />
            </Box>
          </div>
        </Box>
      </Container>
    </>
  )
}

export default BlogLayout
