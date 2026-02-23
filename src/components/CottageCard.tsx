import { ChevronRight, Users, BedDouble, MapPin } from 'lucide-react';
import type { Cottage } from '../data/cottages';

interface CottageCardProps {
  cottage: Cottage;
}

export default function CottageCard({ cottage }: CottageCardProps) {
  return (
    <a href={`/cottage/${cottage.id}`} className="group bg-white block">
      <div className="relative h-72 md:h-80 overflow-hidden bg-gray-200">
        <img
          src={cottage.image}
          alt={cottage.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%236b7280'%3E${encodeURIComponent(cottage.name)}%3C/text%3E%3C/svg%3E`;
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#19223F] text-[10px] tracking-[0.15em] uppercase font-semibold px-3 py-1.5 rounded-sm">
            {cottage.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-serif text-[#19223F] uppercase tracking-wide mb-2 leading-snug group-hover:text-[#B8860B] transition">
          {cottage.name}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
          <MapPin size={12} />
          <span>{cottage.location}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {cottage.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
          <span className="flex items-center gap-1.5">
            <Users size={13} /> {cottage.guests} Guests
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={13} /> {cottage.bedrooms} Bed
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-base font-semibold text-[#19223F]">
              INR {cottage.pricePerNight.toLocaleString('en-IN')}
            </span>
            <span className="text-gray-500 text-xs"> / night</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[#B8860B] text-xs font-medium tracking-wider uppercase group-hover:gap-2 transition-all">
            View Details <ChevronRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
