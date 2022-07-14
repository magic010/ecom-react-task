import React, { useReducer, useContext, useEffect } from "react";
import CartItems from "../data";
import reducer from "../reducer/cart_reducer";

const AppContext = React.createContext();

const initialState = {
  cart: CartItems,
  amount: 0,
  total: 0,
};

export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [state.cart]);

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, remove, increase, decrease, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
