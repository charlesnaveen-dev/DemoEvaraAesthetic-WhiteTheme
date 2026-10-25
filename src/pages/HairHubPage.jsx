import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import HairSection from '../components/HairSection';
import CTASection from '../components/CTASection';
import { Sparkles } from 'lucide-react';

export default function HairHubPage() {
  return (
    <>
      <SEOHead
        title="Hair Clinic Coimbatore | Hair Fall & PRP Treatments | Evara"
        description="Hair health, scalp evaluation, hair fall consultations, and PRP therapy at Evara Aesthetics in Coimbatore. Personalized care designed around your confidence."
        canonical="https://evaraaesthetics.com/hair"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Hair", path: "/hair" }
        ]}
      />

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-b border-[#E6E2ED]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
            <Sparkles className="w-3 h-3 text-[#4A1571]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
              HAIR DISCIPLINE
            </span>
          </div>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#14101A] font-normal leading-tight">
            Healthy-looking hair starts with the right care.
          </h1>
          <p className="text-base sm:text-lg text-[#5B5566] font-light leading-relaxed pt-2">
            Care for your hair. Care for your confidence. We offer targeted hair fall consultations, root nourishment, and scalp PRP treatments structured around realistic expectations and patient comfort.
          </p>
        </div>
      </section>

      <HairSection />
      <CTASection />
    </>
  );
}
