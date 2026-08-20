import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/servicesData';
import useScrollActive from '../hooks/useScrollActive';

export default function PillarSection() {
  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E3DC] pb-8">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              CORE DISCIPLINES
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal">
              Three pillars of care.
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md font-light">
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
      className={`group ${isActive ? 'is-active' : ''} relative flex flex-col justify-between min-h-[520px] bg-[#F8F7F3] border border-[#E5E3DC] hover:border-[#B89B5E]/50 group-[.is-active]:border-[#B89B5E]/50 transition-all duration-500 overflow-hidden p-8 shadow-sm`}
    >
      {/* Card Background Image with Subtle Zoom Hover */}
      <div className="absolute inset-0 z-0">
        <img
          src={cat.heroImage}
          alt={`${cat.title} Care at Evara Aesthetics`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop";
          }}
          className="w-full h-full object-cover grayscale opacity-25 group-hover:opacity-40 group-[.is-active]:opacity-40 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F3] via-[#F8F7F3]/80 to-transparent" />
      </div>

      {/* TOP: Numbering & Arrow Indicator */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#E5E3DC]/80 pb-4">
        <span className="font-serif-luxury text-3xl font-light text-[#555555] group-hover:text-[#111111] group-[.is-active]:text-[#111111] transition-colors">
          0{idx + 1}
        </span>
        <div className="w-10 h-10 border border-[#E5E3DC] group-hover:border-[#111111] group-[.is-active]:border-[#111111] group-hover:bg-[#111111] group-[.is-active]:bg-[#111111] group-hover:text-white group-[.is-active]:text-white flex items-center justify-center text-[#111111] transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-[.is-active]:translate-x-0.5 group-hover:-translate-y-0.5 group-[.is-active]:-translate-y-0.5" />
        </div>
      </div>

      {/* BOTTOM: Content */}
      <div className="relative z-10 space-y-4 pt-12">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] font-semibold">
          {cat.tagline}
        </span>
        
        <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#111111] font-normal leading-tight group-hover:text-[#B89B5E] group-[.is-active]:text-[#B89B5E] transition-colors">
          {cat.title}
        </h3>

        <p className="text-sm font-serif-luxury italic text-[#555555] group-hover:text-[#111111] group-[.is-active]:text-[#111111] transition-colors">
          "{cat.quote}"
        </p>

        <p className="text-xs text-[#555555] font-light leading-relaxed line-clamp-3 pt-2">
          {cat.description}
        </p>

        <div className="pt-4 flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#111111] font-medium group-hover:text-[#B89B5E] group-[.is-active]:text-[#B89B5E] transition-colors">
          <span>Explore {cat.title}</span>
          <span className="w-6 h-[1px] bg-current group-hover:w-10 group-[.is-active]:w-10 transition-all" />
        </div>
      </div>

    </Link>
  );
}
