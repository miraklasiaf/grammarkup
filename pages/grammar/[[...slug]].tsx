import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Error from 'next/error'
import hydrate from 'next-mdx-remote/hydrate'
import { Box, chakra, useColorModeValue } from '@chakra-ui/react'
import { fetchDataManifest, getPostBySlug } from '@/lib/mdx'
import { getSlug, getPaths, findRouteByPath, getRouteContext, removeFromLast } from '@/lib/docs'
import { PageTransition, Container, BottomNav, Pagination } from '@/components/ui'
import { MDX, Sidebar, Header, Footer, Heading, Category, Post } from '@/components/common'

function getCategoryPath(routes) {
  const route = routes.find((r) => r.path)
  return route && removeFromLast(route.path, '/')
}

function SidebarRoutes({ routes: currentRoutes }) {
  const { query } = useRouter()
  const { slug } = getSlug('grammar', query)

  return currentRoutes.map(({ path, title, routes, heading, open }) => {
    if (routes) {
      const pathname = getCategoryPath(routes)
      const selected = slug.startsWith(pathname)
      const opened = selected || open

      if (heading) {
        return (
          <Heading key={pathname} title={title}>
            <SidebarRoutes routes={routes} />
          </Heading>
        )
      }

      return (
        <Category key={pathname} title={title} selected={selected} opened={opened}>
          <SidebarRoutes routes={routes} />
        </Category>
      )
    }

    const href = '/grammar/[[...slug]]'
    const pagePath = removeFromLast(path, '.')
    const pathname = pagePath
    const selected = slug.startsWith(pagePath)
    const route = { href, path, title, pathname, selected }

    return <Post key={title} route={route} />
  })
}

export default function Grammar({ mdxSource, frontMatter, routes, route: _route }) {
  const content = hydrate(mdxSource || {}, {
    components: MDX
  })
  const color = useColorModeValue('teal.900', 'hsl(53deg, 100%, 50%)')

  const router = useRouter()
  const { isFallback } = router
  //@ts-expect-error
  const { route, prevRoute, nextRoute } = _route ? getRouteContext(_route, routes) : {}

  if (!route && !isFallback) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Header />
      {route ? (
        <Container>
          <Box display={{ base: 'block', md: 'flex' }}>
            <Sidebar display={['none', null, 'block']}>
              <SidebarRoutes routes={routes} />
            </Sidebar>
            <div style={{ flex: 1 }}>
              <Box pt={3} px={[0, 0, 5]} mt="4.5rem" mx="auto" maxW="3xl" minH="80vh">
                <PageTransition>
                  <Box>
                    <chakra.h1 tabIndex={-1} outline={0} apply="mdx.h1" color={color}>
                      {frontMatter?.title}
                    </chakra.h1>
                  </Box>
                  {content}
                  <Pagination next={nextRoute} previous={prevRoute} />
                </PageTransition>
                <Footer />
                <BottomNav />
              </Box>
            </div>
          </Box>
        </Container>
      ) : (
        <Container />
      )}
    </>
  )
}

export async function getStaticPaths() {
  const manifest = await fetchDataManifest('grammar')

  return { paths: getPaths(manifest.routes), fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = getSlug('grammar', params)
  const manifest = await fetchDataManifest('grammar')

  const route = manifest && findRouteByPath(slug, manifest.routes)

  if (!route) return { props: {} }

  const { mdxSource, frontMatter } = await getPostBySlug(route.path)

  return { props: { mdxSource, frontMatter, routes: manifest.routes, route } }
}
