import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import useScrollActive from '../hooks/useScrollActive';

export default function HairSection() {
  const hairServices = SERVICES.filter(s => s.category === 'hair');

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E6E2ED] pb-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
              <Sparkles className="w-3 h-3 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
                HAIR DISCIPLINE
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
              Healthy-looking hair <br />
              <span className="italic font-light text-[#4A1571]">starts with the right care.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#5B5566] font-light leading-relaxed">
              Care for your hair. Care for your confidence. We combine scalp health evaluations, targeted topical growth support, and clinical PRP protocols planned around your scalp requirements.
            </p>
            <Link
              to="/hair"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#14101A] hover:text-[#4A1571] font-semibold transition-colors group"
            >
              <span>Explore Hair Care</span>
              <div className="w-6 h-6 rounded-full bg-[#FAF5FF] group-hover:bg-[#4A1571] group-hover:text-white flex items-center justify-center ml-2 transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Hair Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hairServices.map((service) => (
            <HairCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

function HairCard({ service }) {
  const { ref, isActive } = useScrollActive();

  return (
    <div
      ref={ref}
      className={`bg-[#FAF9FC] border border-[#E6E2ED] hover:border-[#4A1571]/50 group-[.is-active]:border-[#4A1571]/50 transition-all duration-300 rounded-3xl flex flex-col justify-between overflow-hidden group ${isActive ? 'is-active' : ''} p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-purple-950/5`}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-[#0284C7] font-semibold">{service.num}</span>
          <span className="text-[10px] uppercase tracking-widest text-[#797285] font-light">HAIR</span>
        </div>

        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#E6E2ED]">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#14101A] font-normal group-hover:text-[#4A1571] group-[.is-active]:text-[#4A1571] transition-colors leading-snug">
          {service.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#5B5566] font-light leading-relaxed">
          {service.shortDescription}
        </p>

        <ul className="space-y-2.5 pt-3 border-t border-[#E6E2ED]">
          {service.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-center text-xs text-[#5B5566] font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] mr-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8">
        <Link
          to={service.path}
          className="w-full py-3.5 rounded-full border border-[#E6E2ED] group-hover:border-[#4A1571] group-[.is-active]:border-[#4A1571] text-center text-xs uppercase tracking-[0.18em] text-[#14101A] hover:bg-[#2A0845] hover:text-white transition-all flex items-center justify-center font-medium shadow-xs"
        >
          <span>VIEW DETAILS</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
