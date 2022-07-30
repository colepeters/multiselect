// NextJS custom document
// https://nextjs.org/docs/advanced-features/custom-document

// Styled Components setup adapted from the NextJS Styled Components example:
// https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx

import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
  static async getInitialProps(documentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = documentContext.renderPage

    try {
      documentContext.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(documentContext)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
