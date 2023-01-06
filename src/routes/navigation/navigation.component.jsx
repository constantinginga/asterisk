import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { logOut } from '../../utils/firebase/firebase.utils';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartIsOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectCartIsOpen);

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={logOut}>
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
