import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartContextAPI = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    let data = JSON.parse(localStorage.getItem("ZeroZillaCart"));
    if (!data || data == null) {
      data = [];
    }
    data.push(product);
    localStorage.setItem("ZeroZillaCart", JSON.stringify(data));
    setCartItems(data);
    toast.success("Added to bag.")
  };

  const removeItemFromCart = (id) => {
    let data = JSON.parse(localStorage.getItem("ZeroZillaCart"));
    const filteredData = data.filter((d) => d.id != id);
    localStorage.setItem("ZeroZillaCart", JSON.stringify(filteredData));
    setCartItems(filteredData);
    toast.success("Removed from bag.")
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("ZeroZillaCart"));
    setCartItems(data);

    return () => {};
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
