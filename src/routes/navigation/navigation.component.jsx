import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { logOut } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';

import { selectCurrentUser } from '../../store/user/user.selector';

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
  const { isOpen } = useContext(CartContext);

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
