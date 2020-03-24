import { createGlobalStyle } from 'styled-components';

//<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet">

export const GlobalStyles = createGlobalStyle`
  body, p, h1, h2 {
    font-family: 'Nanum Gothic', sans-serif;
    background: #333;
    color: white;
  }
  body {
    margin: 0;
  }
`;
