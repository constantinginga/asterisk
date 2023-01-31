import styled from 'styled-components';

import { Wrapper } from '../../global.styles';

export const CheckoutContainer = styled(Wrapper)`
  display: flex;
  height: 100%;
  padding: 0;
`;

export const EmptyCheckoutContainer = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: #fff;
  padding: 2rem 2.5rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 2rem 2.5rem;
`;

export const ItemsContainer = styled.div`
  overflow: auto;
  border: 1px solid #cecece;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

export const Title = styled.h3`
  margin-bottom: 0.75rem;
`;

export const Subtitle = styled.p`
  margin-bottom: 1.5rem;
`;
