import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import LocationSection from '../components/LocationSection';
import BookingForm from '../components/BookingForm';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Evara Aesthetics | Tatabad Coimbatore | Phone 099439 99177"
        description="Contact Evara Aesthetics in Tatabad, Coimbatore. Call 099439 99177 or visit our clinic for dental, skin, and hair care consultations."
        canonical="https://evaraaesthetics.com/contact"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}
      />

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            GET IN TOUCH
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            Reach Evara Aesthetics.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
            Located in Tatabad, Coimbatore. Connect with our team to ask questions, check appointment availability, or request a consultation.
          </p>
        </div>
      </section>

      <LocationSection />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
