import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { JOURNAL_POSTS } from '../data/journalData';
import { ArrowUpRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import useScrollActive from '../hooks/useScrollActive';

export default function JournalPage() {
  return (
    <>
      <SEOHead
        title="Aesthetic & Dental Journal | Educational Insights | Evara"
        description="Read evidence-led educational articles on skin care, smile correction, acne management, pigmentation, and hair health by Evara Aesthetics."
        canonical="https://evaraaesthetics.com/journal"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" }
        ]}
      />

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            EVARA JOURNAL
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#111111] font-normal leading-tight">
            Insights on skin, hair & dental wellness.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-4">
            Educational, consultation-focused articles designed to help you understand aesthetic treatments and make informed personal decisions.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNAL_POSTS.map((post) => (
            <JournalCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

function JournalCard({ post }) {
  const { ref, isActive } = useScrollActive();

  return (
    <article
      ref={ref}
      className={`bg-[#F8F7F3] border border-[#E5E3DC] hover:border-[#B89B5E]/50 group-[.is-active]:border-[#B89B5E]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${isActive ? 'is-active' : ''} p-6 sm:p-8 shadow-sm`}
    >
      <div className="space-y-6">
        <div className="aspect-[16/10] overflow-hidden bg-[#FFFFFF]">
          <img
            src={post.image}
            alt={post.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:scale-105 group-[.is-active]:scale-105 transition-all duration-700"
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#555555]">
          <span className="uppercase tracking-widest text-[#B89B5E] font-semibold">{post.category}</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="font-serif-luxury text-2xl text-[#111111] font-normal group-hover:text-[#B89B5E] group-[.is-active]:text-[#B89B5E] transition-colors leading-snug">
          {post.title}
        </h2>

        <p className="text-xs text-[#555555] font-light leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-8 mt-6 border-t border-[#E5E3DC]">
        <Link
          to={`/journal/${post.slug}`}
          className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#111111] hover:text-[#B89B5E] group-[.is-active]:text-[#B89B5E] font-semibold transition-colors group"
        >
          <span>READ ARTICLE</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-[.is-active]:translate-x-0.5 group-hover:-translate-y-0.5 group-[.is-active]:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
