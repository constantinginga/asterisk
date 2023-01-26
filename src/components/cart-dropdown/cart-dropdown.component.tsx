import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const items = useSelector(selectCartItems);
  const navigate = useNavigate();

  // navigate never changes here, it is included to get rid of the warning
  const checkoutHandler = useCallback(() => {
    navigate('/checkout');
  }, [navigate]);

  return (
    <CartDropdownContainer>
      <CartItems className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      {items.length !== 0 && (
        <Button onClick={checkoutHandler}>Go to checkout</Button>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
