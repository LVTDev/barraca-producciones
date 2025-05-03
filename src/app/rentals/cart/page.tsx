"use client";
import { useCart } from "@/components/contexts/CartContext";
import React from "react";

const Page = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1 className="text-3xl text-center">Carrito</h1>
      {cart.length < 1 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="py-2">
            <p>{item.itemName}</p>
            <p>Pesos {item.price} MXN</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
