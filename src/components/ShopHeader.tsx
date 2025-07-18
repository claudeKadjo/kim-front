import { Breadcrumb } from "./Breadcrumb";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function ShopHeader() {
  return (
    <div className="space-y-6">
      {/* Fil d'Ariane */}
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Boutique" }
        ]}
      />

      {/* En-tête de la boutique */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Découvrez notre Boutique</h1>
          <p className="text-muted-foreground">Trouvez ce dont vous avez besoin...</p>
        </div>

        {/* Barre de recherche */}
        <div className="flex w-full max-w-md gap-2">
          <Input
            type="search"
            placeholder="Rechercher des produits..."
            className="h-10"
          />
          <Button type="submit" size="sm" className="h-10 bg-orange-600">
            Rechercher
          </Button>
        </div>
      </div>
    </div>
  )
}
