"use client";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] text-gray-800 mt-10 px-4 md:px-10 py-12 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1ère partie : Logo & Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">KIM</h2>
          <p className="text-sm mb-4">
            Abonnez-vous à notre newsletter pour recevoir les dernières mises à jour et offres.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
            >
              S’abonner
            </button>
          </form>
        </div>

        {/* 2ème partie : Liens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Accueil</a></li>
            <li><a href="#" className="hover:text-black">Boutique</a></li>
            <li><a href="#" className="hover:text-black">Catégories</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* 3ème partie : Coordonnées */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li><span className="font-medium">Email :</span> hello@website.com</li>
            <li><span className="font-medium">Adresse :</span> 18A Little Road, Lagos, Nigeria</li>
            <li><span className="font-medium">Téléphone :</span> +02 5421234560</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VotreEntreprise. Tous droits réservés.
      </div>
    </footer>
  );
}
