import { createGlobalStyle } from 'styled-components';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    * {
      outline: none !important;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  code {
    background-color: #333333;
    color: #ed6a6a;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 14px;
  }

  body {
    background-color: ${p => p.theme.secondary};
    color: ${p => p.theme.primary};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  /* Hide "key" icon in Safari browser */
  input[type="password"]::-webkit-textfield-decoration-container {
    visibility: hidden;
  }

  .Introduction {
    margin: 16px;
  }

  .included,
  .prepared,
  .folder-structure {
    margin: 8px 32px;
  }
`;
