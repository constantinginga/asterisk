import styled from 'styled-components';

import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #cecece;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 0.5rem;

  ${BaseButton},
  ${GoogleButton},
  ${InvertedButton} {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    top: 60px;
    right: 30px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
