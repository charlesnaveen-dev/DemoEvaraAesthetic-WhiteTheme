import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import OurApproach from '../components/OurApproach';
import WhyEvara from '../components/WhyEvara';
import CTASection from '../components/CTASection';

export default function ApproachPage() {
  return (
    <>
      <SEOHead
        title="Our Consultation Approach | Evara Aesthetics Coimbatore"
        description="Discover Evara Aesthetics' 4-step consultation framework: Understand, Assess, Plan, Care. Thoughtfully designed around patient comfort and trust."
        canonical="https://evaraaesthetics.com/our-approach"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Approach", path: "/our-approach" }
        ]}
      />

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium block">
            THE EVARA METHODOLOGY
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#16141A] font-normal leading-tight">
            Consultation-led, <br />
            <span className="italic font-light text-[#3B1457]">patient-centered care.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#4E4B54] font-light leading-relaxed pt-2">
            We believe aesthetic and dental treatments should never be rushed or generic. Every procedure starts with an open conversation, detailed evaluation, and shared planning.
          </p>
        </div>
      </section>

      <OurApproach />
      <WhyEvara />
      <CTASection />
    </>
  );
}
