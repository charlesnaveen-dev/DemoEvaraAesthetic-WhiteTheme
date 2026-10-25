import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, Star } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
            <Sparkles className="w-3 h-3 text-[#4A1571]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
              THE EVARA STANDARD
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
            Care built around trust.
          </h2>
          <p className="text-sm sm:text-base text-[#5B5566] font-light leading-relaxed">
            Rooted in clinical precision, patient transparency, and personalized attention at Tatabad, Coimbatore.
          </p>
        </div>

        {/* High-Contrast Editorial Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-[#E6E2ED]">
          
          <div className="space-y-2 text-center lg:text-left lg:border-r lg:border-[#E6E2ED] lg:pr-8">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl text-[#14101A] font-light">
                5.0
              </span>
              <Star className="w-5 h-5 text-[#F59E0B] fill-current" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#4A1571] font-semibold">
              Google Rating
            </p>
            <p className="text-xs text-[#5B5566] font-light">
              Consistent top satisfaction
            </p>
          </div>

          <div className="space-y-2 text-center lg:text-left lg:border-r lg:border-[#E6E2ED] lg:pr-8">
            <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl text-[#14101A] font-light">
              19+
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
              Google Reviews
            </p>
            <p className="text-xs text-[#5B5566] font-light">
              Verified local feedback
            </p>
          </div>

          <div className="space-y-2 text-center lg:text-left lg:border-r lg:border-[#E6E2ED] lg:pr-8">
            <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl text-[#14101A] font-light">
              1:1
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#4A1571] font-semibold">
              Personalized Consultation
            </p>
            <p className="text-xs text-[#5B5566] font-light">
              Tailored treatment mapping
            </p>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-light pt-2 block">
              3-in-1
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
              Dental · Skin · Hair
            </p>
            <p className="text-xs text-[#5B5566] font-light">
              Unified destination clinic
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
