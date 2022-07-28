// NextJS custom document
// https://nextjs.org/docs/advanced-features/custom-document

// Styled Components setup adapted from the NextJS Styled Components example:
// https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx

import Document from 'next/document'
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
}
