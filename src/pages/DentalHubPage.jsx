import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import DentalSection from '../components/DentalSection';
import CTASection from '../components/CTASection';

export default function DentalHubPage() {
  return (
    <>
      <SEOHead
        title="Dental Clinic Coimbatore | Smile Correction & Cosmetic Dentistry | Evara"
        description="Explore dental care at Evara Aesthetics in Coimbatore. From smile correction and clear aligners to cosmetic teeth whitening and general dental care."
        canonical="https://evaraaesthetics.com/dental"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Dental", path: "/dental" }
        ]}
      />

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            DENTAL DISCIPLINE
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            Smile correction & modern oral care.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
            Confidence begins with your smile. We combine cosmetic refinement, alignment evaluation, and restorative oral care tailored around natural proportion and patient comfort.
          </p>
        </div>
      </section>

      <DentalSection />
      <CTASection />
    </>
  );
}
