
'use client';
import { useState } from "react";

const menuItems = [
  { id: 1, name: "Classic Burger", price: 10 },
  { id: 2, name: "Golden State Burger", price: 14 },
  { id: 3, name: "Black n Bleu Burger", price: 13 },
  { id: 4, name: "Fries", price: 4 },
  { id: 5, name: "Soft Drink", price: 3 },
];

export default function BrooksBurgersApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 bg-[#132530] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">Brooks Burgers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl mb-4">Menu</h2>
          {menuItems.map((item) => (
            <div key={item.id} className="mb-2 border rounded p-4 flex justify-between items-center bg-[#1f3a4d]">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => addToCart(item)} className="bg-white text-black px-3 py-1 rounded">Add</button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="mb-2 border rounded p-4 flex justify-between items-center bg-[#1f3a4d]">
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(index)} className="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
              </div>
            ))
          )}
          <div className="mt-4 text-xl">Total: ${total}</div>
          <button className="mt-4 bg-green-500 px-4 py-2 rounded text-white">Checkout</button>
        </div>
      </div>
    </div>
  );
}
