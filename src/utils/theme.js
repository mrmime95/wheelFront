import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const COLORS = {
  white: '#ffffff',
  gray: '#939aa1',
  blue: '#418ef6',
}

export const FONT_FAMILY = {
  roboto: 'Roboto, sans-serif',
  lato: 'Lato, sans-serif',
}

export const TRANSITION = '0.15s ease-in-out'

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
  }

  img {
    width: 100%;
  }
  /* Keep adding global styles here. */
`
