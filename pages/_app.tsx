import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/components/design-system'
import { NProgress } from '@/components/ui'
import { siteConfig } from '@/configs'
import { useAnalytics } from '@/lib/hooks'
import '@/styles/nprogress.css'
import '@/styles/font.css'

const App = ({ Component, pageProps }) => {
  useAnalytics()

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...siteConfig.seo} />
      <NProgress />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
