import BannerDelivery from './BannerDelivery';
import BannerDeals from './BannerDeals';
import BannerWeekend from './BannerWeekend';

export default function BannersSection() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Grande bannière à gauche */}
        <div className="lg:col-span-2">
          <BannerDelivery />
        </div>
        
        {/* Deux petites bannières à droite */}
        <div className="grid grid-cols-1 gap-6">
          <BannerDeals />
          <BannerWeekend />
        </div>
      </div>
    </section>
  );
}