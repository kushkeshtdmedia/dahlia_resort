import { Palmtree, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-0 min-h-[85vh]">
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="flex flex-col bg-white relative">
      <div className="relative flex-1 min-h-[300px] md:min-h-0 rounded-br-[80px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Tropical resort with palm trees and pool"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mt-[-40px] md:mt-[-60px] ml-4 md:ml-6 z-10 flex items-end gap-0">
        {/* <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[5px] border-[#c9a070] shadow-xl z-20">
          <img
            src="https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Woman enjoying crystal clear water"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[5px] border-[#c9a070] shadow-xl -ml-8 z-10">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Stunning resort pool aerial view"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>

      <div className="mt-8 md:mt-auto pb-6 md:pb-10 px-4 text-center">
        <p className="text-black/90 text-sm md:text-base tracking-wide">
          +123 456 789 000
        </p>
        <p className="text-black/60 text-xs md:text-sm mt-1 tracking-wide">
          123 Anywhere St, Any City, ST123
        </p>
      </div>
    </div>
  );
}

function CenterPanel() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="relative min-h-[260px] md:min-h-[320px] overflow-hidden rounded-b-[80px]">
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Luxury resort pool with lounge chairs"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-10 md:py-8">
        <h2 className="text-3xl md:text-4xl font-serif italic text-[#c9a070] mb-2">
          Contact Us
        </h2>
        <p className="text-black/50 text-sm mb-6 tracking-wide">We'd love to hear from you</p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-10">
            <div className="w-14 h-14 rounded-full bg-[#c9a070]/20 flex items-center justify-center">
              <Send size={24} className="text-[#c9a070]" />
            </div>
            <p className="text-[#c9a070] font-serif italic text-xl">Thank you!</p>
            <p className="text-black/60 text-sm">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/5 border border-black/15 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/40 focus:outline-none focus:border-[#c9a070] focus:bg-black/[0.03] transition"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/5 border border-black/15 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/40 focus:outline-none focus:border-[#c9a070] focus:bg-black/[0.03] transition"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/5 border border-black/15 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/40 focus:outline-none focus:border-[#c9a070] focus:bg-black/[0.03] transition"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/5 border border-black/15 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/40 focus:outline-none focus:border-[#c9a070] focus:bg-black/[0.03] transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#c9a070] hover:bg-[#b8905f] text-white font-semibold py-3 rounded-lg tracking-wider text-sm uppercase transition flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative flex-1 min-h-[300px] md:min-h-0 rounded-bl-[80px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Aerial view of resort pools and palm trees"
          className="w-full h-full object-cover"
        />
      </div>

      {/* <div className="flex flex-col items-center text-center px-6 py-10 md:py-8">
        <Palmtree size={36} className="text-black mb-4" />
        <p className="text-black/70 text-sm tracking-wider mb-2">
          Best Hotel Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-serif italic text-black mb-4 leading-tight">
          Paradise Motal
        </h2>
        <p className="text-black/50 text-sm tracking-wider">
          www.paradisemotal.com
        </p>
      </div> */}
    </div>
  );
}