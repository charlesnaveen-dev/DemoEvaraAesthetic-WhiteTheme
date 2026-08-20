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

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            THE EVARA METHODOLOGY
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            Consultation-led, <br />
            <span className="italic text-[#333333]">patient-centered care.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
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
