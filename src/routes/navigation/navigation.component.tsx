import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { signOutStart } from '../../store/user/user.action';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartIsOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavButton,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectCartIsOpen);
  const dispatch = useDispatch();

  const logOutHandler = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            <NavButton>Shop</NavButton>
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={logOutHandler}>
              Log Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Log In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
