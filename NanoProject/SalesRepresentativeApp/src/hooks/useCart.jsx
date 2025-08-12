import React, { useContext } from "react";
import { cartContext } from "../contexts/CartContextProvider";

const useCart = () => {
  const { cartItems, setCartItems } = useContext(cartContext);
  return { cartItems, setCartItems };
};

export default useCart;
