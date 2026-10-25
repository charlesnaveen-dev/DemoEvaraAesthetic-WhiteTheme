import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import WhyEvara from '../components/WhyEvara';
import OurApproach from '../components/OurApproach';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';
import { Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Evara Aesthetics | Dental, Skin & Hair Care Coimbatore"
        description="Learn about Evara Aesthetics' philosophy of integrated dental, skin, and hair care designed around patient trust and individual consultations."
        canonical="https://evaraaesthetics.com/about"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ]}
      />

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-b border-[#E6E2ED]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
            <Sparkles className="w-3 h-3 text-[#4A1571]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
              ABOUT EVARA AESTHETICS
            </span>
          </div>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#14101A] font-normal leading-tight">
            One destination for the way you look, feel and care for yourself.
          </h1>
          <p className="text-base sm:text-lg text-[#5B5566] font-light leading-relaxed pt-2">
            Evara Aesthetics was founded in Coimbatore to bring together three essential aesthetic and healthcare disciplines — Dental, Skin, and Hair care — under one unified, quiet luxury clinical setting.
          </p>
        </div>
      </section>

      <WhyEvara />
      <OurApproach />
      <TeamSection />
      <CTASection />
    </>
  );
}
