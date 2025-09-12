import React from "react";
import { FaShoppingCart, FaBan } from "react-icons/fa";

const ProductCard = ({ image, title, desc, price, inStock }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-90 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4 text-white">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-200">{desc}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          {inStock ? (
            <button className="flex items-center gap-1 px-2 py-1 rounded cursor-pointer text-xs font-medium bg-green-custom ">
              <FaShoppingCart size={14} />
              Add to Cart
            </button>
          ) : (
            <span className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-red-custom">
              <FaBan size={14} />
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
