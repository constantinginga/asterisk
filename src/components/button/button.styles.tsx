import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0.5rem 35px;
  font-size: 15px;
  background-color: #292d28;
  color: #f8f7f5;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  font-weight: bolder;
  border: 1px solid #292d28;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f8f7f5;
    color: #292d28;
    border: 1px solid #292d28;
    transition: all 0.2s ease-in-out;
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: #f8f7f5;
  border: none;

  &:hover {
    background-color: #357ae8;
    color: #f8f7f5;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #f8f7f5;
  color: #292d28;
  border: 1px solid #292d28;

  &:hover {
    background-color: #292d28;
    color: #f8f7f5;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
