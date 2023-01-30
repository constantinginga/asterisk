import styled from 'styled-components';

import { Wrapper } from '../../global.styles';

export const AuthContainer = styled(Wrapper)`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0 4rem;
  margin: 2rem 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    margin: 10px 0;
    gap: 10px;
  }
`;
