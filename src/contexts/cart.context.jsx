import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

const clearCartItem = (items, itemToClear) =>
  items.filter((item) => item.id !== itemToClear.id);

const addCartItem = (items, productToAdd) => {
  // if the item already exists in the cart, increase the quantity
  const existingItem = items.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    // return a new array with new objects (avoid mutations)
    return items.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // if the item does not exist in the cart, add it to the cart
  return [...items, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (items, itemToRemove) => {
  const existingItem = items.find((item) => item.id === itemToRemove.id);

  if (existingItem && existingItem.quantity === 1) {
    return clearCartItem(items, itemToRemove);
  }

  return items.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartContext = createContext({
  isOpen: false,
  toggleCart: () => null,
  items: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  totalQuantity: 0,
  totalAmount: 0,
});

export const CART_ACTIONS = {
  SET_ITEMS: 'SET_ITEMS',
  TOGGLE_CART: 'TOGGLE_CART',
};

export const INITIAL_STATE = {
  isOpen: false,
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      throw new Error(`Invalid action type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ items, totalQuantity, totalAmount, isOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newItems) => {
    const newTotalQuantity = newItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const newTotalAmount = newItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTIONS.SET_ITEMS, {
        items: newItems,
        totalQuantity: newTotalQuantity,
        totalAmount: newTotalAmount,
      })
    );
  };

  const addItemToCart = (item) =>
    updateCartItemsReducer(addCartItem(items, item));

  const removeItemFromCart = (item) =>
    updateCartItemsReducer(removeCartItem(items, item));

  const clearItemFromCart = (item) =>
    updateCartItemsReducer(clearCartItem(items, item));

  const toggleCart = () => dispatch(createAction(CART_ACTIONS.TOGGLE_CART));

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toggleCart,
        items,
        addItemToCart,
        totalQuantity,
        totalAmount,
        removeItemFromCart,
        clearItemFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
