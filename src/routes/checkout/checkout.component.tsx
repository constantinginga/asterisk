import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  SummaryContainer,
  ItemsContainer,
  PaymentContainer,
  Title,
  Subtitle,
} from './checkout.styles';

const Checkout = () => {
  const items = useSelector(selectCartItems);

  return (
    <CheckoutContainer>
      <SummaryContainer>
        <Title>Order Summary</Title>
        <Subtitle>
          Check the items in your cart and select a shipping method.
        </Subtitle>
        <ItemsContainer>
          {items.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
      </SummaryContainer>
      <PaymentContainer>
        <Title>Payment Details</Title>
        <Subtitle>
          Complete your purchase by entering your payment details.
        </Subtitle>
        <PaymentForm />
      </PaymentContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
