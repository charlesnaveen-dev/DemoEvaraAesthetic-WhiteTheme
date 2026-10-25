import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function SkinSection() {
  const skinServices = SERVICES.filter(s => s.category === 'skin');

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E6E2]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E2E6E2] pb-8">
          <div className="lg:col-span-7 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A7682] font-medium">
              SKIN DISCIPLINE
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
              Skin care, <br />
              <span className="italic font-light text-[#3B1457]">considered differently.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3">
            <p className="text-sm sm:text-base text-[#4E4B54] font-light leading-relaxed">
              Targeted clinical approaches designed to support skin health, manage acne, refine texture, and balance pigmentation following a thorough skin analysis.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#0284C7] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Treatment suitability depends on personalized consultation.</span>
            </div>
          </div>
        </div>

        {/* Skin Services Editorial 4-Column Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {skinServices.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="group flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF9F7] border border-[#E2E6E2]">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#16141A] border border-white/60">
                    {service.num}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A7682] font-medium">
                      SKIN CARE
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#16141A] font-normal group-hover:text-[#3B1457] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4E4B54] font-light leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] text-[#16141A] group-hover:text-[#3B1457] font-medium transition-colors">
                <span>VIEW TREATMENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#3B1457]" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/skin"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#16141A] border border-[#E2E6E2] hover:border-[#16141A] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-colors shadow-xs"
          >
            <span>EXPLORE ALL SKIN TREATMENTS</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-80" />
          </Link>
        </div>

      </div>
    </section>
  );
}
