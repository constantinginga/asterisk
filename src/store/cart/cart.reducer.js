import { CART_ACTIONS } from './cart.types';

export const INITIAL_STATE = {
  isOpen: false,
  items: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
