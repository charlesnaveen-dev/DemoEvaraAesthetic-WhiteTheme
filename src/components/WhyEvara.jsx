import { Sparkles } from 'lucide-react';

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
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2ED] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF] mb-3">
              <Sparkles className="w-3 h-3 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
                OUR DIFFERENCE
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal mt-1">
              Why Evara?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5B5566] max-w-md font-light leading-relaxed">
            Designed around patient trust, thoughtful clinical evaluation, and quiet luxury sophistication.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="bg-[#FAF9FC] border border-[#E6E2ED] rounded-3xl p-8 sm:p-10 space-y-5 hover:border-[#4A1571]/50 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-purple-950/5"
            >
              <div className="flex items-center justify-between border-b border-[#E6E2ED] pb-4">
                <span className="font-serif-luxury text-2xl text-[#4A1571] font-medium">{pt.num}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#0284C7] font-semibold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mr-1.5" />
                  EVARA PILLAR
                </span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#14101A] font-normal group-hover:text-[#4A1571] transition-colors">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5566] font-light leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
