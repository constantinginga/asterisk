import { FC, memo } from 'react';

import { CartItem as CartItemType } from '../../store/cart/cart.types';

import {
  CartItemContainer,
  ItemDetails,
  Name,
  ItemImage,
} from './cart-item.styles';

type CartItemProps = {
  item: CartItemType;
};

const CartItem: FC<CartItemProps> = memo(({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemDetails className="item-details">
        <Name className="name">{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
