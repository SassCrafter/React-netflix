import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-colors: #e50914;
    --primary-color: #EB4242;
    --footer-color: #757575;
  }

  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #fff;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }


`;
