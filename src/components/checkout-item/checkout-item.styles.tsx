import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  // border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  gap: 0 1rem;
`;

export const ImageContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid #cecece;
`;

export const Name = styled.span`
  // width: 20%;
`;

export const Quantity = styled.span`
  align-items: center;
  display: flex;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  // width: 20%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  // width: 20%;
  // padding-left: 12px;
  cursor: pointer;
`;
