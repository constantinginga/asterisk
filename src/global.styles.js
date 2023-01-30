import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F8F7F5;
    color: #292d28;

    @media screen and (max-width: 800px) {
        // padding: 10px;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: #292d28;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  flex: 1 1 auto;
  padding: 0 2.5rem;
`;
