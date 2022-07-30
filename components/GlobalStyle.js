import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: ${(props) => props.theme.colors.gray100};
    color: ${(props) => props.theme.colors.black};
    line-height: 1.5;
    font-family: Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  p {
    margin: 0;
  }
`

export default GlobalStyle
