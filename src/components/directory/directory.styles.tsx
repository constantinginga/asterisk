import styled from 'styled-components';

import { Wrapper } from '../../global.styles';

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;

  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 3rem;

    span {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1.2rem;
  }

  a {
    margin-top: 1rem;
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const HeaderImgContainer = styled.div`
  flex: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-left: 7.5px;
  gap: 0 2rem;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    ${HeaderTextContainer} {
      flex: 2;
    }

    ${HeaderImgContainer} {
      flex: 3;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    ${HeaderImgContainer} {
      width: 500px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 550px) {
    ${HeaderImgContainer} {
      width: 300px;
    }

    ${HeaderTextContainer} {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const DirectoryContainer = styled(Wrapper)`
  margin: 2rem 0;
`;

export const DirectoryItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Subtitle = styled.h2`
  margin-left: 7.5px;
  margin-bottom: 1rem;
`;
