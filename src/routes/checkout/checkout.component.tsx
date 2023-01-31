import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Elements } from '@stripe/react-stripe-js';
import {
  stripePromise,
  createPaymentIntent,
} from '../../utils/stripe/stripe.utils';

import {
  selectCartItems,
  selectCartTotalAmount,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import Spinner from '../../components/spinner/spinner.component';

import {
  CheckoutContainer,
  EmptyCheckoutContainer,
  SummaryContainer,
  ItemsContainer,
  PaymentContainer,
  Title,
  Subtitle,
} from './checkout.styles';

const Checkout = () => {
  const items = useSelector(selectCartItems);
  const amount = useSelector(selectCartTotalAmount);
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentId, setPaymentIntentId] = useState('');

  useEffect(() => {
    if (!amount) return;
    if (!paymentIntentId || !clientSecret) {
      fetchPaymentIntent();
    }

    async function fetchPaymentIntent() {
      const response = await createPaymentIntent(amount);

      if (response.paymentIntent) {
        const {
          paymentIntent: { client_secret, id },
        } = response;
        if (!client_secret || !id) return;

        setClientSecret(client_secret);
        setPaymentIntentId(id);
      }
    }
  });

  return items.length === 0 ? (
    <EmptyCheckoutContainer>
      <Subtitle>Your cart is empty. Add some items to checkout.</Subtitle>
    </EmptyCheckoutContainer>
  ) : (
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
        {clientSecret && stripePromise ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm amount={amount} paymentId={paymentIntentId} />
          </Elements>
        ) : (
          <Spinner />
        )}
      </PaymentContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
