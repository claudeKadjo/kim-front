import Link from 'next/link';

export default function BannerWeekend() {
  return (
    <div className="bg-purple-100 rounded-xl p-6 md:p-8 lg:p-10 h-full">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">Offres du week-end</h3>
        <p className="text-purple-600 font-bold text-2xl mt-1">10% de réduction</p>
      </div>
      <Link 
        href="/weekend-deals" 
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Voir les offres
      </Link>
    </div>
  );
}
