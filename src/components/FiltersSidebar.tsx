"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function FiltersSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    categories: true,
    availability: true,
    prices: true,
    diet: true
  })

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <aside className="w-64 space-y-6 border-r p-6">
      <h1 className="text-2xl font-bold">Filters</h1>
      
      {/* Section Catégories */}
      <Collapsible
        open={openSections.categories}
        onOpenChange={() => toggleSection('categories')}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Categories</h2>
          <CollapsibleTrigger asChild>
            <button className="p-1">
              {openSections.categories ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {[
            "Fresh Produce",
            "Vegetables",
            "Dairy & Eggs",
            "Meat & Poultry",
            "Pantry Staples",
            "Beverages",
            "Snacks & Confectionery",
            "Frozen Foods",
            "Bakery & Bread",
            "Household Essentials",
            "Personal Care & Health"
          ].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={`cat-${category}`} />
              <label
                htmlFor={`cat-${category}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <hr className="my-4" />

      {/* Section Disponibilité */}
      <Collapsible
        open={openSections.availability}
        onOpenChange={() => toggleSection('availability')}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Availability</h2>
          <CollapsibleTrigger asChild>
            <button className="p-1">
              {openSections.availability ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {["In-stock", "Out-of-stock"].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={`avail-${item}`} />
              <label
                htmlFor={`avail-${item}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <hr className="my-4" />

      {/* Section Prix */}
      <Collapsible
        open={openSections.prices}
        onOpenChange={() => toggleSection('prices')}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Prices</h2>
          <CollapsibleTrigger asChild>
            <button className="p-1">
              {openSections.prices ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {["Sales", "Discounted"].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={`price-${item}`} />
              <label
                htmlFor={`price-${item}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <hr className="my-4" />

      {/* Section Type de régime */}
      <Collapsible
        open={openSections.diet}
        onOpenChange={() => toggleSection('diet')}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Diet Type</h2>
          <CollapsibleTrigger asChild>
            <button className="p-1">
              {openSections.diet ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {["Vegan", "Non-vegan"].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={`diet-${item}`} />
              <label
                htmlFor={`diet-${item}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </aside>
  )
}