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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E3DC] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              THE EVARA AMBIENCE
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal mt-2">
              Every journey is personal.
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md font-light">
            Experiencing Evara Aesthetics means experiencing clean clinical design, respectful privacy, and tranquil patient atmosphere.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
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
      className={`group ${isActive ? 'is-active' : ''} relative bg-[#FFFFFF] border border-[#E5E3DC] overflow-hidden aspect-[3/4] flex flex-col justify-end p-6 shadow-sm`}
    >
      <img
        src={item.url}
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:opacity-90 group-[.is-active]:opacity-90 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent" />

      <div className="relative z-10 space-y-1">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] font-semibold block">
          0{index + 1} · {item.subtitle}
        </span>
        <h3 className="font-serif-luxury text-2xl text-[#F8F7F3] font-normal">
          {item.caption}
        </h3>
      </div>
    </div>
  );
}
