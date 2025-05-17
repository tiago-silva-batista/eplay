import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#111',
  white: '#eee',
  gray: '#333',
  green: '#10ac84',
  ligthGray: '#a3a3a3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

    body {
    background-color: ${colors.black};
    color: ${colors.white};
    margin-top: 40px;
    }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
