export default function WhyEvara() {
  const points = [
    {
      num: "01",
      title: "Personalized Consultation",
      description: "Understand your concerns before deciding on care. Every individual receives a dedicated evaluation focused on unique anatomical and skin requirements."
    },
    {
      num: "02",
      title: "Multi-Disciplinary Care",
      description: "Dental, skin and hair services brought together under one destination. Seamlessly manage your aesthetic and oral health goals in a single setting."
    },
    {
      num: "03",
      title: "Modern Approach",
      description: "Thoughtful use of contemporary treatment approaches, modern clinical protocols, and sterile, comfortable environment standards."
    },
    {
      num: "04",
      title: "Patient-Centered Experience",
      description: "Care designed around comfort, communication, clear expectations, and individual needs without pressure or rushed decisions."
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E6E2]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E6E2] pb-8">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A7682] font-medium">
              OUR DIFFERENCE
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
              Why Evara?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4E4B54] max-w-md font-light leading-relaxed">
            Designed around patient trust, thoughtful clinical evaluation, and quiet luxury sophistication.
          </p>
        </div>

        {/* 4 Points Grid with Clean Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-16">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="space-y-3 pt-6 border-t border-[#E2E6E2]"
            >
              <div className="flex items-center space-x-3 text-xs">
                <span className="font-mono text-[#7A7682]">{pt.num}</span>
                <span className="w-8 h-[1px] bg-[#E2E6E2]" />
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#16141A] font-normal">
                {pt.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4E4B54] font-light leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
