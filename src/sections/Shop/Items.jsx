import React from "react";
import products from "../../../public/json/item.json";
import ProductCard from "../../components/layouts/ProductCard";

const ShopItem = ({ cat }) => {
  // Shuffle helper
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  // Filter products
  let filteredProducts =
    cat === "all"
      ? shuffleArray(products) // shuffle when "all"
      : products.filter((item) => item.category === cat);

  return (
    <div className="mb-5">
      <div className="flex justify-between font-didot items-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">Shop</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 font-didot mt-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.name}
              desc={item.description}
              price={item.price}
              inStock={item.inStock}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopItem;
