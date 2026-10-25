import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { FAQS } from '../data/faqData';

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Evara Aesthetics Coimbatore"
        description="Find answers to common questions about dental, skin, and hair care consultations, treatment suitability, downtime, clinic location, and booking."
        canonical="https://evaraaesthetics.com/faq"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" }
        ]}
        faqs={FAQS}
      />

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium block">
            PATIENT INFORMATION
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#16141A] font-normal leading-tight">
            Frequently Asked Questions.
          </h1>
          <p className="text-base sm:text-lg text-[#4E4B54] font-light leading-relaxed pt-2">
            Transparent answers to help you feel informed and confident before scheduling your consultation at Evara Aesthetics in Tatabad, Coimbatore.
          </p>
        </div>
      </section>

      <FAQAccordion />
      <CTASection />
    </>
  );
}
