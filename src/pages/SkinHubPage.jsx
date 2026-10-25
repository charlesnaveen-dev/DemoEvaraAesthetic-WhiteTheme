import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import SkinSection from '../components/SkinSection';
import CTASection from '../components/CTASection';

export default function SkinHubPage() {
  return (
    <>
      <SEOHead
        title="Skin Clinic Coimbatore | Acne, Pigmentation & Laser Care | Evara"
        description="Skin health, pigmentation management, acne care, and laser treatments at Evara Aesthetics in Coimbatore. Consultation-led skin solutions."
        canonical="https://evaraaesthetics.com/skin"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Skin", path: "/skin" }
        ]}
      />

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium block">
            SKIN DISCIPLINE
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#16141A] font-normal leading-tight">
            Skin care, considered differently.
          </h1>
          <p className="text-base sm:text-lg text-[#4E4B54] font-light leading-relaxed pt-2">
            Healthy-looking skin starts with understanding it. Our treatments address acne, texture, hyper-pigmentation, and rejuvenation with evidence-led care tailored to your unique skin type.
          </p>
        </div>
      </section>

      <SkinSection />
      <CTASection />
    </>
  );
}
