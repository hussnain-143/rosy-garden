// src/pages/Cart.jsx
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../components/ui/Button";

const Cart = () => {
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

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container max-w-[1200px] mx-auto mt-16 mb-10 font-didot space-y-12">
      {/* Section Header */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center">
        Your Cart
      </h2>

      {/* Cart Table Layout */}
      {cartItems.length > 0 ? (
        <div className="overflow-x-auto border border-gray-200 shadow-sm">
          <table className="w-full border-collapse">
            <thead className="bg-red-custom text-white text-left text-sm uppercase">
              <tr>
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Quantity</th>
                <th className="py-4 px-6">Total</th>
                <th className="py-4 px-6 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-green-custom/10 transition"
                >
                  {/* Product */}
                  <td className="py-4 px-6 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover  border border-gray-200"
                    />
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-6 text-gray-600">
                    Rs. {item.price}
                  </td>

                  {/* Quantity */}
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 border text-gray-700">
                      {item.qty}
                    </span>
                  </td>

                  {/* Subtotal */}
                  <td className="py-4 px-6 font-semibold text-red-custom">
                    Rs. {item.qty * item.price}
                  </td>

                  {/* Remove */}
                  <td className="py-4 px-6 text-center">
                    <button className="text-red-custom cursor-pointer hover:text-green-custom transition p-2 rounded-full">
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Your cart is empty. Start shopping now!
        </p>
      )}

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="max-w-md ml-auto bg-white border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-red-custom">
            Cart Summary
          </h3>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>Rs. {total}</span>
          </div>
          <div className="flex justify-between mb-4 text-gray-700">
            <span>Delivery</span>
            <span className="text-green-custom">Free</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-4">
            <span>Total</span>
            <span className="text-red-custom">Rs. {total}</span>
          </div>
          <div className="mt-6">
            <Button
              message="Proceed to Checkout"
              style="w-full py-3 text-md font-bold"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
