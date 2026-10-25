import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { JOURNAL_POSTS } from '../data/journalData';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function JournalArticlePage() {
  const { slug } = useParams();
  
  const post = JOURNAL_POSTS.find(p => p.slug === slug || p.id === slug) || JOURNAL_POSTS[0];

  return (
    <>
      <SEOHead
        title={`${post.title} | Evara Aesthetics Journal`}
        description={post.excerpt}
        canonical={`https://evaraaesthetics.com/journal/${post.slug}`}
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: post.title, path: `/journal/${post.slug}` }
        ]}
      />

      <article className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Link to="/journal" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#4E4B54] hover:text-[#3B1457] font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO JOURNAL</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <span className="uppercase tracking-widest bg-[#F6EFF9] border border-[#E9D5FF] px-3.5 py-1.5 rounded-full text-[#3B1457] font-semibold text-[10px]">{post.category}</span>
            <span className="flex items-center text-[#4E4B54]"><Calendar className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" /> {post.date}</span>
            <span className="flex items-center text-[#4E4B54]"><Clock className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" /> {post.readTime}</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#16141A] font-normal leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#4E4B54] font-light leading-relaxed">
            {post.excerpt}
          </p>

          <div className="aspect-[16/9] bg-white border border-[#DCE5DF] rounded-3xl overflow-hidden my-8 shadow-xs">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
              }}
              className="w-full h-full object-cover hover:scale-104 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="prose prose-lg max-w-none text-[#4E4B54] font-light space-y-6 leading-relaxed">
            <p>{post.content}</p>
          </div>

        </div>
      </article>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E6E2]">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
