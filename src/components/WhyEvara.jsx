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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E3DC] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              OUR DIFFERENCE
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal mt-2">
              Why Evara?
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md font-light">
            Designed around patient trust, thoughtful clinical evaluation, and quiet luxury sophistication.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="bg-[#F8F7F3] border border-[#E5E3DC] p-8 space-y-4 hover:border-[#B89B5E]/50 transition-colors group shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-[#E5E3DC] pb-4">
                <span className="font-mono text-xs text-[#B89B5E] font-semibold">{pt.num}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#555555]">EVARA PILLAR</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#111111] font-normal group-hover:text-[#B89B5E] transition-colors">
                {pt.title}
              </h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
