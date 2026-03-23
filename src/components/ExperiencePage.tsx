import { Star, Quote, Instagram, ArrowRight } from 'lucide-react';

const galleryImages = {
  morningTea: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
  cabinInterior: 'https://images.pexels.com/photos/19737833/pexels-photo-19737833.jpeg?auto=compress&cs=tinysrgb&w=800',
  nainitalLake: 'https://images.pexels.com/photos/19010046/pexels-photo-19010046.jpeg?auto=compress&cs=tinysrgb&w=800',
  hillStation: 'https://images.pexels.com/photos/17501049/pexels-photo-17501049.jpeg?auto=compress&cs=tinysrgb&w=800',
  mountainResort: 'https://images.pexels.com/photos/9099663/pexels-photo-9099663.jpeg?auto=compress&cs=tinysrgb&w=800',
  mistyHills: 'https://images.pexels.com/photos/16060830/pexels-photo-16060830.jpeg?auto=compress&cs=tinysrgb&w=800',
  cozyRoom: 'https://images.pexels.com/photos/19737868/pexels-photo-19737868.jpeg?auto=compress&cs=tinysrgb&w=800',
  valleyView: 'https://images.pexels.com/photos/18613888/pexels-photo-18613888.jpeg?auto=compress&cs=tinysrgb&w=800',
  lakeScenic: 'https://images.pexels.com/photos/27970045/pexels-photo-27970045.jpeg?auto=compress&cs=tinysrgb&w=800',
  hillsideHomes: 'https://images.pexels.com/photos/26184210/pexels-photo-26184210.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const reviewCards = [
  {
    rating: 5,
    text: '"Waking up to the mist rolling over Naini Lake is unlike anything I\'ve ever seen. Pure Himalayan magic."',
    author: 'MARCUS THORNE',
    source: 'Google Local Guide',
    initial: 'M',
  },
  {
    rating: 5,
    text: '"Exceptional service that anticipates your needs before you even realize them."',
    author: 'SARAH JENSEN',
    source: 'Verified Stay',
    initial: 'S',
  },
  {
    rating: 5,
    text: '"A sanctuary for the soul. The mountain views from the library alone are worth the trip."',
    author: 'JULIAN VOSS',
    source: 'Google Reviewer',
    initial: 'J',
  },
];

const googleReviews = [
  {
    text: '"An unparalleled attention to detail. Every meal featured local Kumaoni flavors, and the staff treated us like family."',
    author: 'THOMAS R.',
    date: 'STAYED JUNE 2023',
  },
  {
    text: '"The wellness center overlooking the valley is a transformative space. I\'ve never felt more rejuvenated than after my three days here."',
    author: 'CLARA M.',
    date: 'STAYED AUGUST 2023',
  },
  {
    text: '"Nature lovers, this is your paradise. Every trail, every viewpoint has been carefully curated. Truly breathtaking stay."',
    author: 'VICTOR H.',
    date: 'STAYED OCTOBER 2023',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#FF8C00] text-[#FF8C00]" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviewCards[number] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col justify-between shadow-sm">
      <div>
        <StarRating count={review.rating} />
        <p className="text-gray-800 text-lg md:text-xl font-serif italic leading-snug mt-4 mb-6">
          {review.text}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#FF8C00] flex items-center justify-center text-white text-xs font-bold">
          {review.initial}
        </div>
        <div>
          <p className="text-gray-900 text-xs font-bold tracking-wider">{review.author}</p>
          <p className="text-gray-500 text-[11px]">{review.source}</p>
        </div>
      </div>
    </div>
  );
}

function GalleryImage({
  src,
  alt,
  className,
  overlay,
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: React.ReactNode;
}) {
  return (
    <div className={`relative group overflow-hidden rounded-lg ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {overlay}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.3em] uppercase mb-5 block">
        Guest Chronicles
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic text-gray-900 leading-[1.1] mb-8 max-w-3xl">
        Authentic Moments,{' '}
        <br className="hidden md:block" />
        Captured by You.
      </h1>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
        A living guestbook of shared stories. From the first morning light over Naini Lake to the quiet
        evening glow of the mountain lounge, these are the real moments that define{' '}
        <em className="text-gray-900 not-italic font-medium underline underline-offset-2 decoration-[#FF8C00]/40">
          The Dahlia Resort
        </em>.
      </p>
    </section>
  );
}

function MasonryGrid() {
  return (
    <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-20 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GalleryImage
          src={galleryImages.morningTea}
          alt="Morning tea with mountain view in Nainital"
          className="h-64 md:h-72"
          overlay={
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-xs">@alpine_traveller</span>
                <Instagram size={14} className="text-white/60" />
              </div>
            </div>
          }
        />

        <GalleryImage
          src={galleryImages.cabinInterior}
          alt="Cozy mountain cottage interior"
          className="h-64 md:h-72"
          overlay={
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="bg-white/95 backdrop-blur-sm rounded px-3 py-2">
                <p className="text-gray-800 text-xs italic leading-relaxed">
                  "Every corner of the cottage feels like a warm embrace from the mountains."
                </p>
              </div>
            </div>
          }
        />

        <div className="bg-[#FF8C00] rounded-lg p-6 md:p-8 flex flex-col justify-between h-64 md:h-72">
          <Quote size={28} className="text-white/80" />
          <div>
            <p className="text-white text-xl md:text-2xl font-serif italic leading-snug mb-4">
              "The most thoughtful mountain resort I've ever visited."
            </p>
            <span className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase">
              The Modern Nomads
            </span>
          </div>
        </div>

        <ReviewCard review={reviewCards[0]} />
        <ReviewCard review={reviewCards[1]} />

        <GalleryImage
          src={galleryImages.nainitalLake}
          alt="Aerial view of Nainital Lake surrounded by mountains"
          className="h-full min-h-[16rem]"
        />

        <GalleryImage
          src={galleryImages.mistyHills}
          alt="Misty hills around Nainital town"
          className="h-64 md:h-72"
        />

        <GalleryImage
          src={galleryImages.cozyRoom}
          alt="Rustic living room with mountain views"
          className="h-64 md:h-72"
        />

        <ReviewCard review={reviewCards[2]} />

        <GalleryImage
          src={galleryImages.mountainResort}
          alt="Mountain resort nestled in the Himalayas"
          className="h-56 md:h-64"
        />

        <GalleryImage
          src={galleryImages.valleyView}
          alt="Panoramic valley view from Nainital"
          className="h-56 md:h-64"
        />

        <GalleryImage
          src={galleryImages.hillsideHomes}
          alt="Hillside homes amidst greenery in Uttarakhand"
          className="h-56 md:h-64"
        />
      </div>
    </section>
  );
}

function VoicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900">
            Voices of the Resort
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">4.9 / 5.0</span>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mt-0.5">
                Global Rating
              </p>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-[#FF8C00] text-[#FF8C00]" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {googleReviews.map((review, i) => (
            <div key={i}>
              <h3 className="text-[#FF8C00] text-xl md:text-2xl font-bold tracking-wider mb-5 uppercase">
                Google
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-8 min-h-[4.5rem]">
                {review.text}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-900 text-sm font-bold tracking-wider">{review.author}</p>
                <p className="text-gray-500 text-[11px] tracking-wider uppercase mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareStorySection() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-2xl py-16 md:py-20 px-8 md:px-16 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Share Your Story
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto mb-10">
            Tag your photos with #TheDahliaResort to be featured in our seasonal guestbook.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF8C00] text-white px-7 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-[#e07a00] transition-colors shadow-md group"
            >
              Book Your Moment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-7 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-colors group"
            >
              Explore Gallery
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <MasonryGrid />
      <VoicesSection />
      <ShareStorySection />
    </main>
  );
}
