import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function CTASection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#111111] border-t border-[#292929] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
          YOUR NEXT STEP
        </span>

        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl text-[#F8F7F3] font-normal leading-[1.05]">
          Start with a <br />
          <span className="italic font-light">conversation.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#A4A4A0] font-light max-w-xl mx-auto leading-relaxed">
          Tell us what you're looking for. We'll help you explore the right next step for your smile, skin, or hair.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book-consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-[#F8F7F3] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all border border-[#F8F7F3]"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>

          <a
            href={CLINIC_INFO.phoneCallUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-transparent text-[#F8F7F3] border border-[#292929] hover:border-white text-xs uppercase tracking-[0.2em] font-medium transition-all"
          >
            <Phone className="w-4 h-4 mr-2 text-[#B89B5E]" />
            <span>CALL EVARA: {CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
