import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import BookingForm from '../components/BookingForm';

export default function BookingPage() {
  return (
    <>
      <SEOHead
        title="Book Consultation | Evara Aesthetics Coimbatore"
        description="Request a personalized consultation for Dental, Skin, or Hair care at Evara Aesthetics in Coimbatore. Select your preferred timing and concerns."
        canonical="https://evaraaesthetics.com/book-consultation"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Book Consultation", path: "/book-consultation" }
        ]}
      />

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            APPOINTMENT REQUEST
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            Book a consultation.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
            Take the first step toward personalized care for your smile, skin, or hair. Fill out your details below and our care team will contact you to confirm your slot.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
