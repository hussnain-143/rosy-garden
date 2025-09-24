/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useEffect } from "react";

// 1️⃣ Context
export const cartContext = createContext(null);

// 2️⃣ Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        );
      }
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

// 3️⃣ Provider
const CartProvider = ({ children }) => {
  // Load cart from localStorage on init
  const initialState =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
