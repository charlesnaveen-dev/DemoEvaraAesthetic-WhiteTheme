import { Star } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E6EB]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E6EB] pb-8">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#84808C] font-medium">
              THE EVARA STANDARD
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-normal leading-tight">
              Care built around trust.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#55525B] max-w-md font-light leading-relaxed">
            Rooted in clinical precision, patient transparency, and personalized attention at Tatabad, Coimbatore.
          </p>
        </div>

        {/* Clean Typographic Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          <div className="space-y-2 lg:border-r lg:border-[#E8E6EB] lg:pr-8">
            <div className="flex items-center space-x-2">
              <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-light">
                5.0
              </span>
              <Star className="w-4 h-4 text-[#F59E0B] fill-current" />
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#121016] font-medium">
              Google Rating
            </p>
            <p className="text-xs text-[#84808C] font-light">
              Consistent top satisfaction
            </p>
          </div>

          <div className="space-y-2 lg:border-r lg:border-[#E8E6EB] lg:pr-8">
            <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-light block">
              19+
            </span>
            <p className="text-xs uppercase tracking-[0.16em] text-[#121016] font-medium">
              Google Reviews
            </p>
            <p className="text-xs text-[#84808C] font-light">
              Verified local feedback
            </p>
          </div>

          <div className="space-y-2 lg:border-r lg:border-[#E8E6EB] lg:pr-8">
            <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-light block">
              1:1
            </span>
            <p className="text-xs uppercase tracking-[0.16em] text-[#121016] font-medium">
              Personalized Consultation
            </p>
            <p className="text-xs text-[#84808C] font-light">
              Tailored treatment mapping
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-light block">
              3-in-1
            </span>
            <p className="text-xs uppercase tracking-[0.16em] text-[#121016] font-medium">
              Dental · Skin · Hair
            </p>
            <p className="text-xs text-[#84808C] font-light">
              Unified destination clinic
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}