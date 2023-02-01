import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearCart } from '../../store/cart/cart.action';

import { CheckoutSuccessContainer } from './checkout-success.styles';

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  // if redirected from Stripe, clear cart
  if (
    searchParams.get('payment_intent') &&
    searchParams.get('payment_intent_client_secret') &&
    searchParams.get('redirect_status')
  ) {
    console.log('Payment succeeded!');
    dispatch(clearCart());
  }

  return (
    <CheckoutSuccessContainer>
      <h2>Thank you for your purchase! 🎉</h2>
      <p>Your order will be shipped soon.</p>
    </CheckoutSuccessContainer>
  );
};

export default CheckoutSuccess;
