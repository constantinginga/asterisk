import styled, {createGlobalStyle} from 'styled-components';

export const MainLightColor = '#F8F7F5';
export const MainDarkColor = '#292d28';
export const BorderColor = '#cecece';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${MainLightColor};
    color: ${MainDarkColor};
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: ${MainDarkColor};
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

  @media screen and (max-width: 800px) {
    padding: 0 0.75rem;
}
`;
