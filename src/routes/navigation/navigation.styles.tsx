import styled from 'styled-components';

import { BorderColor } from '../../global.styles';

import { Link } from 'react-router-dom';

import Button from '../../components/button/button.component';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${BorderColor};
  padding: 1rem 2.5rem;
  background: #fff;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 1rem 0.75rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 10px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const NavButton = styled(Button)`
  text-transform: initial;
  min-width: auto;
  padding: .75rem 1.5rem;
  height auto;
`;
