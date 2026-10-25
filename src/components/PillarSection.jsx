import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/servicesData';

export default function PillarSection() {
  return (
    <section id="pillars" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E6EB]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E6EB] pb-8">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#84808C] font-medium">
              CORE DISCIPLINES
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-normal leading-tight">
              Three pillars of care.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#55525B] max-w-md font-light leading-relaxed">
            One unified destination for your smile, skin, and hair — thoughtfully integrated around your personal aesthetic journey.
          </p>
        </div>

        {/* 3 Pillars Editorial Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group flex flex-col justify-between space-y-6"
            >
              {/* Natural Photography Presentation */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F9F9F8] border border-[#E8E6EB]">
                <img
                  src={cat.heroImage}
                  alt={`${cat.title} Care at Evara Aesthetics`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Block */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-medium">
                    {cat.tagline}
                  </span>
                  <span className="text-[#84808C] font-mono text-[11px]">0{idx + 1}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#121016] font-normal group-hover:text-[#3B1457] transition-colors">
                  {cat.title}
                </h3>

                <p className="font-serif-luxury italic text-sm text-[#55525B]">
                  "{cat.quote}"
                </p>

                <p className="text-xs sm:text-sm text-[#55525B] font-light leading-relaxed line-clamp-3">
                  {cat.description}
                </p>

                <div className="pt-2 flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] text-[#121016] group-hover:text-[#3B1457] font-medium transition-colors">
                  <span>Explore {cat.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}