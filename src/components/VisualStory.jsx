import useScrollActive from '../hooks/useScrollActive';
import { Sparkles } from 'lucide-react';

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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF] mb-3">
              <Sparkles className="w-3 h-3 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
                THE EVARA AMBIENCE
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal mt-1">
              Every journey is personal.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5B5566] max-w-md font-light leading-relaxed">
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
      className={`group ${isActive ? 'is-active' : ''} relative bg-white border border-[#E6E2ED] hover:border-[#4A1571]/50 group-[.is-active]:border-[#4A1571]/50 rounded-3xl overflow-hidden aspect-[3/4] flex flex-col justify-end p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-purple-950/5 transition-all duration-500`}
    >
      <img
        src={item.url}
        alt={item.caption}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 group-hover:opacity-95 group-[.is-active]:opacity-95 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14101A]/90 via-[#14101A]/35 to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-1.5">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#38BDF8] font-medium block">
          0{index + 1} · {item.subtitle}
        </span>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FAF9FC] font-normal">
          {item.caption}
        </h3>
      </div>
    </div>
  );
}
