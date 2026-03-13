import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
const base = import.meta.env.BASE_URL;

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
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20 lg:h-24">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={`${base}images/MainLogo-removebg-preview.png`}
              alt="Dahlia Resort Logo"
              className={`h-16 lg:h-24 w-auto object-contain transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              style={scrolled ? { filter: 'brightness(0) saturate(100%) invert(55%) sepia(96%) saturate(1000%) hue-rotate(360deg) brightness(101%) contrast(101%)' } : {}}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
                if (textLogo) textLogo.style.display = 'flex';
              }}
            />
            <div className="flex flex-col items-center leading-none" style={{ display: 'none' }}>
              <span
                className="text-2xl lg:text-3xl font-serif font-bold tracking-wider transition-colors duration-300"
                style={{ color: scrolled ? '#FF8C00' : '#ffffff' }}
              >
                DAHLIA
              </span>
              <span
                className="text-[10px] tracking-[0.3em] uppercase transition-colors duration-300"
                style={{ color: scrolled ? '#FF8C00' : 'rgba(255,255,255,0.8)' }}
              >
                RESORT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-10" style={{ perspective: '600px' }}>
            {['Destinations', 'Cottages', 'Hotels', 'Experiences', 'Offers'].map((item) => (
              <a
                key={item}
                href={item === 'Cottages' ? '/cottages' : `#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wider uppercase transition-all duration-300"
                style={{
                  color: scrolled ? '#FF8C00' : '#ffffff',
                  transformStyle: 'preserve-3d',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(20px) scale(1.08)';
                  e.currentTarget.style.textShadow = scrolled
                    ? '0 2px 8px rgba(255,140,0,0.35)'
                    : '0 2px 8px rgba(255,255,255,0.4)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {item}
              </a>
            ))}
            <button
              className="text-sm font-medium tracking-wider uppercase flex items-center gap-1 transition-all duration-300"
              style={{
                color: scrolled ? '#FF8C00' : '#ffffff',
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateZ(20px) scale(1.08)';
                e.currentTarget.style.textShadow = scrolled
                  ? '0 2px 8px rgba(255,140,0,0.35)'
                  : '0 2px 8px rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              More <ChevronDown size={16} />
            </button>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6" style={{ perspective: '600px' }}>
            <a
              href="/contact"
              className="text-sm font-medium tracking-wider uppercase transition-all duration-300"
              style={{
                color: scrolled ? '#FF8C00' : '#ffffff',
                transformStyle: 'preserve-3d',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateZ(20px) scale(1.08)';
                e.currentTarget.style.textShadow = scrolled
                  ? '0 2px 8px rgba(255,140,0,0.35)'
                  : '0 2px 8px rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              Contact Us
            </a>
            <a
              href="#"
              className="bg-[#FF8C00] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', display: 'inline-block' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateZ(16px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,140,0,0.45)';
                e.currentTarget.style.backgroundColor = '#e07a00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = '#FF8C00';
              }}
            >
              Book a Stay
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden transition-colors duration-300"
            style={{ color: scrolled ? '#FF8C00' : '#ffffff' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-6 space-y-4">
            {['Cottages', 'Hotels', 'Experiences', 'Offers', 'Memberships'].map((item) => (
              <a
                key={item}
                href={item === 'Cottages' ? '/cottages' : `#${item.toLowerCase()}`}
                className="block hover:text-[#FF8C00] transition font-medium tracking-wider uppercase text-sm py-2"
                style={{ color: '#374151' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t space-y-3">
              <a
                href="/contact"
                className="block font-medium tracking-wider uppercase text-sm py-2"
                style={{ color: '#374151' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-center bg-[#FF8C00] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-[#e07a00] transition"
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