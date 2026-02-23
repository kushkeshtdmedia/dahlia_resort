import { useState, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { cottages, cottageCategories } from '../data/cottages';
import CottageHero from './CottageHero';
import CottageCategories from './CottageCategories';
import CottageCard from './CottageCard.tsx';

export default function CottageListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterDropdown, setFilterDropdown] = useState('All');

  const filteredCottages = useMemo(() => {
    let result = cottages;

    if (activeCategory !== 'all') {
      result = result.filter((c) => c.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [searchQuery, activeCategory]);

  return (
    <div>
      <CottageHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CottageCategories activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[2px] bg-gray-300 hidden md:block" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#19223F] text-center">
              EXPLORE OUR COTTAGES
            </h2>
            <div className="w-16 h-[2px] bg-gray-300 hidden md:block" />
          </div>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto text-center mb-12">
            From a serene lakeside retreat to a cozy mountain cabin, our handpicked collection of 10 exclusive
            cottages brings your perfect getaway to life.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-3 flex-1">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Cottage Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-gray-700 text-sm outline-none border-b border-gray-300 pb-1 w-full max-w-xs placeholder:text-gray-400 focus:border-[#19223F] transition"
              />
            </div>
            <div className="relative">
              <select
                value={filterDropdown}
                onChange={(e) => {
                  setFilterDropdown(e.target.value);
                  setActiveCategory(e.target.value === 'All' ? 'all' : e.target.value.toLowerCase());
                }}
                className="appearance-none bg-transparent border-b border-gray-300 text-gray-700 text-sm pb-1 pr-8 outline-none focus:border-[#19223F] transition cursor-pointer"
              >
                <option>All</option>
                {cottageCategories.filter((c) => c.id !== 'all').map((c) => (
                  <option key={c.id} value={c.label}>
                    {c.label.charAt(0) + c.label.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-0 top-0 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {filteredCottages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No cottages found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setFilterDropdown('All');
                }}
                className="mt-4 text-[#B8860B] font-medium text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {filteredCottages.map((cottage) => (
                <CottageCard key={cottage.id} cottage={cottage} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
