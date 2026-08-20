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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E3DC] pb-8">
          <div>
            <div className="flex items-center space-x-2 text-[#B89B5E] mb-2">
              <Instagram className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#555555] font-mono">
                {CLINIC_INFO.instagramHandle}
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal">
              Follow Evara.
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-[#555555] font-light max-w-sm">
              Explore treatments, insights and moments from Evara Aesthetics.
            </p>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#B89B5E] font-semibold transition-colors group"
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Sophisticated Editorial Social Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      className={`group ${isActive ? 'is-active' : ''} relative bg-[#F8F7F3] border border-[#E5E3DC] aspect-square overflow-hidden block shadow-sm`}
    >
      <img
        src={post.img}
        alt={`Evara Instagram - ${post.topic}`}
        className="w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-[.is-active]:opacity-100 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
      
      <div className="absolute inset-0 p-4 flex flex-col justify-between items-start opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-widest bg-[#111111]/80 text-[#B89B5E] px-2 py-1">
          {post.topic}
        </span>
        <div className="flex items-center space-x-1 text-white text-xs font-medium">
          <Instagram className="w-4 h-4" />
          <span>View Post</span>
        </div>
      </div>
    </a>
  );
}
