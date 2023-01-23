import { createSelector } from 'reselect';

import { RootState } from '../store';

import { CartState } from './cart.reducer';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.items
);

export const selectCartTotalQuantity = createSelector(
  [selectCartItems],
  (items) => items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  (items) => items.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isOpen
);
