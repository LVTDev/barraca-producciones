"use client";
import React from "react";
import { useCart } from "../contexts/CartContext";
import { RentalItem } from "@/app/(ES)/rentals/page";

const AddToCart = ({ product }: { product: RentalItem }) => {
  const { addToCart } = useCart();
  return <button className="cursor-pointer bg-yellow-200 px-3 py-2 text-black" onClick={() => addToCart(product)}>Add To Cart</button>;
};

export default AddToCart;
