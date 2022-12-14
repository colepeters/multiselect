// NextJS custom app
// https://nextjs.org/docs/advanced-features/custom-app
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'normalize.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import theme from '../lib/theme'

// See FontAwesome NextJS setup guide at:
// https://fontawesome.com/docs/web/use-with/react/use-with
config.autoAddCss = false

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
