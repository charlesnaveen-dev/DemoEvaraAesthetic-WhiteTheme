import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="bg-[#10081C] text-[#FAF9FC] border-t border-[#24173B] pt-20 pb-24 sm:pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-[#24173B] pb-16">
          
          {/* Brand & Identity Column (Logo, Statement) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3.5 group">
              <div className="relative">
                <img
                  src="/images/evara-logo-white-transparent.png"
                  alt="Evara Aesthetics Logo"
                  className="h-13 w-13 object-contain"
                />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#38BDF8]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl tracking-[0.24em] font-medium text-white group-hover:text-[#D8B4FE] transition-colors">
                  EVARA
                </span>
                <span className="text-[10px] tracking-[0.32em] text-[#B8B2C4] uppercase font-light">
                  AESTHETICS
                </span>
              </div>
            </Link>

            <p className="text-xs uppercase tracking-[0.28em] text-[#38BDF8] font-semibold">
              {CLINIC_INFO.primaryStatement}
            </p>

            <p className="text-xs sm:text-sm text-[#B8B2C4] font-light leading-relaxed max-w-sm">
              One unified destination for your smile, skin, and hair care. Thoughtful aesthetic evaluations led by clinical care standards in Coimbatore.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs text-[#B8B2C4]">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:text-[#38BDF8] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Instagram className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#38BDF8] font-semibold block border-b border-[#24173B] pb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs text-[#B8B2C4]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/dental" className="hover:text-white transition-colors">Dental Discipline</Link></li>
              <li><Link to="/skin" className="hover:text-white transition-colors">Skin Discipline</Link></li>
              <li><Link to="/hair" className="hover:text-white transition-colors">Hair Discipline</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Evara</Link></li>
              <li><Link to="/our-approach" className="hover:text-white transition-colors">Our Approach</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews & Ratings</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal / Articles</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#38BDF8] font-semibold block border-b border-[#24173B] pb-2">
              CLINIC LOCATION
            </span>

            <div className="space-y-3.5 text-xs text-[#B8B2C4] font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{CLINIC_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center space-x-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={CLINIC_INFO.phoneCallUrl} className="text-white hover:text-[#38BDF8] font-medium transition-colors">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/book-consultation"
                className="w-full py-3.5 bg-[#1F1135] border border-[#3E2968] text-white text-center text-xs uppercase tracking-[0.18em] font-medium block hover:border-[#7E22CE] hover:bg-[#2A0845] transition-all rounded-full flex items-center justify-center shadow-md group"
              >
                <span>BOOK CONSULTATION</span>
                <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#38BDF8] group-hover:text-[#10081C] flex items-center justify-center ml-2 transition-colors">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar & Disclaimer */}
        <div className="space-y-6 text-xs text-[#B8B2C4] font-light">
          
          <p className="text-[11px] text-[#8B8599] leading-relaxed border-b border-[#24173B] pb-6">
            <strong className="text-[#B8B2C4]">Medical Disclaimer:</strong> The content provided on this website is for informational purposes only and does not constitute personalized medical or dental diagnosis or treatment advice. Treatment suitability, timelines, and outcomes are evaluated during individual professional clinical consultations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© 2026 Evara Aesthetics. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-[#8B8599]">
              <Link to="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/faq" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/faq" className="hover:text-white transition-colors">Medical Disclaimer</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
