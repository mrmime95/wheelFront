import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const COLORS = {
  white: '#ffffff',
  gray: '#939aa1',
  disabledGray: '#cccccc',
  blue: '#418ef6',
  darkBlue: '#18218c',
  red: '#ce2929',
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

const BREAKPOINTS = {
  mobile: 480,
  tablet: 720,
  laptop: 960,
  desktop: 1200,
}

/**
 * Creates a media query.
 * @param {number} size Size of the breakpoint
 * @param {string} minMax min or max, reflecting 'min-width' or 'max-width'.
 */
export function createMediaQuery(size, minMax = 'min') {
  return `@media only screen and (${minMax}-width:${size}px)`
}

/**
 * Media query for mobile breakpoint and up.
 */
export function mobileAndUp() {
  return createMediaQuery(BREAKPOINTS.mobile)
}

/**
 * Media query for tablet breakpoint and up.
 */
export function tabletAndUp() {
  return createMediaQuery(BREAKPOINTS.tablet)
}

/**
 * Media query for laptop breakpoint and up.
 */
export function laptopAndUp() {
  return createMediaQuery(BREAKPOINTS.laptop)
}

// Keep adding style specific util functions here.

/**
 * Media query for desktop breakpoint and up.
 */
export function desktopAndUp() {
  return createMediaQuery(BREAKPOINTS.desktop)
}
