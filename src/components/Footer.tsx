import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
const base = import.meta.env.BASE_URL;

const RESORT_LOCATION = 'Bhimtal,+Nainital,+Uttarakhand,+India';
const RESORT_COORDS = '29.3460,79.5580';

function handleAddressClick(e: React.MouseEvent) {
  e.preventDefault();
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${RESORT_COORDS}&destination_place_id=&travelmode=driving`;
  window.open(mapsUrl, '_blank', 'noopener,noreferrer');
}

export default function Footer() {
  const brandColor = 'rgb(255, 140, 0)';

  return (
    <footer style={{ background: 'linear-gradient(180deg, #FFFDF9 0%, #FFFAF3 50%, #FFF6EB 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          <div className="lg:col-span-2">
            <img
              src={`${base}images/MainLogo-removebg-preview.png`}
              alt="Dahlia Resort Logo"
              className="h-24 lg:h-32 w-auto object-contain mb-5"
              style={{ filter: 'invert(58%) sepia(81%) saturate(2250%) hue-rotate(10deg) brightness(101%) contrast(105%)' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="mb-6 max-w-md text-base leading-relaxed" style={{ color: brandColor }}>
              A destination where timeless luxury meets contemporary elegance. Experience world-class hospitality in an unparalleled setting.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-full transition hover:bg-[rgb(255,140,0)] hover:text-white"
                  style={{ background: 'rgba(255,140,0,0.12)', color: brandColor }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 uppercase tracking-wider" style={{ color: brandColor }}>Our Resort</h4>
            <ul className="space-y-3 text-[15px]">
              {[
                ['Rooms & Suites', '#rooms'],
                ['Dining', '#dining'],
                ['Spa & Wellness', '#wellness'],
                ['Experiences', '#experiences'],
                ['Special Offers', '#offers'],
                ['Gallery', '#'],
              ].map(([label, href], i) => (
                <li key={i}>
                  <a href={href} style={{ color: brandColor }} className="transition hover:opacity-70 font-medium">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 uppercase tracking-wider" style={{ color: brandColor }}>Guest Services</h4>
            <ul className="space-y-3 text-[15px]">
              {['Reservations', 'Concierge', 'Events & Weddings', 'Business Services', 'Gift Cards', 'FAQs'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: brandColor }} className="transition hover:opacity-70 font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 uppercase tracking-wider" style={{ color: brandColor }}>Contact</h4>
            <ul className="space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" style={{ color: brandColor }} />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${RESORT_COORDS}&travelmode=driving`}
                  onClick={handleAddressClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-70 underline-offset-2 hover:underline cursor-pointer"
                  style={{ color: brandColor }}
                >
                  Bhimtal, Nainital<br />Uttarakhand, India
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} style={{ color: brandColor }} />
                <a href="tel:+1234567890" style={{ color: brandColor }} className="transition hover:opacity-70">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} style={{ color: brandColor }} />
                <a href="mailto:reservations@azurepalms.com" style={{ color: brandColor }} className="transition hover:opacity-70">
                  reservations@azurepalms.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,140,0,0.3)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: brandColor }}>
              &copy; {new Date().getFullYear()} Dahlia Resort. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item, i) => (
                <a key={i} href="#" style={{ color: brandColor }} className="transition hover:opacity-70">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
