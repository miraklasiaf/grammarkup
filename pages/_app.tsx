import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { theme, FontFace } from '@/components/design-system'
import { Nprogress } from '@/components/ui'
import { siteConfig } from '@/configs'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <FontFace />
      <DefaultSeo {...siteConfig.seo} />
      <Nprogress />
      <ChakraProvider theme={theme} portalZIndex={40}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
