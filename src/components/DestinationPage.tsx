import { MapPin, Mountain, TreePine, Compass, Thermometer, Clock, Car, Sun, CloudSnow, Flower2, Leaf, ArrowRight } from 'lucide-react';
import { nainitalAttractions, resortFeatures } from '../data/destination'

function DestinationHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Nainital Lake panoramic view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={18} className="text-[#FF8C00]" />
            <span className="text-[#FF8C00] text-sm font-semibold tracking-widest uppercase">
              Bhimtal, Nainital - Uttarakhand
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-4">
            Experience Nainital:<br />
            <span className="text-[#FF8C00]">Where Serenity Meets Spectacle</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Discover your perfect Himalayan escape with us.
          </p>
        </div>
      </div>
    </section>
  );
}

function AttractionsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#FFFAF3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#FF8C00]" />
            <Compass size={24} className="text-[#FF8C00]" />
            <div className="w-12 h-[2px] bg-[#FF8C00]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-5">
            Discover the Magic of Nainital
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            The Nainital Lakeside Resort is a luxurious and serene retreat overlooking the
            picturesque Naini Lake and Himalayan mountains in Uttarakhand, India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nainitalAttractions.map((attraction, index) => (
            <div
              key={attraction.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#FF8C00] text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {attraction.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResortGatewaySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#FF8C00]" />
            <Mountain size={24} className="text-[#FF8C00]" />
            <div className="w-12 h-[2px] bg-[#FF8C00]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-5">
            Our Resort: Your Gateway to Nainital
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore the unparalleled charm and accessibility of our resort in the heart of Nainital.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {resortFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-72 md:h-96 rounded-xl overflow-hidden group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-3">
                  <TreePine size={18} className="text-[#FF8C00]" />
                  <span className="text-[#FF8C00] text-xs font-semibold tracking-widest uppercase">
                    {feature.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const seasons = [
  {
    icon: Flower2,
    name: 'Spring',
    months: 'Mar - May',
    temp: '10 - 27 C',
    highlight: 'Blooming rhododendrons & clear skies',
    color: '#16a34a',
    bg: '#f0fdf4',
  },
  {
    icon: Sun,
    name: 'Summer',
    months: 'Jun - Aug',
    temp: '15 - 30 C',
    highlight: 'Peak season, perfect for boating',
    color: '#FF8C00',
    bg: '#FFFAF3',
  },
  {
    icon: Leaf,
    name: 'Autumn',
    months: 'Sep - Nov',
    temp: '8 - 22 C',
    highlight: 'Golden foliage & fewer crowds',
    color: '#b45309',
    bg: '#fffbeb',
  },
  {
    icon: CloudSnow,
    name: 'Winter',
    months: 'Dec - Feb',
    temp: '0 - 15 C',
    highlight: 'Snowfall & cosy fireside evenings',
    color: '#0284c7',
    bg: '#f0f9ff',
  },
];

const travelInfo = [
  {
    icon: Car,
    title: 'How to Reach',
    details: [
      'Nearest Airport: Pantnagar (68 km)',
      'Nearest Railway: Kathgodam (34 km)',
      'By Road: 300 km from Delhi (6-7 hrs)',
    ],
  },
  {
    icon: Clock,
    title: 'Check-in Details',
    details: [
      'Check-in: 2:00 PM onwards',
      'Check-out: 11:00 AM',
      'Early check-in on request',
    ],
  },
  {
    icon: Thermometer,
    title: 'What to Pack',
    details: [
      'Light layers for summer visits',
      'Warm woolens for Oct - Mar',
      'Comfortable trekking shoes',
    ],
  },
];

function PlanYourVisitSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#FFFAF3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#FF8C00]" />
            <Sun size={24} className="text-[#FF8C00]" />
            <div className="w-12 h-[2px] bg-[#FF8C00]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-5">
            Plan Your Visit
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Everything you need to know before your Himalayan getaway -- from the best
            time to visit to how to get here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {seasons.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: s.bg }}
                />
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: s.bg }}
                  >
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{s.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-4">{s.months}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Thermometer size={14} className="text-gray-400" />
                    <span className="text-sm font-semibold text-gray-700">{s.temp}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.highlight}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {travelInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-400"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#FF8C00]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                </div>
                <ul className="space-y-3">
                  {info.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF8C00] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Himalayan mountain sunset"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-14 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">
                Ready for Your Escape?
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed">
                Book your stay and experience the magic of Nainital first-hand. Our team is ready to craft your perfect mountain retreat.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF8C00] text-white px-7 py-3 text-sm font-semibold tracking-wider uppercase rounded-lg hover:bg-[#e07d00] transition-colors shadow-md hover:shadow-lg group"
              >
                Book Your Stay
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DestinationPage() {
  return (
    <main>
      <DestinationHero />
      <AttractionsSection />
      <ResortGatewaySection />
      <PlanYourVisitSection />
    </main>
  );
}
