import { createContext, useReducer } from 'react';

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
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
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
    case CART_ACTIONS.ADD_ITEM:
      return {
        ...state,
        items: addCartItem(state.items, payload),
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + payload.price,
      };
    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: removeCartItem(state.items, payload),
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - payload.price,
      };
    case CART_ACTIONS.CLEAR_ITEM:
      return {
        ...state,
        items: clearCartItem(state.items, payload),
        totalQuantity: state.totalQuantity - payload.quantity,
        totalAmount: state.totalAmount - payload.price * payload.quantity,
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

  const addItemToCart = (item) =>
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: item });

  const removeItemFromCart = (item) =>
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: item });

  const clearItemFromCart = (item) =>
    dispatch({ type: CART_ACTIONS.CLEAR_ITEM, payload: item });

  const toggleCart = () => dispatch({ type: CART_ACTIONS.TOGGLE_CART });

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
