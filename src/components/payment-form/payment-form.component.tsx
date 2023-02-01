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
  Input,
  InputContainer,
  ShippingContainer,
} from './payment-form.styles';

type PaymentFormProps = {
  amount: number;
  paymentId: string;
};

const defaultFormFields = {
  city: '',
  postalCode: '',
  phone: '',
};

const PaymentForm: FC<PaymentFormProps> = ({ amount, paymentId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { city, postalCode, phone } = formFields;
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    await updatePaymentIntent(paymentId, amount, {
      name: currentUser ? currentUser.displayName : 'Guest',
      address: {
        city: city,
        postal_code: postalCode,
      },
      carrier: 'UPS',
      phone: phone,
    });

    await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.href}/success`,
        },
        //redirect: 'if_required',
      })
      .then((res) => {
        if (res.error) {
          console.log(res.error.message);
        } else {
          console.log('Payment succeeded!');
          dispatch(clearCart());
        }
      });

    // if (error) {
    //   console.log(error.message);
    // } else {
    //   // if (paymentIntent.status === 'succeeded') {
    //   //   console.log('Payment succeeded!');
    //   //   dispatch(clearCart());
    //   // }
    //   console.log('Payment succeeded!');
    //   dispatch(clearCart());
    // }

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
          <ShippingContainer>
            <InputContainer>
              <Input
                label="City"
                type="text"
                name="city"
                id="city"
                required
                onChange={handleChange}
                value={city}
              />
            </InputContainer>
            <InputContainer>
              <Input
                label="Postal Code"
                type="text"
                name="postalCode"
                id="postalCode"
                required
                onChange={handleChange}
                value={postalCode}
              />
            </InputContainer>
          </ShippingContainer>
          <InputContainer>
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              id="phone"
              required
              onChange={handleChange}
              value={phone}
            />
          </InputContainer>
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
