import { Link } from 'react-router-dom';
import { ArrowDown, Star, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E6EB]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Eyebrow */}
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#84808C] font-medium">
              {CLINIC_INFO.heroEyebrow}
            </p>

            {/* Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.05] text-[#121016] tracking-tight">
              Dental. Skin. Hair. <br />
              <span className="italic font-light text-[#3B1457]">One destination.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#55525B] max-w-lg font-light leading-relaxed">
              {CLINIC_INFO.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3B1457] hover:bg-[#4F1D75] text-white text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-colors group"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/dental"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#121016] border border-[#E8E6EB] hover:border-[#121016] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-colors"
              >
                EXPLORE OUR SERVICES
              </Link>
            </div>

            {/* Rating and Clinical Note */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#55525B]">
              <div className="flex items-center space-x-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-[#121016]">5.0 Google Rating</span>
              <span className="text-[#84808C] font-light">(19+ Verified Patient Reviews)</span>
              <span className="text-[#DDD9E2] hidden sm:inline">·</span>
              <span className="text-[#84808C] font-light">Tatabad, Coimbatore</span>
            </div>

          </div>

          {/* Right Column: Clean Architectural Photography Frame */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F9F9F8] border border-[#E8E6EB]">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
                alt="Evara Aesthetics Clinical Care in Coimbatore"
                fetchpriority="high"
                width="1200"
                height="1500"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="pt-10 sm:pt-14 mt-12 sm:mt-16 border-t border-[#E8E6EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[#84808C]">
          <div className="flex items-center space-x-6">
            <span className="text-[#121016] font-medium">01 DENTAL</span>
            <span className="text-[#DDD9E2]">/</span>
            <span className="text-[#121016] font-medium">02 SKIN</span>
            <span className="text-[#DDD9E2]">/</span>
            <span className="text-[#121016] font-medium">03 HAIR</span>
          </div>

          <a
            href="#pillars"
            className="flex items-center space-x-2 text-[#55525B] hover:text-[#121016] transition-colors group"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#3B1457]" />
          </a>
        </div>

      </div>
    </section>
  );
}