import { Instagram, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import useScrollActive from '../hooks/useScrollActive';

export default function InstagramSection() {
  const posts = [
    {
      id: "ig-1",
      topic: "Smile Correction",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "ig-2",
      topic: "Skin Treatments",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "ig-3",
      topic: "Pigmentation Care",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "ig-4",
      topic: "Hair Growth",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2ED] pb-8">
          <div>
            <div className="flex items-center space-x-2 text-[#3B1457] mb-2">
              <Instagram className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold">
                {CLINIC_INFO.instagramHandle}
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
              Follow Evara.
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-[#5B5566] font-light max-w-sm leading-relaxed">
              Explore treatments, insights and moments from Evara Aesthetics.
            </p>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#3B1457] hover:text-[#0284C7] font-semibold transition-colors group"
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <div className="w-6 h-6 rounded-full bg-[#FAF5FF] group-hover:bg-[#3B1457] group-hover:text-white flex items-center justify-center ml-2 transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Sophisticated Editorial Social Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {posts.map((post) => (
            <InstagramCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}

function InstagramCard({ post }) {
  const { ref, isActive } = useScrollActive();

  return (
    <a
      ref={ref}
      href={CLINIC_INFO.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${isActive ? 'is-active' : ''} bg-[#FAF9FC] border border-[#E6E2ED] hover:border-[#3B1457]/40 rounded-2xl overflow-hidden block shadow-xs hover:shadow-md transition-all duration-300`}
    >
      <div className="relative aspect-square overflow-hidden bg-[#F0EEF5]">
        <img
          src={post.img}
          alt={`Evara Instagram - ${post.topic}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 group-[.is-active]:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-[#14101A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 bg-white flex items-center justify-between border-t border-[#E6E2ED]">
        <span className="text-xs font-serif-luxury text-[#14101A] font-medium">
          {post.topic}
        </span>
        <div className="text-[#3B1457] group-hover:text-[#0284C7] transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
}
