import { Star, ArrowUpRight, Sparkles } from 'lucide-react';
import { GOOGLE_REVIEWS_META, TESTIMONIAL_CARDS } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#150C24] border-t border-[#2C1D47] text-[#FAF9FC]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C1D47] pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center space-x-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#FAF9FC] font-semibold ml-2">5.0 ★</span>
              <span className="text-xs text-[#B8B2C4] font-light">({GOOGLE_REVIEWS_META.totalReviews}+ Reviews)</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#FAF9FC] font-normal leading-tight">
              Client words.
            </h2>
          </div>
          <div className="space-y-2 text-left md:text-right">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8B2C4] block font-light">
              VERIFIED GOOGLE REVIEWS
            </span>
            <a
              href={GOOGLE_REVIEWS_META.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#38BDF8] hover:text-[#FAF9FC] font-medium transition-colors group"
            >
              <span>VIEW GOOGLE MAPS REVIEWS ({GOOGLE_REVIEWS_META.totalReviews}+)</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_CARDS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1D1133] border border-[#2E1E4F] rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-[#7E22CE]/60 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#F59E0B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B8B2C4] font-light">
                    {item.date}
                  </span>
                </div>

                <p className="font-serif-luxury text-xl italic text-[#FAF9FC] leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#2E1E4F] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#FAF9FC] font-medium block">{item.author}</span>
                  <span className="text-[#B8B2C4] text-[11px] font-light">{item.service}</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/30 px-3 py-1 rounded-full font-medium">
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
