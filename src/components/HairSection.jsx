import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function HairSection() {
  const hairServices = SERVICES.filter(s => s.category === 'hair');

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E6EB]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E8E6EB] pb-8">
          <div className="lg:col-span-7 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#84808C] font-medium">
              HAIR DISCIPLINE
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-normal leading-tight">
              Healthy-looking hair <br />
              <span className="italic font-light text-[#3B1457]">starts with the right care.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3">
            <p className="text-sm sm:text-base text-[#55525B] font-light leading-relaxed">
              Care for your hair. Care for your confidence. We combine scalp health evaluations, targeted topical growth support, and clinical PRP protocols planned around your scalp requirements.
            </p>
            <Link
              to="/hair"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#121016] hover:text-[#3B1457] font-medium transition-colors group"
            >
              <span>Explore Hair Care</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Hair Services 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {hairServices.map((service) => (
            <div key={service.id} className="space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#F9F9F8] border border-[#E8E6EB]">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#84808C] font-medium">HAIR PROTOCOL</span>
                    <span className="text-[#84808C] font-mono text-[11px]">{service.num}</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#121016] font-normal leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55525B] font-light leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-[#E8E6EB]">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs text-[#55525B] font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={service.path}
                  className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#121016] hover:text-[#3B1457] font-medium transition-colors group"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}