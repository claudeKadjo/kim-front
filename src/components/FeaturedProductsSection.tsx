"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const filters = ["Achats populaires", "Remisés", "Offres du jour"];

const products = [
  {
    id: 1,
    name: "Piment 500g",
    category: "Légumes",
    price: 740,
    discountedPrice: 540,
    image: "/images/prod-1.png",
  },
  {
    id: 2,
    name: "Brocoli 1kg",
    category: "Légumes",
    price: 1200,
    image: "/images/prod-2.png",
  },
  {
    id: 3,
    name: "Pommes de terre 2kg",
    category: "Légumes",
    price: 2100,
    discountedPrice: 1850,
    image: "/images/prod-3.png",
  },
  {
    id: 4,
    name: "Cerises 5pcs",
    category: "Fruits",
    price: 1500,
    image: "/images/prod-4.png",
  },
  {
    id: 5,
    name: "Haricots verts 250g",
    category: "Légumes",
    price: 1299,
    discountedPrice: 980,
    image: "/images/prod-5.png",
  },
  {
    id: 6,
    name: "Maïs 1kg",
    category: "Légumes",
    price: 550,
    discountedPrice: 275,
    image: "/images/prod-6.png",
  },
];

export default function FeaturedProductsSection() {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  return (
    <section className="bg-[#F8F9FA] px-4 md:px-10 py-10 mt-5 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Produits vedettes
          </h2>
          <div className="flex gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  selectedFilter === filter
                    ? "bg-black text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
          {products.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
