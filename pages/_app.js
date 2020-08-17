import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/core'
import theme from '@/design-system'
import Nprogress from '@/components/nprogress'
import { DefaultSeo } from 'next-seo'
import siteConfig from '@/configs/site-config'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/mdx-components'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <DefaultSeo {...siteConfig.seo} />
        <Nprogress />
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </ChakraProvider>
    </>
  )
}

export default App
