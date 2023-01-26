import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotalAmount,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const items = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total: ${totalAmount}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;