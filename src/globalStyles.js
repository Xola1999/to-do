// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px;
    margin-left: 4px;
    cursor: pointer;
    border-radius: 4px;
  }

  button:hover {
    background-color: #45a049;
  }
`;

export default GlobalStyle;
