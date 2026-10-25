import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { JOURNAL_POSTS } from '../data/journalData';
import { ArrowUpRight } from 'lucide-react';
import CTASection from '../components/CTASection';

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

      <section className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium block">
            EVARA JOURNAL
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-7xl text-[#16141A] font-normal leading-tight">
            Insights on skin, hair & dental wellness.
          </h1>
          <p className="text-base sm:text-lg text-[#4E4B54] font-light leading-relaxed pt-2">
            Educational, consultation-focused articles designed to help you understand aesthetic treatments and make informed personal decisions.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E6E2]">
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
  return (
    <article
      className="bg-[#FAF9F7] border border-[#E2E6E2] hover:border-[#3B1457]/40 transition-all duration-300 rounded-3xl flex flex-col justify-between overflow-hidden group p-6 sm:p-8 shadow-xs"
    >
      <div className="space-y-6">
        <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#E2E6E2]">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
              {post.category}
            </span>
            <span className="text-[#7A7682] font-light">{post.readTime}</span>
          </div>

          <h2 className="font-serif-luxury text-2xl text-[#16141A] font-normal group-hover:text-[#3B1457] transition-colors leading-snug">
            <Link to={post.path}>{post.title}</Link>
          </h2>

          <p className="text-xs sm:text-sm text-[#4E4B54] font-light leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[#E2E6E2] flex items-center justify-between">
        <span className="text-xs text-[#7A7682] font-light">{post.date}</span>
        <Link
          to={post.path}
          className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#16141A] group-hover:text-[#3B1457] font-medium transition-colors"
        >
          <span>READ ARTICLE</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-80" />
        </Link>
      </div>
    </article>
  );
}
