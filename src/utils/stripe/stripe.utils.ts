import { loadStripe } from '@stripe/stripe-js';

import { PaymentIntentResult } from '@stripe/stripe-js';

type Address = {
  city: string;
  postal_code: string;
};

type Shipping = {
  name: string;
  address: Address;
  carrier: string;
  phone: string;
};

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

export const createPaymentIntent = async (
  amount: number
): Promise<PaymentIntentResult> => {
  const response = await fetch('/.netlify/functions/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: amount * 100 }),
  }).then((res) => res.json());

  return response;
};

export const updatePaymentIntent = async (
  id: string,
  amount: number,
  shipping: Shipping
): Promise<PaymentIntentResult> => {
  const response = await fetch('/.netlify/functions/update-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: amount * 100, id, shipping }),
  }).then((res) => res.json());

  return response;
};
