import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    display: grid;
    place-items: center;
    min-height: 100vh;
    overflow: hidden;

  }

  button { 
    background-color: transparent;

    &:focus-visible{ 
      outline: none;
    }
  }

  a { 
    text-decoration: none;
  }

  ul,li {
    list-style: none;
  }

  
`;
