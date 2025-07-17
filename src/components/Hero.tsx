import { FiSearch, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="relative bg-green-50 py-16 md:py-24 lg:py-32 rounded-md bg-cover bg-center"
      style={{ backgroundImage: `url("/images/bg-hero.png")` }}
    >
      {/* Conteneur */}
      <div className="container mx-auto px-4">
        {/* Contenu */}
        <div className="max-w-2xl mx-auto text-center">
          {/* Titre */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Économisez chaque semaine&nbsp;! Jusqu’à <span className="text-green-600">30% de réduction</span> sur nos produits.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#F6E2AB] mb-8">
            Fruits et légumes frais, produits emballés, ordinateurs, vêtements et essentiels pour vous et la maison.
          </p>

          {/* Barre de recherche */}
          <div className="relative max-w-md mx-auto mb-10">
            <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full py-3 px-6 focus:outline-none text-black-700"
              />
              <button className=" text-white p-3 h-full hover:bg-green-700 transition-colors">
                <FiSearch className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Bouton d'appel à l'action */}
          <button className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white cursor-pointer font-medium py-3 px-8 rounded-md transition-colors shadow-md">
            Découvrir la boutique
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
