"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ShoppingCart } from "react-feather";
import { useCart } from "../contexts/CartContext";
import CartDropdown from "./CartDropdown";

const CartHeader = () => {
  const { cart } = useCart();
  const [activeCart, setActiveCart] = useState(false);
  return (
    <div className="relative">
      <div onMouseOver={() => setActiveCart(true)} onMouseLeave={() => setActiveCart(false)} >
        <Link href={"/rentals/cart"} className="cursor-pointer">
        <ShoppingCart />
        </Link>
        <div className="rounded-full bg-red-400 flex items-center justify-center absolute -right-4 -top-3 w-5 h-5">
          {cart.length}
        </div>
      </div>
      {activeCart && (
        <div className="absolute bottom-0 left-1/2">
          <CartDropdown />
        </div>
      )}
    </div>
  );
};

export default CartHeader;
