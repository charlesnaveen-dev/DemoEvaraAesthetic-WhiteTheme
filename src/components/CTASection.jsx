import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF] text-[#16141A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
        
        <span className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium block">
          YOUR NEXT STEP
        </span>

        <h2 className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl text-[#16141A] font-normal leading-[1.08]">
          Start with a <br />
          <span className="italic font-light text-[#3B1457]">conversation.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#4E4B54] font-light max-w-xl mx-auto leading-relaxed">
          Tell us what you're looking for. We'll help you explore the right next step for your smile, skin, or hair.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/book-consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-[#3B1457] text-white hover:bg-[#4D1A72] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all shadow-xs group"
          >
            <span>BOOK A CONSULTATION</span>
            <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center ml-2.5 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>

          <a
            href={CLINIC_INFO.phoneCallUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-white text-[#16141A] border border-[#DCE5DF] hover:border-[#16141A] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all shadow-xs"
          >
            <Phone className="w-4 h-4 mr-2 text-[#0284C7]" />
            <span>CALL EVARA: {CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
