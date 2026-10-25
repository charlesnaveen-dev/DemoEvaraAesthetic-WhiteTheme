export default function VisualStory() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
      caption: "Consultation Suite",
      subtitle: "Private & serene care environment"
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
      caption: "Dental Precision",
      subtitle: "Aesthetic smile refinement"
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      caption: "Skin Health",
      subtitle: "Evidence-led rejuvenation"
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
      caption: "Hair & Scalp",
      subtitle: "Targeted root care"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E6E2]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E6E2] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#7A7682] font-medium block mb-2">
              THE EVARA AMBIENCE
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
              Every journey is personal.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4E4B54] max-w-md font-light leading-relaxed">
            Experiencing Evara Aesthetics means experiencing clean clinical design, respectful privacy, and tranquil patient atmosphere.
          </p>
        </div>

        {/* Clean Editorial Gallery Grid with Natural Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="group bg-[#FAF9F7] border border-[#E2E6E2] rounded-3xl overflow-hidden flex flex-col shadow-xs hover:border-[#3B1457]/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EEF4F0]">
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#16141A] font-medium border border-white/60">
                  0{index + 1}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-1.5 bg-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-medium block">
                  {item.subtitle}
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#16141A] font-normal">
                  {item.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
