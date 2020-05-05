import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const COLORS = {
  white: '#ffffff',
  galleryWhite: '#efefef',
  secondaryGray: '#e4e7eb',

  silver: '#cccccc',
  lightSilver: '#dddddd',
  darkSilver: '#999999',

  gray: '#495057',
  lightGray: '#c8c9ce',
  mineGray: '#333333',

  purple: '#872c7e',

  pink: '#fa9696',

  red: '#e3163a',
  roseRed: '#f8d6dc',

  yellow: '#ffc44c',

  orange: '#ff7733',
  lightOrange: '#ffede4',
  sunSetOrange: '#fde6db',

  green: '#7cc253',

  blue: '#80bdff',
  activeBlue: '#00a0d0',
  lagoonBlue: '#006584',
  waterBlue: '#d4edf6',
  lightBlue: '#ccdefd',
  grayBlue: '#758396',
  darkBlue: '#2c3e50',

  dark: '#111111',
  softDark: '#212529',
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
