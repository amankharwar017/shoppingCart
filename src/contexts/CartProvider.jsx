import React from "react";
import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case "ADDITEM": {
      return [...cart, action.payload];
    }
  }
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (newCartItem) => {
    dispatch({ type: "ADDITEM", payload: newCartItem });
  };
  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
export default CartProvider;
