import React, { useState  } from "react";
import Button from "../../components/ui/Button";
import products from "../../../src/json/item.json";


import ProductCard from "../../components/layouts/ProductCard";
import { Link } from "react-router-dom";

console.log(products);

const Shop = () => {
  const [cate, setCategory] = useState("Roses");
  return (
    <>
      <div className="mb-5">
        <div className="flex justify-between font-didot items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
              Choose Our Best Bouquet
            </h2>
          </div>
          <div className="hidden lg:block ">
            <Link to='/shop'> 
                <Button
                  message="View All"
                  style="px-4 py-2 text-md font-semibold"
                />
            </Link>
            
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-5 ">
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <button
              onClick={() => setCategory(cat)}
              className={`cursor-pointer px-3 py-1 border transition duration-300 
                            ${
                              cate === cat
                                ? "text-black border-black"
                                : "text-gray-500 border-gray-500 hover:text-black hover:border-black"
                            }`}
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 font-didot mt-5">
          {products
            .filter((item) => item.category === cate)
            .map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                image={item.image}
                title={item.name}
                desc={item.description}
                price={item.price}
                inStock={item.inStock}
              />
            ))}
        </div>

        <div className="flex lg:hidden justify-center mt-10 font-didot">
            <Link to='/shop'> 
                <Button
                  message="View All"
                  style="px-4 py-2 text-lg font-semibold"
                />
            </Link>
        </div>
      </div>
    </>
  );
};

export default Shop;
