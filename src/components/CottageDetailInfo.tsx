import {
  Users, BedDouble, Bath, Maximize,
  Mountain, Flame, Wifi, Car, Coffee, Wind,
  TreePine, Utensils, Baby, Flower2, Waves,
  Star, Wine, Music, Sunrise, BookOpen,
} from 'lucide-react';
import type { Cottage } from '../data/cottages';

const iconMap: Record<string, React.ElementType> = {
  mountain: Mountain,
  flame: Flame,
  wifi: Wifi,
  car: Car,
  coffee: Coffee,
  wind: Wind,
  trees: TreePine,
  utensils: Utensils,
  baby: Baby,
  flower2: Flower2,
  waves: Waves,
  star: Star,
  wine: Wine,
  music: Music,
  sunrise: Sunrise,
  bath: Bath,
  'book-open': BookOpen,
  bird: TreePine,
  binoculars: Mountain,
  fish: Waves,
  apple: Flower2,
  'chef-hat': Utensils,
};

interface CottageDetailInfoProps {
  cottage: Cottage;
}

export default function CottageDetailInfo({ cottage }: CottageDetailInfoProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 bg-[#f8f7f4] rounded">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#19223F]/10 flex items-center justify-center">
                  <Users size={18} className="text-[#19223F]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Guests</p>
                  <p className="text-sm font-semibold text-gray-800">Up to {cottage.guests}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#19223F]/10 flex items-center justify-center">
                  <BedDouble size={18} className="text-[#19223F]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Bedrooms</p>
                  <p className="text-sm font-semibold text-gray-800">{cottage.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#19223F]/10 flex items-center justify-center">
                  <Bath size={18} className="text-[#19223F]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Bathrooms</p>
                  <p className="text-sm font-semibold text-gray-800">{cottage.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#19223F]/10 flex items-center justify-center">
                  <Maximize size={18} className="text-[#19223F]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Area</p>
                  <p className="text-sm font-semibold text-gray-800">{cottage.area}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif text-[#19223F] mb-6">About This Cottage</h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-[17px]">
                {cottage.longDescription}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif text-[#19223F] mb-6">What Makes It Special</h2>
              <div className="space-y-6">
                {cottage.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center mt-0.5">
                      <span className="text-[#B8860B] font-serif font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-800 mb-1">{h.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#19223F] mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cottage.amenities.map((a, i) => {
                  const Icon = iconMap[a.icon] || Mountain;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 rounded bg-gray-50 hover:bg-[#f8f7f4] transition">
                      <Icon size={18} className="text-[#B8860B] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{a.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-[#f8f7f4] rounded p-6 md:p-8 border border-gray-200">
                <div className="mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Starting from</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-serif font-bold text-[#19223F]">
                      INR {cottage.pricePerNight.toLocaleString('en-IN')}
                    </span>
                    <span className="text-gray-500 text-sm">/ night</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Check-in</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#19223F] transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Check-out</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#19223F] transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Guests</label>
                    <select className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#19223F] transition bg-white appearance-none">
                      {Array.from({ length: cottage.guests }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button className="w-full bg-[#B8860B] text-white py-3.5 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#a07609] transition">
                  Reserve Now
                </button>

                <p className="text-center text-xs text-gray-500 mt-3">
                  No payment charged yet
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category</span>
                    <span className="text-gray-800 font-medium capitalize">{cottage.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location</span>
                    <span className="text-gray-800 font-medium">{cottage.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Max Guests</span>
                    <span className="text-gray-800 font-medium">{cottage.guests}</span>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className="block mt-4 text-center border-2 border-[#19223F] text-[#19223F] py-3 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#19223F] hover:text-white transition"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
