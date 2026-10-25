import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function CTASection() {
  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#150C24] border-t border-[#2C1D47] relative overflow-hidden text-[#FAF9FC]">
      
      {/* Editorial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3B0764]/40 via-[#0284C7]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2A1647] border border-[#442770]">
          <Sparkles className="w-3 h-3 text-[#38BDF8]" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#E0F2FE] font-semibold">
            YOUR NEXT STEP
          </span>
        </div>

        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl text-[#FAF9FC] font-normal leading-[1.04]">
          Start with a <br />
          <span className="italic font-light text-[#D8B4FE]">conversation.</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#B8B2C4] font-light max-w-xl mx-auto leading-relaxed">
          Tell us what you're looking for. We'll help you explore the right next step for your smile, skin, or hair.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/book-consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-white text-[#14101A] hover:bg-[#FAF9FC] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all shadow-lg group"
          >
            <span>BOOK A CONSULTATION</span>
            <div className="w-6 h-6 rounded-full bg-[#14101A]/10 group-hover:bg-[#4A1571] group-hover:text-white flex items-center justify-center ml-2.5 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <a
            href={CLINIC_INFO.phoneCallUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-transparent text-[#FAF9FC] border border-[#3E2968] hover:border-white text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all"
          >
            <Phone className="w-4 h-4 mr-2 text-[#38BDF8]" />
            <span>CALL EVARA: {CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
