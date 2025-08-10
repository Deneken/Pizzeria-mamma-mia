import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existe = prev.find((p) => p.id === pizza.id);
      if (existe) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...pizza, cantidad: 1 }];
    });
  };

  const increase = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p))
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const getTotal = () =>
    cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        removeFromCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
