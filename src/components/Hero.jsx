import { Link } from 'react-router-dom';
import { ArrowDown, Star, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#3B1457]/70" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium">
                {CLINIC_INFO.heroEyebrow}
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.04] text-[#16141A] tracking-tight">
              Dental. Skin. Hair. <br />
              <span className="italic font-light text-[#3B1457]">One destination.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#4E4B54] max-w-xl font-light leading-relaxed">
              {CLINIC_INFO.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3B1457] hover:bg-[#4D1A72] text-white text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-all shadow-xs group"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="#pillars"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-[#16141A] border border-[#DCE5DF] hover:border-[#16141A] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-colors backdrop-blur-xs"
              >
                EXPLORE DISCIPLINES
              </a>
            </div>

            {/* Rating and Clinical Note */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#4E4B54]">
              <div className="flex items-center space-x-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-[#16141A]">5.0 Google Rating</span>
              <span className="text-[#7A7682] font-light">(19+ Verified Patient Reviews)</span>
              <span className="text-[#DCE5DF] hidden sm:inline">·</span>
              <span className="text-[#7A7682] font-light">Tatabad, Coimbatore</span>
            </div>

          </div>

          {/* Right Column: Serene Editorial Photography Frame */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-xs border border-[#DCE5DF]">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
                alt="Evara Aesthetics Clinical Care in Coimbatore"
                fetchpriority="high"
                width="1200"
                height="1500"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/60 flex items-center justify-between text-xs">
                <span className="font-serif-luxury text-base text-[#16141A] font-medium">Individualized Care Plan</span>
                <span className="text-[10px] uppercase tracking-widest text-[#3B1457] font-semibold">1:1 Consultation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="pt-10 sm:pt-12 mt-12 sm:mt-16 border-t border-[#DCE5DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[#7A7682]">
          <div className="flex items-center space-x-6">
            <span className="text-[#16141A] font-medium">01 DENTAL</span>
            <span className="text-[#DCE5DF]">/</span>
            <span className="text-[#16141A] font-medium">02 SKIN</span>
            <span className="text-[#DCE5DF]">/</span>
            <span className="text-[#16141A] font-medium">03 HAIR</span>
          </div>

          <a
            href="#pillars"
            className="flex items-center space-x-2 text-[#4E4B54] hover:text-[#16141A] transition-colors group"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#3B1457]" />
          </a>
        </div>

      </div>
    </section>
  );
}
