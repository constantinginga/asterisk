import { createContext, useState, useEffect } from 'react';

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

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  items: [],
  addItemToCart: () => null,
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // set quantity when items change
  useEffect(() => {
    const newTotalQuantity = items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [items]);

  const addItemToCart = (productToAdd) => {
    setItems(addCartItem(items, productToAdd));
  };

  const changeItemQuantity = (item, quantity) => {
    setItems(changeItemQuantity);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider
      value={{ isOpen, setIsOpen, items, addItemToCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
