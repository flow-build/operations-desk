import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
  #root {
    font-size: 87.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
  }

  body, input, button, textarea {
    border: 0;
    outline: none;
    background: none;
    font: 500 1rem Poppins;
    color: ${colors.Primary}
  }

  @media (min-width: 700px) {
    #root {
      font-size: 93.75%;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${colors.Primary_600}; 
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.Primary_700}; 
    }
  }
`;
