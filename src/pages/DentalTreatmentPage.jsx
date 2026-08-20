import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { SERVICES } from '../data/servicesData';
import { CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function DentalTreatmentPage() {
  const { slug } = useParams();
  
  // Find matching service
  const service = SERVICES.find(s => s.id === slug || s.path === `/dental/${slug}`) || SERVICES[0];

  return (
    <>
      <SEOHead
        title={`${service.name} Coimbatore | Evara Aesthetics`}
        description={`${service.shortDescription} Offered at Evara Aesthetics in Tatabad, Coimbatore following personalized consultation.`}
        canonical={`https://evaraaesthetics.com${service.path}`}
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Dental", path: "/dental" },
          { name: service.name, path: service.path }
        ]}
        faqs={service.faqs}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center space-x-3">
            <Link to="/dental" className="text-xs uppercase tracking-widest text-[#555555] hover:text-[#111111] transition-colors">
              DENTAL DISCIPLINE
            </Link>
            <span className="text-xs text-[#E5E3DC]">/</span>
            <span className="text-xs uppercase tracking-widest text-[#B89B5E] font-mono">{service.num}</span>
          </div>

          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            {service.name}
          </h1>

          <p className="text-base sm:text-xl text-[#555555] font-light leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Details & Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-10">
            <div className="aspect-[16/10] bg-[#F8F7F3] border border-[#E5E3DC] overflow-hidden shadow-sm">
              <img
                src={service.image}
                alt={service.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif-luxury text-3xl text-[#111111] font-normal">
                Key Treatment Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-[#F8F7F3] border border-[#E5E3DC] p-4">
                    <CheckCircle2 className="w-4 h-4 text-[#B89B5E] mt-0.5 shrink-0" />
                    <span className="text-xs text-[#111111] font-light">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitability */}
            <div className="bg-[#F8F7F3] border-l-2 border-l-[#B89B5E] border border-[#E5E3DC] p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B89B5E] font-semibold flex items-center">
                <ShieldAlert className="w-3.5 h-3.5 mr-1.5" />
                SUITABILITY & CONSULTATION
              </span>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                {service.suitability}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <BookingForm />
          </div>

        </div>
      </section>
    </>
  );
}
