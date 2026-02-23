import { Search } from 'lucide-react';

interface CottageHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function CottageHero({ searchQuery, onSearchChange }: CottageHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <img
        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Paradise Motal Resort"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#19223F]/70 via-[#19223F]/50 to-[#19223F]/80" />

      <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-0">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#B8860B]" />
            <span className="text-[#B8860B] text-sm tracking-[0.2em] uppercase font-medium">Paradise Motal</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            OUR COTTAGES
          </h1>
        </div>

        <div className="w-full max-w-3xl -mb-7 relative z-20">
          <div className="bg-white rounded-sm shadow-xl flex items-center px-5 py-4">
            <Search size={20} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for a cottage by name or type..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 ml-4 text-gray-700 text-base outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
