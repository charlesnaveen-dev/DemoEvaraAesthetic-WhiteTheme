import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { SERVICES } from '../data/servicesData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function HairTreatmentPage() {
  const { slug } = useParams();
  
  // Find matching service
  const service = SERVICES.find(s => s.id === slug || s.path === `/hair/${slug}`) || SERVICES[7];

  return (
    <>
      <SEOHead
        title={`${service.name} Coimbatore | Evara Aesthetics`}
        description={`${service.shortDescription} Clinical hair and scalp therapy at Evara Aesthetics in Tatabad, Coimbatore.`}
        canonical={`https://evaraaesthetics.com${service.path}`}
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Hair", path: "/hair" },
          { name: service.name, path: service.path }
        ]}
        faqs={service.faqs}
      />

      {/* Hero Header */}
      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center space-x-3">
            <Link to="/hair" className="text-xs uppercase tracking-widest text-[#4E4B54] hover:text-[#3B1457] font-medium transition-colors">
              HAIR DISCIPLINE
            </Link>
            <span className="text-xs text-[#DCE5DF]">/</span>
            <span className="text-xs uppercase tracking-widest text-[#0284C7] font-mono font-semibold">{service.num}</span>
          </div>

          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#16141A] font-normal leading-tight">
            {service.name}
          </h1>

          <p className="text-base sm:text-xl text-[#4E4B54] font-light leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Details & Highlights Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E6E2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-10">
            <div className="aspect-[16/10] bg-[#FAF9F7] border border-[#E2E6E2] rounded-3xl overflow-hidden shadow-xs">
              <img
                src={service.image}
                alt={service.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover hover:scale-104 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#16141A] font-normal">
                Key Treatment Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-[#FAF9F7] border border-[#E2E6E2] rounded-2xl p-4.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#16141A] font-light">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitability */}
            <div className="bg-[#EEF4F0] border-l-4 border-l-[#3B1457] border border-[#DCE5DF] rounded-2xl p-6 sm:p-7 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#3B1457] font-semibold flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                SUITABILITY & CONSULTATION
              </span>
              <p className="text-xs sm:text-sm text-[#4E4B54] font-light leading-relaxed">
                {service.suitability}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <BookingForm />
          </div>

        </div>
      </section>
    </>
  );
}
