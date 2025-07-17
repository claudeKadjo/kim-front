import Link from 'next/link';

export default function BannerDeals() {
  return (
    <div className="bg-orange-100 rounded-xl p-6 md:p-8 lg:p-10">
      <div className="mb-4">
        <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">MEILLEURES OFFRES</span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">Offres du jour</h3>
      </div>
      
      <div className="flex gap-4 mb-6">
        <div className="text-center">
          <div className="bg-white rounded-lg py-2 px-4 font-bold text-gray-900 text-xl">00</div>
          <span className="text-xs text-gray-500 mt-1">JOURS</span>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-lg py-2 px-4 font-bold text-gray-900 text-xl">02</div>
          <span className="text-xs text-gray-500 mt-1">HEURES</span>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-lg py-2 px-4 font-bold text-gray-900 text-xl">28</div>
          <span className="text-xs text-gray-500 mt-1">MIN</span>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-lg py-2 px-4 font-bold text-gray-900 text-xl">26</div>
          <span className="text-xs text-gray-500 mt-1">SEC</span>
        </div>
      </div>
      
      <Link 
        href="/deals" 
        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Voir les offres
      </Link>
    </div>
  );
}
