import { createContext, useState } from 'react';

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  items: [],
});

export const CartProvider = ({ children }) => {
  // const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};
