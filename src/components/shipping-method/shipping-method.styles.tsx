import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/ups-logo.svg';

export const ShippingMethodContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 0.5rem;
  background: #fff;
  padding: 1rem 2.5rem;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    padding: 1rem 0.75rem;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
`;

export const UPSLogo = styled(Logo)`
  width: 50px;
  height: 50px;
`;

export const DetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
`;

export const DeliveryTime = styled.p`
  font-size: 0.9rem;
`;
