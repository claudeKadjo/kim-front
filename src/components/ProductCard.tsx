import { FiShoppingCart } from "react-icons/fi";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  discountedPrice?: number;
  image: string;
}

export default function ProductCard({
  name,
  category,
  price,
  discountedPrice,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm p-3 flex flex-col justify-between">
      <img
        src={image}
        alt={name}
        className="w-full h-28 object-contain mb-3"
      />
      <div className="text-xs text-gray-500">{category}</div>
      <div className="text-sm font-medium text-gray-800">{name}</div>

      <div className="flex items-center gap-2 mt-1 mb-2">
        {discountedPrice ? (
          <>
            <span className="text-sm line-through text-red-500">₦{price}</span>
            <span className="text-base font-semibold text-red-600">
              ₦{discountedPrice}
            </span>
          </>
        ) : (
          <span className="text-base font-semibold text-gray-900">
            ₦{price}
          </span>
        )}
      </div>

      <button className="flex items-center justify-center gap-2 w-full bg-[#FAE6B1] hover:bg-[#fbd77b] text-sm font-medium py-1.5 rounded">
        <FiShoppingCart className="text-lg" />
        Add
      </button>
    </div>
  );
}
