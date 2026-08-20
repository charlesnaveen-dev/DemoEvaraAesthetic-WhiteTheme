import useScrollActive from '../hooks/useScrollActive';

export default function TeamSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E3DC] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              CLINICAL TEAM
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal mt-2">
              Meet the people behind Evara.
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md font-light">
            Dedicated clinical practitioners and attentive care staff committed to patient comfort and personalized treatment excellence.
          </p>
        </div>

        {/* Visually Complete Editorial Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <TeamCard key={item} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ item }) {
  const { ref, isActive } = useScrollActive();

  return (
    <div
      ref={ref}
      className={`bg-[#F8F7F3] border border-[#E5E3DC] p-8 space-y-6 flex flex-col justify-between group ${isActive ? 'is-active' : ''} shadow-sm`}
    >
      <div className="space-y-4">
        <div className="aspect-[4/5] bg-[#FFFFFF] border border-[#E5E3DC] overflow-hidden relative flex items-center justify-center">
          <img
            src={`https://images.unsplash.com/photo-${item === 1 ? '1622253692010-333f2da6031d' : item === 2 ? '1584515979956-d9f6e5d09982' : '1559839734-2b71ea197ec2'}?q=80&w=800&auto=format&fit=crop`}
            alt="Evara Clinical Staff"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-[.is-active]:opacity-100 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F3] via-transparent to-transparent opacity-60" />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] font-semibold">
            EVARA CLINICAL TEAM
          </span>
          <h3 className="font-serif-luxury text-2xl text-[#111111] font-normal">
            Clinical Practitioner
          </h3>
          <p className="text-xs text-[#555555] font-light">
            Dental, Skin & Aesthetic Care
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-[#E5E3DC] text-[11px] text-[#555555] font-light flex items-center justify-between">
        <span>TATABAD, COIMBATORE</span>
        <span className="text-[#B89B5E] font-medium">CONSULTATION-LED</span>
      </div>
    </div>
  );
}
