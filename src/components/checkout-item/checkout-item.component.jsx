import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  // const changeQuantity = (quantity) => {
  //   changeItemQuantity(item, item.quantity + quantity);
  // };

  const removeItem = () => {
    removeItemFromCart(item);
  };

  return (
    <div>
      <Button onClick={removeItem}>X</Button>
      <h2>{item.name}</h2>
      <div style={{ display: 'flex' }}>
        <Button onClick={() => removeItemFromCart(item)}>{'<'}</Button>
        <span>{item.quantity}</span>
        <Button onClick={() => addItemToCart(item)}>{'>'}</Button>
      </div>
    </div>
  );
};

export default CheckoutItem;
