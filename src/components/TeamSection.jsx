export default function TeamSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8E6EB]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E6EB] pb-8">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#84808C] font-medium">
              CLINICAL TEAM
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#121016] font-normal leading-tight">
              Meet the people behind Evara.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#55525B] max-w-md font-light leading-relaxed">
            Dedicated clinical practitioners and attentive care staff committed to patient comfort and personalized treatment excellence.
          </p>
        </div>

        {/* Editorial Practitioner Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-5">
              <div className="aspect-[4/5] bg-[#F9F9F8] rounded-xl border border-[#E8E6EB] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1622253692010-333f2da6031d' : item === 2 ? '1584515979956-d9f6e5d09982' : '1559839734-2b71ea197ec2'}?q=80&w=800&auto=format&fit=crop`}
                  alt="Evara Clinical Staff in Coimbatore"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif-luxury text-2xl text-[#121016] font-normal">
                  Clinical Practitioner
                </h3>
                <p className="text-xs sm:text-sm text-[#55525B] font-light">
                  Dental, Skin & Aesthetic Care
                </p>
                <p className="text-xs text-[#84808C] font-light pt-1">
                  Tatabad, Coimbatore · Consultation-Led
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}