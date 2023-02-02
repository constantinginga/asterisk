import styled from 'styled-components';

import { Wrapper, BorderColor } from '../../global.styles';

export const SummaryContainer = styled.div`
  flex: 3;
  background-color: #fff;
`;

export const PaymentContainer = styled.div`
  flex: 2;
`;

export const CheckoutContainer = styled(Wrapper)`
  display: flex;
  height: 100%;
  padding: 0;

  ${SummaryContainer}, ${PaymentContainer} {
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;

    ${SummaryContainer}, ${PaymentContainer} {
      padding: 1rem 0.75rem;
    }
  }
`;

export const EmptyCheckoutContainer = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsContainer = styled.div`
  overflow: auto;
  border: 1px solid ${BorderColor};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

export const Title = styled.h3`
  margin-bottom: 0.75rem;
`;

export const Subtitle = styled.p`
  margin-bottom: 1.5rem;
`;
