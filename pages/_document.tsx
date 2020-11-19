import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from '@chakra-ui/react'
import { GAScript } from '@/lib/ga'

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Head />
        <body>
          <GAScript />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
