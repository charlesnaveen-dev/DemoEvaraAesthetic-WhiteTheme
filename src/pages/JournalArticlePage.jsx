import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { JOURNAL_POSTS } from '../data/journalData';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
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

      <article className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-b border-[#E5E3DC]">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Link to="/journal" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#555555] hover:text-[#111111] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO JOURNAL</span>
          </Link>

          <div className="flex items-center space-x-4 text-xs text-[#B89B5E] font-mono">
            <span className="uppercase tracking-widest bg-[#FFFFFF] border border-[#E5E3DC] px-3 py-1 text-[#B89B5E]">{post.category}</span>
            <span className="flex items-center text-[#555555]"><Calendar className="w-3.5 h-3.5 mr-1" /> {post.date}</span>
            <span className="flex items-center text-[#555555]"><Clock className="w-3.5 h-3.5 mr-1" /> {post.readTime}</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#111111] font-normal leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#555555] font-light leading-relaxed">
            {post.excerpt}
          </p>

          <div className="aspect-[16/9] bg-[#FFFFFF] border border-[#E5E3DC] overflow-hidden my-8 shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop";
              }}
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>

          <div className="prose max-w-none text-[#111111] font-light text-base leading-relaxed space-y-6 pt-4 border-t border-[#E5E3DC]">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

        </div>
      </article>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
