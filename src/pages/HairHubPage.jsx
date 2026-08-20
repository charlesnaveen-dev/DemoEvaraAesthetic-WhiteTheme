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

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            HAIR DISCIPLINE
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            Healthy-looking hair starts with the right care.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
            Care for your hair. Care for your confidence. We offer targeted hair fall consultations, root nourishment, and scalp PRP treatments structured around realistic expectations and patient comfort.
          </p>
        </div>
      </section>

      <HairSection />
      <CTASection />
    </>
  );
}
