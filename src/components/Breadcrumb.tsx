import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"


export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
          {item.href ? (
            <a href={item.href} className="hover:text-primary hover:underline">
              {item.label}
            </a>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}