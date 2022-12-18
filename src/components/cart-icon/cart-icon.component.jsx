import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const { isOpen, setIsOpen, totalQuantity } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setIsOpen(!isOpen)}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
