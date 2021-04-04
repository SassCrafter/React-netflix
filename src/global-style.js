import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-color: #737373;
    --primary-color: #E50914;
    --error-color: #E87C03;
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
