"use client";

import {
  CartContextProvider,
} from "@/components/contexts/CartContext";
import CartHeader from "@/components/rentals/CartHeader";


export default function RentalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <CartContextProvider>
      <main>
        <div>
          <header className="flex justify-between px-5 py-5">
            <p>Rentals</p>
            <CartHeader />
          </header>
          {children}
        </div>
      </main>
    </CartContextProvider>
  );
}
