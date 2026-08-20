import { CLINIC_INFO } from '../data/clinicData';

export default function TrustSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            THE EVARA STANDARD
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#111111] font-normal">
            Care built around trust.
          </h2>
          <p className="text-sm text-[#555555] font-light">
            Rooted in clinical precision, patient transparency, and personalized attention at Tatabad, Coimbatore.
          </p>
        </div>

        {/* High-Contrast Editorial Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-[#E5E3DC]">
          
          <div className="space-y-2 text-center lg:text-left lg:border-r lg:border-[#E5E3DC] lg:pr-8">
            <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl text-[#111111] font-light">
              5.0
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-semibold">
              Google Rating
            </p>
            <p className="text-[11px] text-[#555555] font-light">
              Consistent top satisfaction
            </p>
          </div>

          <div className="space-y-2 text-center lg:text-left lg:border-r lg:border-[#E5E3DC] lg:pr-8">
            <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl text-[#111111] font-light">
              19+
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-semibold">
              Google Reviews
            </p>
            <p className="text-[11px] text-[#555555] font-light">
              Verified local feedback
            </p>
          </div>

          <div className="space-y-2 text-center lg:text-left lg:border-r lg:border-[#E5E3DC] lg:pr-8">
            <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl text-[#111111] font-light">
              1:1
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-semibold">
              Personalized Consultation
            </p>
            <p className="text-[11px] text-[#555555] font-light">
              Tailored treatment mapping
            </p>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-light pt-2 block">
              3-in-1
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-semibold">
              Dental · Skin · Hair
            </p>
            <p className="text-[11px] text-[#555555] font-light">
              Unified destination clinic
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
