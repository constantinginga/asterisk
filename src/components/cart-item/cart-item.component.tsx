import { FC, memo } from 'react';

import { CartItem as CartItemType } from '../../store/cart/cart.types';

import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
  ItemImageContainer,
  ItemImage,
} from './cart-item.styles';

type CartItemProps = {
  item: CartItemType;
};

const CartItem: FC<CartItemProps> = memo(({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <ItemImageContainer>
        <ItemImage src={imageUrl} alt={name} />
      </ItemImageContainer>
      <ItemDetails className="item-details">
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
