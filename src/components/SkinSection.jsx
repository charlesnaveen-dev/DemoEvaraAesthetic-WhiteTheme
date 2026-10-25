import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import useScrollActive from '../hooks/useScrollActive';

export default function SkinSection() {
  const skinServices = SERVICES.filter(s => s.category === 'skin');

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E6E2ED] pb-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
              <Sparkles className="w-3 h-3 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
                SKIN DISCIPLINE
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
              Skin care, <br />
              <span className="italic font-light text-[#4A1571]">considered differently.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#5B5566] font-light leading-relaxed">
              Targeted clinical approaches designed to support skin health, manage acne, refine texture, and balance pigmentation following a thorough skin analysis.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#0284C7] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#0284C7]" />
              <span>Treatment suitability depends on personalized consultation.</span>
            </div>
          </div>
        </div>

        {/* Skin Services Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skinServices.map((service) => (
            <ServiceCard key={service.id} service={service} fallbackImg="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/skin"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2A0845] hover:bg-[#4A1571] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300 shadow-md group"
          >
            <span>Explore Skin Care</span>
            <div className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center ml-2.5 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}

export function ServiceCard({ service, fallbackImg }) {
  const { ref, isActive } = useScrollActive();

  return (
    <Link
      ref={ref}
      to={service.path}
      className={`bg-white border border-[#E6E2ED] hover:border-[#4A1571]/50 group-[.is-active]:border-[#4A1571]/50 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between group ${isActive ? 'is-active' : ''} h-full shadow-sm hover:shadow-xl hover:shadow-purple-950/5`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between text-[#797285]">
          <span className="text-xs font-mono text-[#0284C7] font-semibold">{service.num}</span>
          <div className="w-8 h-8 rounded-full border border-[#E6E2ED] group-hover:border-[#4A1571] group-hover:bg-[#FAF5FF] flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#4A1571] group-[.is-active]:text-[#4A1571] group-hover:translate-x-0.5 group-[.is-active]:translate-x-0.5 group-hover:-translate-y-0.5 group-[.is-active]:-translate-y-0.5 transition-all text-[#797285]" />
          </div>
        </div>
        
        <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-[#FAF9FC] border border-[#E6E2ED]">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImg;
            }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#14101A] font-normal group-hover:text-[#4A1571] group-[.is-active]:text-[#4A1571] transition-colors leading-snug">
          {service.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#5B5566] font-light leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-5 mt-4 border-t border-[#E6E2ED] flex items-center justify-between text-[11px] uppercase tracking-widest text-[#797285] group-hover:text-[#4A1571] group-[.is-active]:text-[#4A1571] transition-colors font-medium">
        <span>EXPLORE</span>
        <span className="w-6 h-[1.5px] bg-current group-hover:w-10 group-[.is-active]:w-10 transition-all" />
      </div>
    </Link>
  );
}
