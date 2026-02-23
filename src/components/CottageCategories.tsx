import { Building, Sparkles, Users, Heart, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { cottageCategories } from '../data/cottages';

const iconMap: Record<string, React.ReactNode> = {
  building: <Building size={28} />,
  sparkles: <Sparkles size={28} />,
  users: <Users size={28} />,
  heart: <Heart size={28} />,
  mountain: <Mountain size={28} />,
};

interface CottageCategoriesProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function CottageCategories({ activeCategory, onCategoryChange }: CottageCategoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f8f7f4] border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
        <div className="relative flex items-center">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-500 hover:border-[#19223F] hover:text-[#19223F] transition flex-shrink-0 mr-4"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1"
          >
            {cottageCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`flex flex-col items-center gap-2 px-8 py-4 rounded-sm flex-shrink-0 transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white shadow-lg text-[#B8860B] border border-gray-100'
                    : 'text-gray-500 hover:text-[#19223F] hover:bg-white/60'
                }`}
              >
                <span className={activeCategory === cat.id ? 'text-[#B8860B]' : 'text-gray-400'}>
                  {iconMap[cat.icon]}
                </span>
                <span className="text-xs tracking-[0.15em] font-medium uppercase">{cat.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-500 hover:border-[#19223F] hover:text-[#19223F] transition flex-shrink-0 ml-4"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
