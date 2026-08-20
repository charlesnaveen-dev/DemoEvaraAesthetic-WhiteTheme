import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function SignatureServices() {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#292929] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              EDITORIAL DIRECTORY
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#F8F7F3] font-normal mt-2">
              Explore our care.
            </h2>
          </div>
          <p className="text-sm text-[#A4A4A0] max-w-sm font-light">
            An overview of clinical treatments across Dental, Skin, and Hair care tailored to individual patient consultations.
          </p>
        </div>

        {/* Luxury Editorial Directory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive List Rows */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-[#292929]">
            {SERVICES.map((service) => {
              const isHovered = activeService?.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  className={`group py-6 px-4 cursor-pointer transition-all duration-300 ${
                    isHovered ? "bg-[#1A1A1A] border-l-2 border-l-[#B89B5E]" : "bg-transparent border-l-2 border-l-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span className={`font-mono text-xs ${isHovered ? "text-[#B89B5E]" : "text-[#A4A4A0]"}`}>
                        {service.num}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-[0.25em] text-[#A4A4A0]">
                          {service.category}
                        </span>
                        <h3 className={`font-serif-luxury text-xl sm:text-2xl transition-colors ${
                          isHovered ? "text-[#F8F7F3] font-medium" : "text-[#F8F7F3]/70"
                        }`}>
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <Link
                      to={service.path}
                      className={`inline-flex items-center space-x-1 text-xs uppercase tracking-widest transition-all ${
                        isHovered ? "text-[#F8F7F3] opacity-100" : "text-[#A4A4A0] opacity-50 group-hover:opacity-100"
                      }`}
                    >
                      <span className="hidden sm:inline">EXPLORE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Mobile Description Expansion */}
                  <p className="text-xs text-[#A4A4A0] font-light mt-3 sm:hidden">
                    {service.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Preview Canvas */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="bg-[#1A1A1A] border border-[#292929] p-8 space-y-6 overflow-hidden">
              <div className="flex items-center justify-between text-xs text-[#A4A4A0] uppercase tracking-widest border-b border-[#292929] pb-4">
                <span>{activeService?.category} CARE</span>
                <span className="font-mono text-[#B89B5E]">{activeService?.num} / 10</span>
              </div>

              <div className="aspect-[4/3] overflow-hidden bg-[#111111]">
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700"
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-serif-luxury text-3xl text-[#F8F7F3] font-normal">
                  {activeService?.name}
                </h4>
                <p className="text-xs text-[#A4A4A0] font-light leading-relaxed">
                  {activeService?.fullDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292929]">
                <Link
                  to={activeService?.path || "/dental"}
                  className="w-full py-3.5 bg-[#F8F7F3] text-[#111111] text-center text-xs tracking-[0.2em] font-semibold uppercase block hover:bg-white transition-colors"
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
