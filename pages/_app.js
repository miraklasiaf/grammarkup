import Head from 'next/head'
import { ChakraProvider, useColorModeValue } from '@chakra-ui/core'
import { Global, css } from '@emotion/core'
import theme from '@/design-system'
import Nprogress from '@/components/nprogress'
import { DefaultSeo } from 'next-seo'
import siteConfig from '@/configs/site-config'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/mdx-components'
import { prismLightTheme, prismDarkTheme } from '@/styles/prism'

const GlobalStyle = ({ children }) => {
  const color = useColorModeValue(prismLightTheme, prismDarkTheme)

  return (
    <>
      <Global
        styles={css`
          ${color};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <GlobalStyle>
          <DefaultSeo {...siteConfig.seo} />
          <Nprogress />
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </GlobalStyle>
      </ChakraProvider>
    </>
  )
}

export default App
