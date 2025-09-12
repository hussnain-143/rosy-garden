// src/pages/Cart.jsx
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../components/ui/Button";

const Cart = () => {
  // Sample cart data
  const cartItems = [
    {
      id: 1,
      name: "Rose Bouquet",
      price: 1500,
      qty: 2,
      image: "/images/rose-bouquet.jpg",
    },
    {
      id: 2,
      name: "Tulip Basket",
      price: 2200,
      qty: 1,
      image: "/images/tulip-basket.jpg",
    },
  ];

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container max-w-[1200px] mx-auto mt-16 mb-10 font-didot space-y-12">
      {/* Section Header */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center">
        <span className="inline-flex items-center gap-2">
          Your Cart
        </span>
      </h2>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-custom">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.qty} × Rs. {item.price}
                </p>
                <p className="font-medium mt-1">
                  Rs. {item.qty * item.price}
                </p>
              </div>
              <button className="text-red-custom hover:text-green-custom transition cursor-pointer">
                <FiTrash2 size={22} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Your cart is empty. Start shopping now!
        </p>
      )}

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
          <p className="text-gray-700 mb-6">
            Total: <span className="font-bold text-red-custom">Rs. {total}</span>
          </p>
          <Button
            message="Proceed to Checkout"
            style="px-8 py-3 text-md font-bold"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
