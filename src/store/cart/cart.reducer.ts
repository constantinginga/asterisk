import { AnyAction } from 'redux';
import { CartItem } from './cart.types';
import { toggleCart, setCartItems } from './cart.action';

export type CartState = {
  readonly isOpen: boolean;
  readonly items: CartItem[];
};

export const INITIAL_STATE: CartState = {
  isOpen: false,
  items: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (toggleCart.match(action)) {
    return {
      ...state,
      isOpen: !state.isOpen,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      items: action.payload,
    };
  }

  return state;
};
