import styled from 'styled-components';

import { MainDarkColor, MainLightColor } from '../../global.styles';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0.5rem 35px;
  font-size: 15px;
  background-color: ${MainDarkColor};
  color: ${MainLightColor};
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  //font-weight: bolder;
  border: 1px solid ${MainDarkColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${MainLightColor};
    color: ${MainDarkColor};
    border: 1px solid ${MainDarkColor};
    transition: all 0.2s ease-in-out;
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: ${MainLightColor};
  border: none;

  &:hover {
    background-color: #357ae8;
    color: ${MainLightColor};
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${MainLightColor};
  color: ${MainDarkColor};
  border: 1px solid ${MainDarkColor};

  &:hover {
    background-color: ${MainDarkColor};
    color: ${MainLightColor};
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
