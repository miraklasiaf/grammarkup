import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/core'
import SideNav from './sidebar/sidebar'
import BottomNav from './bottom-nav'
import Header from './header'
import { Footer } from './footer'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from './mdx-components'

const Main = (props) => <Box as="main" minH="72vh" pt={8} px={5} mt={16} {...props} />

const HomeLayout = ({ children }) => (
  <Box>
    <Header />
    <SkipNavContent />
    {children}
  </Box>
)

const GrammarLayout = ({ children }) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Header />
      <Box>
        <SideNav w="full" maxWidth={72} display={['none', null, 'block']} />
        <Box pl={[0, null, 72]} py={2} mb={20}>
          <SkipNavContent />
          <Main>{children}</Main>
          <Footer />
        </Box>
      </Box>
    </MDXProvider>
  )
}

const GuidesLayout = ({ children }) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Header />
      <Box mb="80px">
        <SkipNavContent />
        <Main>{children}</Main>
        <Footer />
      </Box>
    </MDXProvider>
  )
}

function getLayout(context) {
  switch (context) {
    case 'grammar':
      return GrammarLayout
    case 'guides':
      return GuidesLayout
    default:
      return HomeLayout
  }
}

const Layout = ({ children, pageContext }) => {
  const { pathname } = useRouter()
  const Container = pageContext ? getLayout(pageContext.layout) : React.Fragment

  return (
    <>
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <Container pathname={pathname}>{children}</Container>
      <BottomNav />
    </>
  )
}

export default Layout
