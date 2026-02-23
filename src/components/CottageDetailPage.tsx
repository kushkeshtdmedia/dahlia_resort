import { ArrowLeft, ChevronRight } from 'lucide-react';
import { cottages } from '../data/cottages';
import CottageDetailHero from './CottageDetailHero';
import CottageDetailInfo from './CottageDetailInfo';

interface CottageDetailPageProps {
  cottageId: string;
}

export default function CottageDetailPage({ cottageId }: CottageDetailPageProps) {
  const cottage = cottages.find((c) => c.id === cottageId);

  if (!cottage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="text-center px-6">
          <h1 className="text-4xl font-serif text-[#19223F] mb-4">Cottage Not Found</h1>
          <p className="text-gray-600 mb-8">The cottage you're looking for doesn't exist or has been removed.</p>
          <a
            href="/cottages"
            className="inline-block bg-[#19223F] text-white px-8 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#0f1529] transition"
          >
            View All Cottages
          </a>
        </div>
      </div>
    );
  }

  const currentIndex = cottages.findIndex((c) => c.id === cottageId);
  const otherCottages = cottages.filter((c) => c.id !== cottageId).slice(0, 3);

  return (
    <div>
      <div className="fixed top-20 lg:top-24 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-[#19223F] transition">Home</a>
          <ChevronRight size={14} className="text-gray-400" />
          <a href="/cottages" className="text-gray-500 hover:text-[#19223F] transition">Cottages</a>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#19223F] font-medium truncate">{cottage.name}</span>
        </div>
      </div>

      <div className="pt-10">
        <CottageDetailHero cottage={cottage} />
        <CottageDetailInfo cottage={cottage} />
      </div>

      <section className="py-16 md:py-20 bg-[#f5f5f0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-[2px] bg-[#19223F] hidden md:block" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#19223F]">
                  More Cottages
                </h2>
              </div>
              <p className="text-gray-600 text-sm md:text-base">Explore other handpicked retreats in Nainital</p>
            </div>
            <a
              href="/cottages"
              className="hidden md:inline-flex items-center gap-2 text-[#B8860B] font-semibold uppercase text-xs tracking-wider hover:gap-3 transition-all"
            >
              View All <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {otherCottages.map((c) => (
              <a key={c.id} href={`/cottage/${c.id}`} className="group bg-white rounded overflow-hidden">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%236b7280'%3E${encodeURIComponent(c.name)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#B8860B] font-medium">
                    {c.category}
                  </span>
                  <h3 className="text-lg font-serif text-[#19223F] mt-1 mb-2 group-hover:text-[#B8860B] transition">
                    {c.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">{c.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm font-semibold text-[#19223F]">
                      INR {c.pricePerNight.toLocaleString('en-IN')}
                      <span className="text-gray-500 font-normal"> / night</span>
                    </span>
                    <span className="text-xs text-[#B8860B] font-medium uppercase tracking-wider group-hover:underline">
                      View
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <a
              href="/cottages"
              className="inline-flex items-center gap-2 text-[#B8860B] font-semibold uppercase text-xs tracking-wider"
            >
              View All Cottages <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
