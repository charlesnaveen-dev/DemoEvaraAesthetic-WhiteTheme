import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import HairSection from '../components/HairSection';
import CTASection from '../components/CTASection';

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
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#3B1457] font-semibold block">
            HAIR DISCIPLINE
          </span>
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
