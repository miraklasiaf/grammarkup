import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { theme, FontFace } from '@/components/design-system'
import { NProgress } from '@/components/ui'
import { siteConfig } from '@/configs'
import { useAnalytics } from '@/lib/hooks'
import '@/styles/nprogress.css'

const App = ({ Component, pageProps }) => {
  useAnalytics()

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...siteConfig.seo} />
      <FontFace />
      <NProgress />
      <ChakraProvider theme={theme} portalZIndex={40}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
