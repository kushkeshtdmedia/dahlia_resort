import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFCF7 50%, #FFF9F0 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <img
              src={`${base}images/MainLogo-removebg-preview.png`}
              alt="Dahlia Resort Logo"
              className="h-24 lg:h-32 w-auto object-contain mb-5"
              style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(800%) hue-rotate(10deg) brightness(95%) contrast(100%)' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <h3 className="text-4xl font-bold mb-5 tracking-wider text-[#CC7000]" style={{ display: 'none' }}>
              Dahlia Resort
            </h3>
            <p className="text-[#B06200] mb-6 max-w-md text-base leading-relaxed">
              A destination where timeless luxury meets contemporary elegance. Experience world-class hospitality in an unparalleled setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#FF8C00]/20 p-2.5 rounded-full hover:bg-[#CC7000] text-[#CC7000] hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#FF8C00]/20 p-2.5 rounded-full hover:bg-[#CC7000] text-[#CC7000] hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#FF8C00]/20 p-2.5 rounded-full hover:bg-[#CC7000] text-[#CC7000] hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-[#FF8C00]/20 p-2.5 rounded-full hover:bg-[#CC7000] text-[#CC7000] hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 uppercase tracking-wider text-[#CC7000]">Our Resort</h4>
            <ul className="space-y-3 text-[#B06200] text-[15px]">
              <li><a href="#rooms" className="hover:text-[#CC7000] transition">Rooms & Suites</a></li>
              <li><a href="#dining" className="hover:text-[#CC7000] transition">Dining</a></li>
              <li><a href="#wellness" className="hover:text-[#CC7000] transition">Spa & Wellness</a></li>
              <li><a href="#experiences" className="hover:text-[#CC7000] transition">Experiences</a></li>
              <li><a href="#offers" className="hover:text-[#CC7000] transition">Special Offers</a></li>
              <li><a href="#" className="hover:text-[#CC7000] transition">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 uppercase tracking-wider text-[#CC7000]">Guest Services</h4>
            <ul className="space-y-3 text-[#B06200] text-[15px]">
              <li><a href="#" className="hover:text-[#CC7000] transition">Reservations</a></li>
              <li><a href="#" className="hover:text-[#CC7000] transition">Concierge</a></li>
              <li><a href="#" className="hover:text-[#CC7000] transition">Events & Weddings</a></li>
              <li><a href="#" className="hover:text-[#CC7000] transition">Business Services</a></li>
              <li><a href="#" className="hover:text-[#CC7000] transition">Gift Cards</a></li>
              <li><a href="#" className="hover:text-[#CC7000] transition">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 uppercase tracking-wider text-[#CC7000]">Contact</h4>
            <ul className="space-y-4 text-[#B06200] text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-[#CC7000]" />
                <span>123 Paradise Beach Road<br />Coastal City, CC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#CC7000]" />
                <a href="tel:+1234567890" className="hover:text-[#CC7000] transition">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#CC7000]" />
                <a href="mailto:reservations@azurepalms.com" className="hover:text-[#CC7000] transition">reservations@azurepalms.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#CC7000]/25 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#B06200] text-sm">
              &copy; {new Date().getFullYear()} Dahlia Resort. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-[#B06200]">
              <a href="#" className="hover:text-[#CC7000] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#CC7000] transition">Terms of Service</a>
              <a href="#" className="hover:text-[#CC7000] transition">Cookie Policy</a>
              <a href="#" className="hover:text-[#CC7000] transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}