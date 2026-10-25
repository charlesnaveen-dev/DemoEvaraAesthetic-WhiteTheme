import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function DentalSection() {
  const dentalServices = SERVICES.filter(s => s.category === 'dental');
  const featured = dentalServices[0];
  const others = dentalServices.slice(1);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#DCE5DF] pb-8">
          <div className="lg:col-span-7 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium">
              DENTAL DISCIPLINE
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
              Your smile deserves <br />
              <span className="italic font-light text-[#3B1457]">thoughtful care.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3">
            <p className="text-sm sm:text-base text-[#4E4B54] font-light leading-relaxed">
              From smile correction and shade enhancement to preventative cleaning, our oral aesthetic treatments prioritize health, symmetry, and understated elegance.
            </p>
            <Link
              to="/dental"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#16141A] hover:text-[#3B1457] font-medium transition-colors group"
            >
              <span>Explore Dental Care</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Featured Treatment (Smile Correction) - Large Image & Details */}
          {featured && (
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-white border border-[#DCE5DF]">
                <img
                  src={featured.image}
                  alt={featured.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover object-center hover:scale-104 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-medium">
                    FEATURED DENTAL CARE
                  </span>
                  <span className="text-[#7A7682] font-mono">{featured.num}</span>
                </div>

                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#16141A] font-normal">
                  {featured.name}
                </h3>

                <p className="text-sm sm:text-base text-[#4E4B54] font-light leading-relaxed">
                  {featured.shortDescription}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#DCE5DF]">
                  {featured.highlights.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-[#4E4B54] font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    to={featured.path}
                    className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#16141A] hover:text-[#3B1457] font-medium transition-colors group"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Dental Treatments - Stacked Editorial Rows */}
          <div className="lg:col-span-6 space-y-10 divide-y divide-[#DCE5DF]">
            {others.map((service, index) => (
              <div key={service.id} className={`${index > 0 ? 'pt-10' : ''} space-y-5`}>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-48 aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#DCE5DF] shrink-0">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover object-center hover:scale-104 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="space-y-2.5 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A7682] font-medium">
                        DENTAL
                      </span>
                      <span className="text-[#7A7682] font-mono">{service.num}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#16141A] font-normal hover:text-[#3B1457] transition-colors">
                      <Link to={service.path}>{service.name}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4E4B54] font-light leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#16141A] hover:text-[#3B1457] font-medium transition-colors group"
                      >
                        <span>VIEW DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
