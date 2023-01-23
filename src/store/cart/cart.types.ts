import { CategoryItem } from '../categories/category.types';

export enum CART_ACTIONS {
  SET_ITEMS = 'cart/SET_ITEMS',
  TOGGLE_CART = 'cart/TOGGLE_CART',
}

export type CartItem = CategoryItem & {
  quantity: number;
};
