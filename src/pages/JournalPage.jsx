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

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-b border-[#E6E2ED]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#3B1457] font-semibold block">
            EVARA JOURNAL
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#14101A] font-normal leading-tight">
            Insights on skin, hair & dental wellness.
          </h1>
          <p className="text-base sm:text-lg text-[#5B5566] font-light leading-relaxed pt-2">
            Educational, consultation-focused articles designed to help you understand aesthetic treatments and make informed personal decisions.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#E6E2ED]">
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
      className={`bg-[#FAF9FC] border border-[#E6E2ED] hover:border-[#3B1457]/50 group-[.is-active]:border-[#3B1457]/50 transition-all duration-300 rounded-2xl flex flex-col justify-between overflow-hidden group ${isActive ? 'is-active' : ''} p-6 sm:p-8 shadow-xs hover:shadow-md`}
    >
      <div className="space-y-6">
        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-white border border-[#E6E2ED]">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover group-hover:scale-105 group-[.is-active]:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-[#5B5566]">
          <span className="uppercase tracking-widest text-[#0284C7] font-semibold text-[10px]">{post.category}</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#14101A] font-normal group-hover:text-[#3B1457] group-[.is-active]:text-[#3B1457] transition-colors leading-snug">
          {post.title}
        </h2>

        <p className="text-xs sm:text-sm text-[#5B5566] font-light leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#E6E2ED]">
        <Link
          to={`/journal/${post.slug}`}
          className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#14101A] hover:text-[#3B1457] group-[.is-active]:text-[#3B1457] font-semibold transition-colors group"
        >
          <span>READ ARTICLE</span>
          <div className="w-6 h-6 rounded-full bg-white group-hover:bg-[#3B1457] group-hover:text-white flex items-center justify-center ml-2 transition-all">
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-[.is-active]:translate-x-0.5 group-hover:-translate-y-0.5 group-[.is-active]:-translate-y-0.5" />
          </div>
        </Link>
      </div>
    </article>
  );
}
