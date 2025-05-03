"use client";
import { RentalItem } from "@/app/rentals/page";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartContextType = {
  cart: RentalItem[];
  addToCart: (item: RentalItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<RentalItem[]>([]);

  const addToCart = (item: RentalItem) => {
    setCart((prev: RentalItem[]) => [...prev, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item._id !== itemId));
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartContextProvider");
  }
  return context;
};
