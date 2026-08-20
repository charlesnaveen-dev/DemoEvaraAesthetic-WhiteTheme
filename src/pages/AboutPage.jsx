import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import WhyEvara from '../components/WhyEvara';
import OurApproach from '../components/OurApproach';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';

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

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            ABOUT EVARA AESTHETICS
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            One destination for the way you look, feel and care for yourself.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
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
