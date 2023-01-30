import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  gap: 0 1rem;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid #cecece;
  object-fit: cover;
`;

export const Name = styled.span`
  width: 20%;
`;

export const Quantity = styled.span`
  align-items: center;
  display: flex;
  width: 20%;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  width: 20%;
`;

export const Arrow = styled.div`
  cursor: pointer;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #292d28;
  color: #f8f7f5;
`;

export const RemoveButton = styled.div`
  width: 5%;
  cursor: pointer;
`;
