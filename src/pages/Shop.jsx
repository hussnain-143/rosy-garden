import React, {useState} from "react";
import ProductCard from "../components/layouts/ProductCard";
import Sidebar from "../sections/Shop/Sidebar";
import ShopItem from "../sections/Shop/Items";

const ProductGrid = () => {
  const [cat, setCat] = useState('all');
  return (
    <div className="font-didot max-w-[1200px] container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-6 gap-8">
      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <Sidebar cat={cat} setCat={setCat} />
      </aside>

      {/* Product Listing */}
      <main className="col-span-5">
        <ShopItem  cat={cat} />
      </main>
    </div>
  );
};

export default ProductGrid;
