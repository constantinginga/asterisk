import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { items, totalAmount } = useContext(CartContext);

  return (
    <div>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div>Total: ${totalAmount}</div>
    </div>
  );
};

export default Checkout;
