import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const COLORS = {
  white: '#ffffff',
  gray: '#939aa1',
  disabledGray: '#cccccc',
  blue: '#418ef6',
  orange: '#f69100',
  green: '#018d08',
  softDark: '#35393f',
  dark: '#161d25',
  hardDark: '#020202',
  black: '#000000',
}

export const FONT_FAMILY = {
  roboto: 'Roboto, sans-serif',
  lato: 'Lato, sans-serif',
}

export const TRANSITION = '0.15s ease-in-out'

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  *, h1 {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    font-family: ${FONT_FAMILY.roboto};
  }

  img {
    width: 100%;
  }
  /* Keep adding global styles here. */
`
