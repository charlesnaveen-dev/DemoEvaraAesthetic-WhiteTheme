import useScrollActive from '../hooks/useScrollActive';
import { Sparkles, MapPin } from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2ED] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF] mb-3">
              <Sparkles className="w-3 h-3 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
                CLINICAL TEAM
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal mt-1">
              Meet the people behind Evara.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5B5566] max-w-md font-light leading-relaxed">
            Dedicated clinical practitioners and attentive care staff committed to patient comfort and personalized treatment excellence.
          </p>
        </div>

        {/* Visually Complete Editorial Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <TeamCard key={item} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ item }) {
  const { ref, isActive } = useScrollActive();

  return (
    <div
      ref={ref}
      className={`bg-[#FAF9FC] border border-[#E6E2ED] rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between group ${isActive ? 'is-active' : ''} shadow-sm hover:shadow-xl hover:shadow-purple-950/5 transition-all duration-300`}
    >
      <div className="space-y-5">
        <div className="aspect-[4/5] bg-white rounded-2xl border border-[#E6E2ED] overflow-hidden relative flex items-center justify-center">
          <img
            src={`https://images.unsplash.com/photo-${item === 1 ? '1622253692010-333f2da6031d' : item === 2 ? '1584515979956-d9f6e5d09982' : '1559839734-2b71ea197ec2'}?q=80&w=800&auto=format&fit=crop`}
            alt="Evara Clinical Staff"
            loading="lazy"
            className="w-full h-full object-cover grayscale opacity-85 group-hover:opacity-100 group-[.is-active]:opacity-100 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14101A]/40 via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
            EVARA CLINICAL TEAM
          </span>
          <h3 className="font-serif-luxury text-2xl text-[#14101A] font-normal group-hover:text-[#4A1571] transition-colors">
            Clinical Practitioner
          </h3>
          <p className="text-xs sm:text-sm text-[#5B5566] font-light">
            Dental, Skin & Aesthetic Care
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-[#E6E2ED] text-xs text-[#5B5566] font-light flex items-center justify-between">
        <span className="flex items-center">
          <MapPin className="w-3.5 h-3.5 mr-1 text-[#797285]" />
          TATABAD, COIMBATORE
        </span>
        <span className="text-[#4A1571] font-semibold text-[11px] uppercase tracking-wider">CONSULTATION-LED</span>
      </div>
    </div>
  );
}
