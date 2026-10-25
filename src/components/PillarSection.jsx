import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/servicesData';
import useScrollActive from '../hooks/useScrollActive';

export default function PillarSection() {
  return (
    <section id="pillars" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2ED] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
              <Sparkles className="w-3 h-3 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#4A1571] font-semibold">
                CORE DISCIPLINES
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
              Three pillars of care.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5B5566] max-w-md font-light leading-relaxed">
            One unified destination for your smile, skin, and hair — thoughtfully integrated around your personal aesthetic journey.
          </p>
        </div>

        {/* 3 Large Visual Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {CATEGORIES.map((cat, idx) => (
            <PillarCard key={cat.id} cat={cat} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PillarCard({ cat, idx }) {
  const { ref, isActive } = useScrollActive();

  return (
    <Link
      ref={ref}
      to={cat.path}
      className={`group ${isActive ? 'is-active' : ''} relative flex flex-col justify-between min-h-[540px] bg-[#FAF9FC] border border-[#E6E2ED] hover:border-[#4A1571]/50 group-[.is-active]:border-[#4A1571]/50 transition-all duration-500 rounded-3xl overflow-hidden p-8 sm:p-9 shadow-sm hover:shadow-xl hover:shadow-purple-950/5`}
    >
      {/* Card Background Image with Natural Editorial Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={cat.heroImage}
          alt={`${cat.title} Care at Evara Aesthetics`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop";
          }}
          className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-35 group-[.is-active]:opacity-35 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9FC] via-[#FAF9FC]/85 to-transparent" />
      </div>

      {/* TOP: Numbering & Arrow Indicator */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#E6E2ED] pb-5">
        <span className="font-serif-luxury text-3xl font-light text-[#797285] group-hover:text-[#4A1571] group-[.is-active]:text-[#4A1571] transition-colors">
          0{idx + 1}
        </span>
        <div className="w-10 h-10 rounded-full border border-[#E6E2ED] group-hover:border-[#4A1571] group-[.is-active]:border-[#4A1571] bg-white group-hover:bg-[#4A1571] group-[.is-active]:bg-[#4A1571] group-hover:text-white group-[.is-active]:text-white flex items-center justify-center text-[#14101A] transition-all duration-300 shadow-xs">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-[.is-active]:translate-x-0.5 group-hover:-translate-y-0.5 group-[.is-active]:-translate-y-0.5" />
        </div>
      </div>

      {/* BOTTOM: Content */}
      <div className="relative z-10 space-y-4 pt-16">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
          {cat.tagline}
        </span>
        
        <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#14101A] font-normal leading-tight group-hover:text-[#4A1571] group-[.is-active]:text-[#4A1571] transition-colors">
          {cat.title}
        </h3>

        <p className="text-sm font-serif-luxury italic text-[#5B5566] group-hover:text-[#14101A] group-[.is-active]:text-[#14101A] transition-colors">
          "{cat.quote}"
        </p>

        <p className="text-xs sm:text-sm text-[#5B5566] font-light leading-relaxed line-clamp-3 pt-1">
          {cat.description}
        </p>

        <div className="pt-4 flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#14101A] font-medium group-hover:text-[#4A1571] group-[.is-active]:text-[#4A1571] transition-colors">
          <span>Explore {cat.title}</span>
          <span className="w-6 h-[1.5px] bg-current group-hover:w-10 group-[.is-active]:w-10 transition-all" />
        </div>
      </div>

    </Link>
  );
}
