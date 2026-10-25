import useScrollActive from '../hooks/useScrollActive';

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
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2ED] pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#3B1457] font-semibold block mb-2">
              THE EVARA AMBIENCE
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
              Every journey is personal.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5B5566] max-w-md font-light leading-relaxed">
            Experiencing Evara Aesthetics means experiencing clean clinical design, respectful privacy, and tranquil patient atmosphere.
          </p>
        </div>

        {/* Clean Editorial Gallery Grid with Natural Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <StoryCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StoryCard({ item, index }) {
  const { ref, isActive } = useScrollActive();

  return (
    <div
      ref={ref}
      className={`group ${isActive ? 'is-active' : ''} bg-white border border-[#E6E2ED] hover:border-[#3B1457]/40 rounded-2xl overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-all duration-300`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EEF5]">
        <img
          src={item.url}
          alt={item.caption}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 group-[.is-active]:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest text-[#14101A] font-medium border border-white/40">
          0{index + 1}
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-1.5 bg-white">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-medium block">
          {item.subtitle}
        </span>
        <h3 className="font-serif-luxury text-2xl text-[#14101A] font-normal">
          {item.caption}
        </h3>
      </div>
    </div>
  );
}
