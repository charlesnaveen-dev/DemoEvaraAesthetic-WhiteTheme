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

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium block">
            DENTAL DISCIPLINE
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#16141A] font-normal leading-tight">
            Smile correction & modern oral care.
          </h1>
          <p className="text-base sm:text-lg text-[#4E4B54] font-light leading-relaxed pt-2">
            Confidence begins with your smile. We combine cosmetic refinement, alignment evaluation, and restorative oral care tailored around natural proportion and patient comfort.
          </p>
        </div>
      </section>

      <DentalSection />
      <CTASection />
    </>
  );
}
