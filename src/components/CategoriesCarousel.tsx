"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CategoryCard from "./CategoryCard";

const categories = [
  { label: "Fruits & Légumes", icon: "/icons/image-41.png" },
  { label: "Herbes & Épices", icon: "/icons/image-1.png" },
  { label: "Produits Laitiers", icon: "/icons/image-2.png" },
  { label: "Viandes & Volailles", icon: "/icons/image-3.png" },
  { label: "Boissons", icon: "/icons/image-4.png" },
  { label: "Boulangerie", icon: "/icons/image-5.png" },
  { label: "Produits Surgelés", icon: "/icons/image-6.png" },
  { label: "Conserves", icon: "/icons/image.png" },
  { label: "Vêtement", icon: "/icons/image.png" },
  { label: "Téléphone", icon: "/icons/image.png" },
  { label: "Ordinateur", icon: "/icons/image.png" },
  { label: "Montre", icon: "/icons/image.png" },
];

export default function CategoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-4 mt-6">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex justify-between items-center mb-3">
            <h3 className="mb-4 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Explorer les catégories
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="bg-[#F2F3F4] rounded-full p-1 xs:p-1 sm:p-2 md:p-3 lg:p-4 shadow hover:bg-gray-100 cursor-pointer"
              >
                <FiChevronLeft className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 " />
              </button>

              <button
                onClick={() => scroll("right")}
                className="bg-[#F2F3F4] rounded-full p-1 xs:p-1 sm:p-2 md:p-3 lg:p-4 shadow hover:bg-gray-100 cursor-pointer"
              >
                <FiChevronRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 " />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {categories.map((cat, index) => (
              <CategoryCard key={index} label={cat.label} icon={cat.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
