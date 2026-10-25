import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import OurApproach from '../components/OurApproach';
import WhyEvara from '../components/WhyEvara';
import CTASection from '../components/CTASection';
import { Sparkles } from 'lucide-react';

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

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-b border-[#E6E2ED]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
            <Sparkles className="w-3 h-3 text-[#4A1571]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
              THE EVARA METHODOLOGY
            </span>
          </div>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#14101A] font-normal leading-tight">
            Consultation-led, <br />
            <span className="italic font-light text-[#4A1571]">patient-centered care.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5B5566] font-light leading-relaxed pt-2">
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
