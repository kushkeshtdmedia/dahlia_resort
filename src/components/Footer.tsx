import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 tracking-wider">Dahila Resort</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A destination where timeless luxury meets contemporary elegance. Experience world-class hospitality in an unparalleled setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#19223F] transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#19223F] transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#19223F] transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#19223F] transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Our Resort</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#rooms" className="hover:text-white transition">Rooms & Suites</a></li>
              <li><a href="#dining" className="hover:text-white transition">Dining</a></li>
              <li><a href="#wellness" className="hover:text-white transition">Spa & Wellness</a></li>
              <li><a href="#experiences" className="hover:text-white transition">Experiences</a></li>
              <li><a href="#offers" className="hover:text-white transition">Special Offers</a></li>
              <li><a href="#" className="hover:text-white transition">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Guest Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Reservations</a></li>
              <li><a href="#" className="hover:text-white transition">Concierge</a></li>
              <li><a href="#" className="hover:text-white transition">Events & Weddings</a></li>
              <li><a href="#" className="hover:text-white transition">Business Services</a></li>
              <li><a href="#" className="hover:text-white transition">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Paradise Beach Road<br />Coastal City, CC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:reservations@azurepalms.com" className="hover:text-white transition">reservations@azurepalms.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dahila Resort. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
              <a href="#" className="hover:text-white transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
