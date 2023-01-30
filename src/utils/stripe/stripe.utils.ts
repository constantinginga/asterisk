import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

export const createPaymentIntent = async (amount: number) => {
  const response = await fetch('/.netlify/functions/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: amount * 100 }),
  }).then((res) => res.json());

  return response;
};
