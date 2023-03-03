import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  :root {
    --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --animation-duration: 250ms;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

`;

export const Button = styled.button`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid grey;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  transition: box-shadow var(--animation-duration) var(--timing-function);

  :hover {
    background-color: lightblue;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
