import { useState, FormEvent, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

import { updatePaymentIntent } from '../../utils/stripe/stripe.utils';
import { clearCart } from '../../store/cart/cart.action';
import { selectCurrentUser } from '../../store/user/user.selector';

import ShippingMethod from '../shipping-method/shipping-method.components';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  TotalAmount,
  ShippingMethodContainer,
} from './payment-form.styles';

type PaymentFormProps = {
  amount: number;
  paymentId: string;
};

const PaymentForm: FC<PaymentFormProps> = ({ amount, paymentId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    await updatePaymentIntent(paymentId, amount, {
      name: currentUser ? currentUser.displayName : 'Guest',
      address: {
        // temporary, replace with values from inputs later
        city: 'Horsens',
        country: 'Denmark',
        postal_code: '8700',
      },
      carrier: 'UPS',
      phone: '50240074',
    });

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      console.log(error.message);
    } else {
      if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
        dispatch(clearCart());
      }
    }

    setIsProcessingPayment(false);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <PaymentElement />
        <ShippingMethodContainer>
          <h4>Available shipping methods</h4>
          <ShippingMethod />
        </ShippingMethodContainer>
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
