import { CategoryCardProps } from "@/types/category";

export default function CategoryCard({ label, icon }: CategoryCardProps) {
  return (
    <div className="min-w-[120px] bg-[#FDECC8] rounded-md p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <img
        src={icon}
        alt={label}
        className="w-12 h-12 object-contain mb-2"
      />
      <span className="text-sm text-black text-center font-medium">
        {label}
      </span>
    </div>
  );
}
