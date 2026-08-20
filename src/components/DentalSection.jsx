import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import useScrollActive from '../hooks/useScrollActive';

export default function DentalSection() {
  const dentalServices = SERVICES.filter(s => s.category === 'dental');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#292929] pb-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              DENTAL DISCIPLINE
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#F8F7F3] font-normal leading-tight">
              Your smile deserves <br />
              <span className="italic">thoughtful care.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-[#A4A4A0] font-light leading-relaxed">
              From smile correction and shade enhancement to preventative cleaning, our oral aesthetic treatments prioritize health, symmetry, and understated elegance.
            </p>
            <Link
              to="/dental"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#F8F7F3] hover:text-[#B89B5E] font-semibold transition-colors group"
            >
              <span>Explore Dental Care</span>
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
      className={`bg-[#1A1A1A] border border-[#292929] hover:border-[#B89B5E]/50 group-[.is-active]:border-[#B89B5E]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${isActive ? 'is-active' : ''} p-6 sm:p-8`}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-mono">
            {service.num}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#A4A4A0]">
            DENTAL
          </span>
        </div>

        <div className="aspect-[4/3] overflow-hidden bg-[#111111]">
          <img
            src={service.image}
            alt={service.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-500"
          />
        </div>

        <h3 className="font-serif-luxury text-2xl text-[#F8F7F3] font-normal group-hover:text-[#B89B5E] group-[.is-active]:text-[#B89B5E] transition-colors">
          {service.name}
        </h3>

        <p className="text-xs text-[#A4A4A0] font-light leading-relaxed">
          {service.shortDescription}
        </p>

        <ul className="space-y-2 pt-2 border-t border-[#292929]/50">
          {service.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-center text-[11px] text-[#A4A4A0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B5E] mr-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8">
        <Link
          to={service.path}
          className="w-full py-3 border border-[#292929] group-hover:border-[#B89B5E] group-[.is-active]:border-[#B89B5E] text-center text-xs uppercase tracking-[0.18em] text-[#F8F7F3] hover:bg-[#B89B5E] hover:text-[#111111] transition-all flex items-center justify-center"
        >
          <span>VIEW DETAILS</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
