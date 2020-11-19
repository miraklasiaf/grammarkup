import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/components/common'
import { Nprogress } from '@/components/ui'
import { DefaultSeo } from 'next-seo'
import { siteConfig } from '@/configs'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="#0694a2" name="theme-color" />
        <meta content="#0694a2" name="msapplication-TileColor" />
        <meta content="/static/favicon/browserconfig.xml" name="msapplication-config" />

        <link href="/static/favicon/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicon/site.webmanifest" rel="manifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link href="/static/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/static/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link color="#4a9885" href="/static/favicon/safari-pinned-tab.svg" rel="mask-icon" />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        <meta name="monetization" content={process.env.ILP_URL} />
        <script
          data-ad-client="ca-pub-7966864664516090"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>

      <DefaultSeo {...siteConfig.seo} />

      <Nprogress />
      <ChakraProvider theme={theme} portalZIndex={40}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
