import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/Logo.png"
              alt="Dahlia Resort Logo"
              className="h-12 lg:h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
                if (textLogo) textLogo.style.display = 'flex';
              }}
            />
            <div className="flex flex-col items-center leading-none" style={{ display: 'none' }}>
              <span
                className={`text-2xl lg:text-3xl font-serif font-bold tracking-wider transition-colors duration-300 ${
                  scrolled ? 'text-[#19223F]' : 'text-white'
                }`}
              >
                DAHLIA
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-[#19223F]' : 'text-white/80'
                }`}
              >
                RESORT
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-10">
            {['Destinations', 'Cottages', 'Hotels', 'Experiences', 'Offers'].map((item) => (
              <a
                key={item}
                href={item === 'Cottages' ? '/cottages' : `#${item.toLowerCase()}`}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#19223F]'
                    : 'text-white hover:text-white/70'
                }`}
              >
                {item}
              </a>
            ))}
            <button
              className={`text-sm font-medium tracking-wider uppercase flex items-center gap-1 transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-700 hover:text-[#19223F]'
                  : 'text-white hover:text-white/70'
              }`}
            >
              More <ChevronDown size={16} />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/contact"
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-700 hover:text-[#19223F]'
                  : 'text-white hover:text-white/70'
              }`}
            >
              Contact Us
            </a>
            <a
              href="#"
              className="bg-[#19223F] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-[#0f1529] transition"
            >
              Book a Stay
            </a>
          </div>

          <button
            className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-6 space-y-4">
            {[ 'Cottages', 'Hotels', 'Experiences', 'Offers', 'Memberships'].map((item) => (
              <a
                key={item}
                href={item === 'Cottages' ? '/cottages' : `#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-[#19223F] transition font-medium tracking-wider uppercase text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t space-y-3">
              <a
                href="/contact"
                className="block text-gray-700 font-medium tracking-wider uppercase text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-center bg-[#19223F] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase"
              >
                Book a Stay
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
