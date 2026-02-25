import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import CottageListingPage from './components/CottageListingPage';
import CottageDetailPage from './components/CottageDetailPage';
import { Search, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { offers, destinations, events } from './data/rooms.ts';
import { useRef, useState, useEffect } from 'react';

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%236b7280'%3E${encodeURIComponent(alt)}%3C/text%3E%3C/svg%3E`;
      }}
    />
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12 px-6 lg:px-10">
      <div className="flex items-center gap-6">
        <div className="w-16 h-[2px] bg-[#19223F] flex-shrink-0 hidden md:block"></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">{title}</h2>
      </div>
      <p className="text-gray-600 md:max-w-md lg:max-w-lg text-base leading-relaxed md:pt-2">{description}</p>
    </div>
  );
}

function ScrollableRow({ children, id }: { children: React.ReactNode; id: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white/60 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <div
        ref={scrollRef}
        id={id}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-10 scroll-smooth"
      >
        {children}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white/60 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
      e.preventDefault();
      window.history.pushState({}, '', href);
      setCurrentPath(href);
      window.scrollTo(0, 0);
    };

    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (currentPath === '/contact') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <ContactUs />
        <Footer />
      </div>
    );
  }

  if (currentPath === '/cottages') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <CottageListingPage />
        <Footer />
      </div>
    );
  }

  const cottageMatch = currentPath.match(/^\/cottage\/(.+)$/);
  if (cottageMatch) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <CottageDetailPage cottageId={cottageMatch[1]} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/NainitalHeroBanner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <button className="w-14 h-14 rounded-full bg-[#B8860B] text-white flex items-center justify-center hover:bg-[#a07609] transition shadow-lg">
            <Search size={24} />
          </button>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center mb-8">
            <span className="text-2xl font-serif font-bold text-[#19223F] tracking-wider">DAHLIA</span>
            <span className="text-[10px] tracking-[0.3em] text-[#19223F] uppercase">RESORT</span>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[2px] bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              Luxury Redefined, Globally Acclaimed
            </h2>
            <div className="w-16 h-[2px] bg-gray-300"></div>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
           Dahlia resort has been recognised as the World's Strongest Hotel Brand
            and a globally acclaimed luxury hospitality destination, setting the benchmark for excellence.
          </p>

          <div className="max-w-3xl mx-auto rounded-lg overflow-hidden bg-gray-200 h-64  md:h-90 relative">
            <ImageWithFallback
              src="/images/Resort1.png"
              alt="Azure Palms Awards"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="offers" className="py-16 md:py-24 bg-white">
        <SectionHeader
          title="Our Resort View"
          description="Dive into extraordinary adventures at our picture-perfect destinations with Dahlia Resort."
        />
        <ScrollableRow id="offers-scroll">
          {offers.map((offer:any) => (
            <a key={offer.id} href={offer.link} className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] group">
              <div className="h-72 md:h-96 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="pt-4 pb-2 border-b-2 border-[#B8860B]">
                <h3 className="text-lg font-serif text-gray-800 mb-1">{offer.title}</h3>
                <p className="text-sm text-gray-500">{offer.subtitle}</p>
              </div>
            </a>
          ))}
        </ScrollableRow>
      </section>

      <section id="destinations" className="py-16 md:py-24 bg-[#f5f5f0]">
        <SectionHeader
          title="Explore Places"
          description="Relaxing mountain paradises, exotic hill stations, and historic homes of royalty are all within reach at our Nainital Mountain Retreat"
        />
        <ScrollableRow id="destinations-scroll">
          {destinations.map((dest:any) => (
            <a key={dest.id} href={dest.link} className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] group">
              <div className="h-72 md:h-96 overflow-hidden bg-gray-200 rounded-sm">
                <ImageWithFallback
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            </a>
          ))}
        </ScrollableRow>
      </section>

      <section id="experiences" className="py-16 md:py-24 bg-white">
        <SectionHeader
          title="Premium & Luxury Feeling"
          description="At Dahlia Resort, every celebration unfolds as a masterpiece — immersive, unforgettable, and flawlessly curated."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-10">
          {events.map((event:any) => (
            <a key={event.id} href={event.link} className="group">
              <div className="relative h-80 md:h-80 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="bg-white py-4 border-b border-gray-200">
                <h3 className="text-lg font-serif text-[#B8860B] tracking-wide uppercase">{event.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f5f5f0]">
        <div className="px-6 lg:px-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[2px] bg-[#19223F] flex-shrink-0 hidden md:block"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              Discover Dahlia Resort
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-10">
          {[
            { name: 'Luxury Suites', detail: 'Refined Comfort', image: '/images/SittingView.jpg' },
            { name: 'Culinary Delights', detail: 'Local & Global Flavors', image: '/images/CloseToNature.jpg' },
            { name: 'Best Memories', detail: 'Your Best Moments, Our Care', image: '/images/ExplorePlacesImagesCouple.jpg' },
           { name: 'Close to Nature', detail: 'Wake up to birdsong, lush greenery, and pure tranquility.',  image: '/images/11770.jpg' 
}
          ].map((item, i) => (
            <a key={i} href="#" className="group">
              <div className="h-80 overflow-hidden bg-gray-200 rounded-sm">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#B8860B] transition">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

<section className="py-16 md:py-24 bg-white">
  <SectionHeader
    title="Weddings & Events"
    description="Create unforgettable memories amidst the misty hills and serene lakeside beauty of Nainital."
  />
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-10">
    {[
      { 
        name: 'Honeymoon Retreat', 
        desc: 'Romantic hilltop celebrations surrounded by nature', 
        image: '/images/honeyMoon.jpg' 
      },
      { 
        name: 'Dining Experience', 
        desc: 'Fine dining with panoramic mountain views', 
        image: '/images/DinningExperience.jpg' 
      },
      { 
        name: 'Grand Banquet Hall', 
        desc: 'Elegant wedding receptions for up to 300 guests', 
        image: '/images/BanquetImage.jpg' 
      }
    ].map((item, i) => (
      <a key={i} href="#" className="group">
        <div className="h-72 md:h-80 overflow-hidden bg-gray-200 rounded-sm">
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
        </div>
        <div className="pt-4 pb-3 border-b-2 border-[#B8860B]">
          <h3 className="text-lg font-serif text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
        </div>
      </a>
    ))}
  </div>
</section>

      <section className="py-16 md:py-24 bg-[#f5f5f0]">
        <SectionHeader
          title="Wellness & Spa"
          description="Discover a sanctuary of tranquility where ancient healing traditions meet modern wellness practices."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 lg:px-10">
          <div className="h-80 md:h-[28rem] overflow-hidden bg-gray-200 rounded-sm">
            <ImageWithFallback
              src="/images/SpaImages.jpg"
              alt="Wellness & Spa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-gray-800 mb-6">The Serenity Spa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our award-winning spa offers personalised treatments designed to restore balance and vitality.
              From signature rituals inspired by local traditions to modern hydrotherapy,
              every experience is crafted to rejuvenate your body, mind, and spirit.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B8860B]"></div>
                <span className="text-gray-700">Signature Rituals & Treatments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B8860B]"></div>
                <span className="text-gray-700">Thermal Pools & Hydrotherapy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B8860B]"></div>
                <span className="text-gray-700">Yoga & Meditation Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B8860B]"></div>
                <span className="text-gray-700">State-of-the-Art Fitness Centre</span>
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-[#B8860B] font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all">
              Explore Spa <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative h-80 md:h-96 overflow-hidden">
        <ImageWithFallback
          src="/images/ExtraordinaryJourney.jpg"
          alt="Azure Palms Luxury Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#19223F]/60 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Begin Your Extraordinary Journey</h2>
            <p className="text-base md:text-lg text-gray-200 mb-8">
              Discover the world's finest luxury hospitality experiences with Azure Palms
            </p>
            <a
              href="#"
              className="inline-block bg-[#B8860B] text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#a07609] transition"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
