import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function BannerDelivery() {
  return (
    <div className="bg-green-100 rounded-xl p-6 md:p-8 lg:p-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Faites-vous livrer<br />
          vos courses gratuitement
        </h2>
        <p className="text-gray-600 mb-6">
          Commandez maintenant et profitez de la livraison gratuite pour toute commande supérieure à 50 000 XOF. 
          Faites vos achats depuis chez vous, on s’occupe du reste.
        </p>
        <Link 
          href="/order" 
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Commander maintenant <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
