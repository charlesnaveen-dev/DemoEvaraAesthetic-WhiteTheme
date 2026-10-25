import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function SignatureServices() {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#150C24] border-t border-[#2C1D47] text-[#FAF9FC]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C1D47] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2A1647] border border-[#442770] mb-3">
              <Sparkles className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#E0F2FE] font-semibold">
                EDITORIAL DIRECTORY
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#FAF9FC] font-normal mt-1">
              Explore our care.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B8B2C4] max-w-sm font-light leading-relaxed">
            An overview of clinical treatments across Dental, Skin, and Hair care tailored to individual patient consultations.
          </p>
        </div>

        {/* Luxury Editorial Directory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive List Rows */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-[#2C1D47]">
            {SERVICES.map((service) => {
              const isHovered = activeService?.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  className={`group py-5 sm:py-6 px-4 sm:px-6 cursor-pointer transition-all duration-300 rounded-2xl ${
                    isHovered
                      ? "bg-[#21133B] border-l-4 border-l-[#38BDF8]"
                      : "bg-transparent border-l-4 border-l-transparent hover:bg-[#1A0E2E]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-5 sm:space-x-7">
                      <span className={`font-mono text-xs sm:text-sm font-semibold ${isHovered ? "text-[#38BDF8]" : "text-[#797285]"}`}>
                        {service.num}
                      </span>
                      <div className="space-y-1">
                        <span className={`text-[9px] uppercase tracking-[0.25em] font-medium px-2 py-0.5 rounded-full ${
                          service.category === 'dental'
                            ? "bg-[#38BDF8]/15 text-[#38BDF8]"
                            : service.category === 'skin'
                            ? "bg-[#C084FC]/15 text-[#D8B4FE]"
                            : "bg-[#818CF8]/15 text-[#A5B4FC]"
                        }`}>
                          {service.category}
                        </span>
                        <h3 className={`font-serif-luxury text-xl sm:text-2xl transition-colors ${
                          isHovered ? "text-[#FAF9FC] font-medium" : "text-[#FAF9FC]/75 group-hover:text-[#FAF9FC]"
                        }`}>
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <Link
                      to={service.path}
                      className={`inline-flex items-center space-x-1 text-xs uppercase tracking-widest transition-all ${
                        isHovered ? "text-[#38BDF8] opacity-100" : "text-[#797285] opacity-60 group-hover:opacity-100"
                      }`}
                    >
                      <span className="hidden sm:inline font-medium">EXPLORE</span>
                      <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#38BDF8] group-hover:text-[#150C24] flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Description Expansion */}
                  <p className="text-xs text-[#B8B2C4] font-light mt-3 sm:hidden leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Preview Canvas */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="bg-[#1D1133] border border-[#2E1E4F] rounded-3xl p-8 space-y-6 overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between text-xs text-[#B8B2C4] uppercase tracking-widest border-b border-[#2C1D47] pb-4">
                <span className="font-medium text-[#FAF9FC]">{activeService?.category} CARE</span>
                <span className="font-mono text-[#38BDF8] font-semibold">{activeService?.num} / 10</span>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#150C24] border border-[#2E1E4F]">
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out"
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-serif-luxury text-3xl text-[#FAF9FC] font-normal">
                  {activeService?.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B2C4] font-light leading-relaxed">
                  {activeService?.fullDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2C1D47]">
                <Link
                  to={activeService?.path || "/dental"}
                  className="w-full py-4 bg-[#2A0845] hover:bg-[#4A1571] text-[#FAF9FC] text-center text-xs tracking-[0.2em] font-semibold uppercase block rounded-full transition-colors border border-[#442770] shadow-md"
                >
                  VIEW FULL SERVICE PAGE
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
