import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import Testimonials from '../components/Testimonials';
import TrustSection from '../components/TrustSection';
import CTASection from '../components/CTASection';

export default function ReviewsPage() {
  return (
    <>
      <SEOHead
        title="Patient Reviews & Ratings | 5.0 ★ Google Rating | Evara Aesthetics"
        description="Read patient reviews and ratings for Evara Aesthetics in Coimbatore. Rated 5.0 stars on Google for dental, skin, and hair care excellence."
        canonical="https://evaraaesthetics.com/reviews"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" }
        ]}
      />

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            PATIENT FEEDBACK
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            5.0 ★ Google Rating <br />
            <span className="italic font-light text-[#555555]">Built on patient trust.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
            We are proud to serve patients in Coimbatore with attentive, high-standard clinical care across Dental, Skin, and Hair health.
          </p>
        </div>
      </section>

      <TrustSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
