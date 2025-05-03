import React from 'react'
import { useCart } from '../contexts/CartContext'



const CartDropdown = () => {
    const {cart} = useCart()
   return (
    <div className="absolute right-0 top-10 bg-white shadow-lg p-4 rounded w-64 z-50 text-black">
      {cart.length === 0 ? (
        <p className="text-sm">Your cart is empty.</p>
      ) : (
        <div>

        <ul className="">
          {cart.map((item, index) => (
              <div key={index} className="py-2">
              <p>{item.itemName}</p>
              <p>Pesos {item.price} MXN</p>
            </div>
          ))}
        </ul>
          </div>
      )}
    </div>
  )
}

export default CartDropdown