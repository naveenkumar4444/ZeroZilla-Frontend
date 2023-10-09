import React from "react";
import { useCart } from "./CartContextAPI";

function CartButton({ product }) {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();

  return (
    <button
      className={`mt-6 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        cartItems && cartItems.filter((d) => d.id == product.id).length >= 1
          ? "bg-red-600 hover:bg-red-700 focus:ring-red-500 "
          : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
      }`}
      onClick={() => {
        if (cartItems && cartItems.filter((d) => d.id == product.id).length >= 1) {
          removeItemFromCart(product.id);
        } else {
          addItemToCart(product);
        }
      }}
    >
      {cartItems && cartItems.filter((d) => d.id == product.id).length >= 1
        ? "Remove from bag"
        : "Add to bag"}
    </button>
  );
}

export default CartButton;
