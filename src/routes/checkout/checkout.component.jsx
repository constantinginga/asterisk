import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';

const Checkout = () => {
  const { items } = useContext(CartContext);

  return (
    <div>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div></div>
    </div>
  );
};

export default Checkout;
