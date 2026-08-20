import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Star, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] overflow-hidden">
      
      {/* Background Editorial Media with subtle zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2000&auto=format&fit=crop"
          alt="Evara Aesthetics Editorial Background"
          className="w-full h-full object-cover object-center grayscale opacity-15 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Light Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F3] via-[#F8F7F3]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-transparent to-[#F8F7F3]/80" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-4xl space-y-8">
          
          {/* Eyebrow & Subtle Gold Accent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center space-x-3"
          >
            <span className="w-8 h-[1px] bg-[#B89B5E]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#555555]">
              {CLINIC_INFO.heroEyebrow}
            </span>
          </motion.div>

          {/* Line-by-line Animated Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.02] text-[#111111] tracking-tight"
          >
            Dental. Skin. Hair. <br />
            <span className="italic font-light text-[#333333]">One destination.</span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-[#555555] max-w-2xl font-light leading-relaxed"
          >
            {CLINIC_INFO.heroSubtext}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
          >
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#222222] transition-all rounded-none border border-[#111111] group shadow-sm"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/dental"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#111111] border border-[#E5E3DC] hover:border-[#111111] text-xs uppercase tracking-[0.2em] font-medium transition-all"
            >
              EXPLORE OUR SERVICES
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Bar: Ratings & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#E5E3DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center space-x-3"
        >
          <div className="flex items-center space-x-1 text-[#B89B5E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-xs uppercase tracking-widest text-[#111111] font-medium">
            5.0 ★ Google Rating
          </span>
          <span className="text-xs text-[#555555] font-light">
            (19+ Google Reviews)
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#pillars"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#555555] hover:text-[#111111] transition-colors group"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.a>

      </div>

    </section>
  );
}
