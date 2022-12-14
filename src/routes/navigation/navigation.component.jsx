import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { logOut } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={logOut}>
              Log Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Log In
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
