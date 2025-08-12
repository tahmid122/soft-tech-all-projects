import React, { createContext, useState } from "react";
export const cartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <cartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
