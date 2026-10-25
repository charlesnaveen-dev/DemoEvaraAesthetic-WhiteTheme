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
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2ED] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF] mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#4A1571] font-semibold">
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
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#14101A] hover:text-[#4A1571] font-semibold transition-colors group"
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <div className="w-6 h-6 rounded-full bg-[#FAF5FF] group-hover:bg-[#4A1571] group-hover:text-white flex items-center justify-center ml-2 transition-all">
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
      className={`group ${isActive ? 'is-active' : ''} relative bg-[#FAF9FC] border border-[#E6E2ED] hover:border-[#4A1571]/50 group-[.is-active]:border-[#4A1571]/50 rounded-3xl aspect-square overflow-hidden block shadow-sm hover:shadow-xl hover:shadow-purple-950/5 transition-all duration-300`}
    >
      <img
        src={post.img}
        alt={`Evara Instagram - ${post.topic}`}
        loading="lazy"
        className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14101A]/80 via-transparent to-transparent opacity-60" />
      
      <div className="absolute inset-0 p-5 flex flex-col justify-between items-start opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-widest bg-[#2A0845]/90 text-[#38BDF8] px-3 py-1 rounded-full font-medium">
          {post.topic}
        </span>
        <div className="flex items-center space-x-1.5 text-white text-xs font-medium bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full">
          <Instagram className="w-3.5 h-3.5" />
          <span>View Post</span>
        </div>
      </div>
    </a>
  );
}
