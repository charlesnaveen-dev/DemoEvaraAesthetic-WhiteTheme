import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Star, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-10 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] overflow-hidden">
      
      {/* Editorial Ambient Light Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#F3E8FF]/60 via-[#E0F2FE]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-[#FAF5FF]/70 via-[#F0F9FF]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Typography & Calls to Action */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8">
            
            {/* Eyebrow & Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6E2ED] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#4A1571]">
                  {CLINIC_INFO.heroEyebrow}
                </span>
              </div>
              <span className="hidden sm:inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-[#797285] font-light">
                <Sparkles className="w-3 h-3 text-[#38BDF8] mr-1.5" />
                INTEGRATED CLINIC
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-serif-luxury text-5xl sm:text-7xl lg:text-[5.5rem] font-normal leading-[1.04] text-[#14101A] tracking-tight"
            >
              Dental. Skin. Hair. <br />
              <span className="italic font-light text-[#4A1571]">One destination.</span>
            </motion.h1>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-[1.125rem] text-[#5B5566] max-w-xl font-light leading-relaxed"
            >
              {CLINIC_INFO.heroSubtext}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2A0845] hover:bg-[#4A1571] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300 shadow-md group border border-[#2A0845]"
              >
                <span>BOOK A CONSULTATION</span>
                <div className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center ml-2.5 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>

              <Link
                to="/dental"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#14101A] hover:text-[#4A1571] border border-[#E6E2ED] hover:border-[#4A1571] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all shadow-xs"
              >
                EXPLORE OUR SERVICES
              </Link>
            </motion.div>

            {/* Google Ratings Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-3 pt-3"
            >
              <div className="flex items-center space-x-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-[#14101A] font-semibold">
                5.0 ★ Google Rating
              </span>
              <span className="text-xs text-[#797285] font-light">
                (19+ Verified Patient Reviews)
              </span>
            </motion.div>

          </div>

          {/* RIGHT: SERENE Signature Art-Directed Feature Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Architectural Framing */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#E6E2ED] bg-white shadow-xl shadow-purple-950/5">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
                  alt="Evara Aesthetics Clinical Wellness & Aesthetic Care"
                  fetchpriority="high"
                  width="1200"
                  height="1500"
                  className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Subtle Refined Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14101A]/60 via-transparent to-black/10 pointer-events-none" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#38BDF8] font-medium block">
                    CLINICAL ENVIRONMENT
                  </span>
                  <p className="font-serif-luxury text-xl sm:text-2xl font-light">
                    Modern aesthetics designed around you.
                  </p>
                </div>
              </div>

              {/* Floating Glass Badges */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white/90 backdrop-blur-md border border-[#E6E2ED] rounded-2xl px-4 py-3 shadow-lg flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#797285] font-medium block">
                    LOCATION
                  </span>
                  <span className="text-xs font-serif-luxury font-medium text-[#14101A]">
                    Tatabad, Coimbatore
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white/90 backdrop-blur-md border border-[#E6E2ED] rounded-2xl px-4 py-3 shadow-lg items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#4A1571]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#797285] font-medium block">
                    DISCIPLINES
                  </span>
                  <span className="text-xs font-serif-luxury font-medium text-[#14101A]">
                    Dental · Skin · Hair Care
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Bar: Editorial Meta & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#E6E2ED] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Disciplines Index */}
        <div className="flex items-center space-x-6 text-[11px] uppercase tracking-[0.25em] text-[#797285]">
          <span className="hover:text-[#4A1571] transition-colors"><strong className="text-[#4A1571] font-mono">01</strong> DENTAL</span>
          <span className="text-[#D8D4E2]">/</span>
          <span className="hover:text-[#4A1571] transition-colors"><strong className="text-[#4A1571] font-mono">02</strong> SKIN</span>
          <span className="text-[#D8D4E2]">/</span>
          <span className="hover:text-[#4A1571] transition-colors"><strong className="text-[#4A1571] font-mono">03</strong> HAIR</span>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#pillars"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#5B5566] hover:text-[#4A1571] transition-colors group"
        >
          <span>SCROLL TO DISCOVER</span>
          <div className="w-5 h-5 rounded-full border border-[#E6E2ED] group-hover:border-[#4A1571] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform text-[#4A1571]" />
          </div>
        </motion.a>

      </div>

    </section>
  );
}
