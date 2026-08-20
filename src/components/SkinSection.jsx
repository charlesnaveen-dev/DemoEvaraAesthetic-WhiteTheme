import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import useScrollActive from '../hooks/useScrollActive';

export default function SkinSection() {
  const skinServices = SERVICES.filter(s => s.category === 'skin');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E5E3DC] pb-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              SKIN DISCIPLINE
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-tight">
              Skin care, <br />
              <span className="italic">considered differently.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-[#555555] font-light leading-relaxed">
              Targeted clinical approaches designed to support skin health, manage acne, refine texture, and balance pigmentation following a thorough skin analysis.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#B89B5E] italic">
              <ShieldCheck className="w-4 h-4 shrink-0" />
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
            className="inline-flex items-center justify-center px-8 py-4 bg-[#111111] text-white border border-[#111111] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#222222] transition-all shadow-sm"
          >
            <span>Explore Skin Care</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
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
      className={`bg-[#FFFFFF] border border-[#E5E3DC] hover:border-[#B89B5E]/50 group-[.is-active]:border-[#B89B5E]/50 transition-all duration-300 p-6 flex flex-col justify-between group ${isActive ? 'is-active' : ''} h-full shadow-sm`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between text-[#555555]">
          <span className="text-xs font-mono text-[#B89B5E]">{service.num}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:text-[#111111] group-[.is-active]:text-[#111111] group-hover:translate-x-0.5 group-[.is-active]:translate-x-0.5 group-hover:-translate-y-0.5 group-[.is-active]:-translate-y-0.5 transition-all" />
        </div>
        
        <div className="aspect-[3/2] overflow-hidden bg-[#F8F7F3]">
          <img
            src={service.image}
            alt={service.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImg;
            }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-500"
          />
        </div>

        <h3 className="font-serif-luxury text-xl text-[#111111] font-normal group-hover:text-[#B89B5E] group-[.is-active]:text-[#B89B5E] transition-colors">
          {service.name}
        </h3>

        <p className="text-xs text-[#555555] font-light leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-6 mt-4 border-t border-[#E5E3DC]/50 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#555555] group-hover:text-[#111111] group-[.is-active]:text-[#111111] transition-colors">
        <span>EXPLORE</span>
        <span className="w-6 h-[1px] bg-current group-hover:w-10 group-[.is-active]:w-10 transition-all" />
      </div>
    </Link>
  );
}
