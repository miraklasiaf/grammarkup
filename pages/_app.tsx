import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/core'
import theme from '@/design-system'
import { Nprogress } from '@/components/ui'
import { DefaultSeo } from 'next-seo'
import { siteConfig } from '@/configs'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider resetCSS theme={theme} portalZIndex={40}>
        <DefaultSeo {...siteConfig.seo} />
        <Nprogress />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
