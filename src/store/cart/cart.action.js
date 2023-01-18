import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS } from "./cart.types";

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

export const addItemToCart = (items, item) =>
    createAction(CART_ACTIONS.SET_ITEMS, addCartItem(items, item));

export const removeItemFromCart = (items, item) =>
    createAction(CART_ACTIONS.SET_ITEMS, removeCartItem(items, item));

export const clearItemFromCart = (items, item) =>
    createAction(CART_ACTIONS.SET_ITEMS, clearCartItem(items, item));

export const clearCart = () => createAction(CART_ACTIONS.SET_ITEMS, []);

export const toggleCart = () => createAction(CART_ACTIONS.TOGGLE_CART);