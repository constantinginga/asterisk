import styled from 'styled-components';

import { BorderColor } from '../../global.styles';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ItemDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  gap: 0.25rem;
`;

export const Name = styled.span`
  font-size: 1rem;
`;

export const Price = styled.span`
  font-size: 0.9rem;
`;

export const ItemImageContainer = styled.div`
  width: 40%;
  height: 100%;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  border: 1px solid ${BorderColor};
`;
