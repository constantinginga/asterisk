import { useState, FormEvent, FC, ChangeEvent } from 'react';
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
  ShippingDetails,
  ShippingInput,
} from './payment-form.styles';

type PaymentFormProps = {
  amount: number;
  paymentId: string;
};

const defaultFormFields = {
  city: '',
  country: '',
  postalCode: '',
  phone: '',
};

const PaymentForm: FC<PaymentFormProps> = ({ amount, paymentId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { city, country, postalCode, phone } = formFields;
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <PaymentElement />
        <ShippingDetails>
          <h3>Shipping Details</h3>
          <ShippingInput
            label="City"
            type="text"
            name="city"
            id="city"
            required
            onChange={handleChange}
            value={city}
          />
          <ShippingInput
            label="Postal Code"
            type="text"
            name="postalCode"
            id="postalCode"
            required
            onChange={handleChange}
            value={postalCode}
          />
          <ShippingInput
            label="Phone Number"
            type="tel"
            name="phone"
            id="phone"
            required
            onChange={handleChange}
            value={phone}
          />
          <h4>Available shipping methods</h4>
          <ShippingMethod />
        </ShippingDetails>
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
