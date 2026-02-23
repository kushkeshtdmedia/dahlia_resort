import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import type { Cottage } from '../data/cottages';

interface CottageDetailHeroProps {
  cottage: Cottage;
}

export default function CottageDetailHero({ cottage }: CottageDetailHeroProps) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => setActiveImage((prev) => (prev + 1) % cottage.gallery.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + cottage.gallery.length) % cottage.gallery.length);

  return (
    <section className="pt-20 lg:pt-24">
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden group">
        {cottage.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${cottage.name} - View ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === activeImage ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => {
              e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='1200' height='800' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3E${encodeURIComponent(cottage.name)}%3C/text%3E%3C/svg%3E`;
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <button
          onClick={prevImage}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-10 pb-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-[#B8860B]" />
              <span className="text-[#B8860B] text-xs tracking-[0.2em] uppercase font-medium">
                {cottage.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-3">
              {cottage.name}
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={14} />
              <span>{cottage.location}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 lg:right-10 z-10 flex gap-2">
          {cottage.gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeImage ? 'bg-[#B8860B] w-7' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 -mt-1">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide py-4">
          {cottage.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded overflow-hidden transition-all duration-300 ${
                i === activeImage ? 'ring-2 ring-[#B8860B] opacity-100' : 'opacity-60 hover:opacity-90'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
