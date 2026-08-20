import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import Hero from '../components/Hero';
import PillarSection from '../components/PillarSection';
import DentalSection from '../components/DentalSection';
import SkinSection from '../components/SkinSection';
import HairSection from '../components/HairSection';
import SignatureServices from '../components/SignatureServices';
import TrustSection from '../components/TrustSection';
import WhyEvara from '../components/WhyEvara';
import OurApproach from '../components/OurApproach';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';
import VisualStory from '../components/VisualStory';
import FAQAccordion from '../components/FAQAccordion';
import LocationSection from '../components/LocationSection';
import InstagramSection from '../components/InstagramSection';
import CTASection from '../components/CTASection';
import { FAQS } from '../data/faqData';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Evara Aesthetics | Dental, Skin & Hair Clinic in Coimbatore"
        description="Evara Aesthetics in Coimbatore brings dental, skin and hair care together with personalized consultation and modern treatment approaches."
        canonical="https://evaraaesthetics.com/"
      />
      <StructuredData
        breadcrumbs={[{ name: "Home", path: "/" }]}
        faqs={FAQS}
      />

      <Hero />
      <PillarSection />
      <DentalSection />
      <SkinSection />
      <HairSection />
      <SignatureServices />
      <TrustSection />
      <WhyEvara />
      <OurApproach />
      <TeamSection />
      <Testimonials />
      <VisualStory />
      <FAQAccordion limit={6} />
      <LocationSection />
      <InstagramSection />
      <CTASection />
    </>
  );
}
