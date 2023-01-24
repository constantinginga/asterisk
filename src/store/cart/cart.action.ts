import { CategoryItem } from '../categories/category.types';
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CART_ACTIONS, CartItem } from './cart.types';

const clearCartItem = (items: CartItem[], itemToClear: CartItem): CartItem[] =>
  items.filter((item) => item.id !== itemToClear.id);

const addCartItem = (
  items: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
  items: CartItem[],
  itemToRemove: CartItem
): CartItem[] => {
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

export const addItemToCart = (
  items: CartItem[],
  item: CategoryItem
): SetItems => setCartItems(addCartItem(items, item));

export const removeItemFromCart = (
  items: CartItem[],
  item: CartItem
): SetItems => setCartItems(removeCartItem(items, item));

export const clearItemFromCart = (
  items: CartItem[],
  item: CartItem
): SetItems => setCartItems(clearCartItem(items, item));

export const clearCart = (): SetItems => setCartItems([]);

export const toggleCart = withMatcher(
  (): ToggleCart => createAction(CART_ACTIONS.TOGGLE_CART)
);

export const setCartItems = withMatcher(
  (items: CartItem[]): SetItems => createAction(CART_ACTIONS.SET_ITEMS, items)
);

export type SetItems = ActionWithPayload<CART_ACTIONS.SET_ITEMS, CartItem[]>;
export type ToggleCart = Action<CART_ACTIONS.TOGGLE_CART>;
