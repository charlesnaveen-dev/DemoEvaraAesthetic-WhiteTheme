import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function SignatureServices() {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] border-b border-[#E2E6E2]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E6E2] pb-8">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A7682] font-medium">
              EDITORIAL DIRECTORY
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
              Explore our care.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4E4B54] max-w-sm font-light leading-relaxed">
            An overview of clinical treatments across Dental, Skin, and Hair care tailored to individual patient consultations.
          </p>
        </div>

        {/* Luxury Editorial Directory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive List Rows */}
          <div className="lg:col-span-7 divide-y divide-[#E2E6E2]">
            {SERVICES.map((service) => {
              const isSelected = activeService?.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  className={`group py-4 sm:py-5 px-3 sm:px-4 cursor-pointer transition-all duration-200 rounded-xl ${
                    isSelected
                      ? "bg-[#EEF4F0] text-[#16141A]"
                      : "bg-transparent text-[#4E4B54] hover:text-[#16141A] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-5 sm:space-x-7">
                      <span className={`font-mono text-xs sm:text-sm ${isSelected ? "text-[#3B1457] font-semibold" : "text-[#7A7682]"}`}>
                        {service.num}
                      </span>
                      <div className="space-y-0.5">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#7A7682] font-medium">
                          {service.category}
                        </span>
                        <h3 className={`font-serif-luxury text-xl sm:text-2xl transition-colors ${
                          isSelected ? "text-[#16141A] font-medium" : "text-[#16141A]/80 group-hover:text-[#16141A]"
                        }`}>
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <Link
                      to={service.path}
                      className={`inline-flex items-center space-x-1 text-xs uppercase tracking-widest transition-opacity ${
                        isSelected ? "opacity-100 text-[#3B1457]" : "opacity-0 group-hover:opacity-80 text-[#7A7682]"
                      }`}
                    >
                      <span className="hidden sm:inline font-medium">EXPLORE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Mobile Description Expansion */}
                  <p className="text-xs text-[#4E4B54] font-light mt-2 sm:hidden leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Preview Canvas */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="bg-white border border-[#E2E6E2] rounded-3xl p-7 space-y-6 shadow-xs">
              <div className="flex items-center justify-between text-xs text-[#7A7682] uppercase tracking-widest border-b border-[#E2E6E2] pb-3">
                <span className="font-medium text-[#16141A]">{activeService?.category} CARE</span>
                <span className="font-mono text-[#3B1457] font-semibold">{activeService?.num} / 10</span>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF9F7] border border-[#E2E6E2]">
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-serif-luxury text-2xl text-[#16141A] font-normal">
                  {activeService.name}
                </h4>
                <p className="text-xs text-[#4E4B54] font-light leading-relaxed">
                  {activeService.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2E6E2]">
                <Link
                  to={activeService.path}
                  className="inline-flex items-center justify-between w-full text-xs uppercase tracking-[0.18em] font-medium text-[#16141A] hover:text-[#3B1457] transition-colors"
                >
                  <span>VIEW FULL TREATMENT PROTOCOL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3B1457]" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
