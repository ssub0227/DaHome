import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  @font-face {
    font-family: 'Ownglyph_ParkDaHyun';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html,body{
    width: 100%;
    height: 100%;
    color: var(--brown);
  }

  body {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root{
    width: 100%;
    height: 100%;
  }

  body,
  input,
  textarea,
  select,
  table,
  button,
  code {
    font-family: 'Ownglyph_ParkDaHyun';
    font-size: 18px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .hidden,
  [hidden] {
    display: none !important;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  select,
  input,
  textarea,
  button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input:disabled {
    background-color: rgba(255, 255, 255, 0);
    cursor: not-allowed;
  }

  select {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  input,
  textarea {
    font-size: inherit;
    border: 0;
  }

  input::placeholder,
  textarea::placeholder {
    /* Chrome, Safari, Firefox */
    color: #c9c9c9;
    opacity: 1;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* IE, Edge */
    color: #c9c9c9;
    opacity: 1;
  }

  input[readonly]::placeholder,
  input:disabled::placeholder,
  textarea[readonly]::placeholder,
  textarea:disabled::placeholder {
    /* Chrome, Safari, Firefox */
    color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }

  input[readonly]:-ms-input-placeholder,
  input:disabled:-ms-input-placeholder,
  textarea[readonly]:-ms-input-placeholder,
  textarea:disabled:-ms-input-placeholder {
    /* IE, Edge */
    color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }

  input::-ms-clear,
  input::-ms-reveal,
  textarea::-ms-clear,
  textarea::-ms-reveal {
    /* IE, Edge */
    display: none;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button,
  textarea::-webkit-inner-spin-button,
  textarea::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

`

export default GlobalStyles;