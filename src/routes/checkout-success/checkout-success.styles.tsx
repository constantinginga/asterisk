import styled from 'styled-components';

import { Wrapper } from '../../global.styles';

export const CheckoutSuccessContainer = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h2,
  p {
    text-align: center;
  }
`;
