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

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-b border-[#E6E2ED]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#3B1457] font-semibold block">
            APPOINTMENT REQUEST
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#14101A] font-normal leading-tight">
            Book a consultation.
          </h1>
          <p className="text-base sm:text-lg text-[#5B5566] font-light leading-relaxed pt-2">
            Take the first step toward personalized care for your smile, skin, or hair. Fill out your details below and our care team will contact you to confirm your slot.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
