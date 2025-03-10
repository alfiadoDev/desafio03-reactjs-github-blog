import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    /* color: ${({ theme }) => theme.colors.text}; */
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 1rem Nunito, sans-serif;
  }
`