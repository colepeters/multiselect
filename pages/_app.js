// NextJS custom app
// https://nextjs.org/docs/advanced-features/custom-app
import 'normalize.css'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import theme from '../lib/theme'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
