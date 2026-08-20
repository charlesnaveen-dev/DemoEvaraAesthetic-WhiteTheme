import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F8F7F3] border-t border-[#292929] pt-20 pb-24 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-[#292929] pb-16">
          
          {/* Brand & Identity Column (Logo, Statement) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <img
                src="/images/evara-logo-white-transparent.png"
                alt="Evara Aesthetics Logo"
                className="h-14 w-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl tracking-[0.2em] font-medium text-white group-hover:text-[#B89B5E] transition-colors">
                  EVARA
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#A4A4A0] uppercase font-light">
                  AESTHETICS
                </span>
              </div>
            </Link>

            <p className="text-xs uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              {CLINIC_INFO.primaryStatement}
            </p>

            <p className="text-xs text-[#A4A4A0] font-light leading-relaxed max-w-sm">
              One unified destination for your smile, skin, and hair care. Thoughtful aesthetic evaluations led by clinical care standards in Coimbatore.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs text-[#A4A4A0]">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B89B5E]" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold block border-b border-[#292929] pb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs text-[#A4A4A0]">
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold block border-b border-[#292929] pb-2">
              CLINIC LOCATION
            </span>

            <div className="space-y-3 text-xs text-[#A4A4A0] font-light">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#B89B5E] mt-0.5 shrink-0" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <a href={CLINIC_INFO.phoneCallUrl} className="text-white hover:text-[#B89B5E] font-medium transition-colors">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/book-consultation"
                className="w-full py-3 bg-[#1A1A1A] border border-[#292929] text-white text-center text-xs uppercase tracking-[0.18em] font-medium block hover:border-[#B89B5E] transition-colors flex items-center justify-center"
              >
                <span>BOOK CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar & Disclaimer */}
        <div className="space-y-6 text-xs text-[#A4A4A0] font-light">
          
          <p className="text-[11px] text-[#A4A4A0]/70 leading-relaxed border-b border-[#292929] pb-6">
            <strong>Medical Disclaimer:</strong> The content provided on this website is for informational purposes only and does not constitute personalized medical or dental diagnosis or treatment advice. Treatment suitability, timelines, and outcomes are evaluated during individual professional clinical consultations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© 2026 Evara Aesthetics. All rights reserved.</p>
            <div className="flex items-center space-x-6">
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
