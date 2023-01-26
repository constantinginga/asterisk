import { FC, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { CartItem } from '../../store/cart/cart.types';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  QuantityValue,
  Price,
  Arrow,
  RemoveButton,
} from './checkout-item.styles';

type CheckoutItemProps = {
  item: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = useCallback(
    () => dispatch(clearItemFromCart(cartItems, item)),
    [cartItems, item, dispatch]
  );
  const addItemHandler = useCallback(
    () => dispatch(addItemToCart(cartItems, item)),
    [cartItems, item, dispatch]
  );
  const removeItemHandler = useCallback(
    () => dispatch(removeItemFromCart(cartItems, item)),
    [cartItems, item, dispatch]
  );

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
