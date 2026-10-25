import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import useScrollActive from '../hooks/useScrollActive';

export default function DentalSection() {
  const dentalServices = SERVICES.filter(s => s.category === 'dental');

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#150C24] border-t border-[#2C1D47] text-[#FAF9FC]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#2C1D47] pb-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2A1647] border border-[#442770]">
              <Sparkles className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#E0F2FE] font-semibold">
                DENTAL DISCIPLINE
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#FAF9FC] font-normal leading-tight">
              Your smile deserves <br />
              <span className="italic font-light text-[#D8B4FE]">thoughtful care.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#B8B2C4] font-light leading-relaxed">
              From smile correction and shade enhancement to preventative cleaning, our oral aesthetic treatments prioritize health, symmetry, and understated elegance.
            </p>
            <Link
              to="/dental"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#FAF9FC] hover:text-[#38BDF8] font-medium transition-colors group"
            >
              <span>Explore Dental Care</span>
              <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#38BDF8] group-hover:text-[#150C24] flex items-center justify-center ml-2 transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Dental Services Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dentalServices.map((service) => (
            <DentalCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

function DentalCard({ service }) {
  const { ref, isActive } = useScrollActive();

  return (
    <div
      ref={ref}
      className={`bg-[#1D1133] border border-[#2E1E4F] hover:border-[#7E22CE]/60 group-[.is-active]:border-[#7E22CE]/60 transition-all duration-300 rounded-3xl flex flex-col justify-between overflow-hidden group ${isActive ? 'is-active' : ''} p-6 sm:p-8 shadow-lg shadow-black/20`}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-mono font-semibold">
            {service.num}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#B8B2C4] font-light">
            DENTAL
          </span>
        </div>

        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#150C24] border border-[#2E1E4F]">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FAF9FC] font-normal group-hover:text-[#D8B4FE] group-[.is-active]:text-[#D8B4FE] transition-colors">
          {service.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#B8B2C4] font-light leading-relaxed">
          {service.shortDescription}
        </p>

        <ul className="space-y-2.5 pt-3 border-t border-[#2E1E4F]">
          {service.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-center text-xs text-[#D1CCD9] font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] mr-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8">
        <Link
          to={service.path}
          className="w-full py-3.5 rounded-full border border-[#3E2968] group-hover:border-[#7E22CE] group-[.is-active]:border-[#7E22CE] text-center text-xs uppercase tracking-[0.18em] text-[#FAF9FC] hover:bg-[#4A1571] transition-all flex items-center justify-center font-medium"
        >
          <span>VIEW DETAILS</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
