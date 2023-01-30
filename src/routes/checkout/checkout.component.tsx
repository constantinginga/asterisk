import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  SummaryContainer,
  PaymentContainer,
} from './checkout.styles';

const Checkout = () => {
  const items = useSelector(selectCartItems);

  return (
    <CheckoutContainer>
      <SummaryContainer>
        <h3>Order Summary</h3>
        <p>Check the items in your cart and select a shipping method.</p>
        <div>
          {items.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </div>
      </SummaryContainer>
      <PaymentContainer>
        <h3>Payment Details</h3>
        <p>Complete your purchase by entering your payment details.</p>
        <PaymentForm />
      </PaymentContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
