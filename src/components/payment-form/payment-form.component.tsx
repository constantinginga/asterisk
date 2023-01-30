import { useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { selectCartTotalAmount } from '../../store/cart/cart.selector';
import { clearCart } from '../../store/cart/cart.action';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  TotalAmount,
} from './payment-form.styles';

const isValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

// Billing Details:
// - email
// - name
// - phone
// - address
// 	- city
// 	- country
// 	- postal_code

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const amount = useSelector(selectCartTotalAmount);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!isValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
        dispatch(clearCart());
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <TotalAmount>
          <span>Total:</span>
          <span>${amount}</span>
        </TotalAmount>
        <PaymentButton isLoading={isProcessingPayment}>
          Confirm Order
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
