import styled from 'styled-components';

import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from '../button/button.styles';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  ${BaseButton}, ${GoogleButton}, ${InvertedButton} {
    width: 100%;
  }
`;
