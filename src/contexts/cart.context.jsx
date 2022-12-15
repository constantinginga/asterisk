import { createContext, useState, useEffect } from 'react';

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
  setIsOpen: () => null,
  items: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  totalQuantity: 0,
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // set quantity when items change
  useEffect(() => {
    const newTotalQuantity = items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [items]);

  useEffect(() => {
    const newTotalAmount = items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalAmount(newTotalAmount);
  }, [items]);

  const addItemToCart = (productToAdd) => {
    setItems(addCartItem(items, productToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setItems(removeCartItem(items, itemToRemove));
  };

  const clearItemFromCart = (item) => {
    setItems(clearCartItem(items, item));
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
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
