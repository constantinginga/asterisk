import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cart/cart.action';
import { selectCartTotalQuantity } from '../../store/cart/cart.selector';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const toggleCartHandler = () => dispatch(toggleCart());

  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
