import { Star, ArrowUpRight } from 'lucide-react';
import { GOOGLE_REVIEWS_META, TESTIMONIAL_CARDS } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF] text-[#16141A]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCE5DF] pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center space-x-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#16141A] font-semibold ml-2">5.0 ★</span>
              <span className="text-xs text-[#4E4B54] font-light">({GOOGLE_REVIEWS_META.totalReviews}+ Verified Reviews)</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
              Client words.
            </h2>
          </div>

          <div className="space-y-2 text-left md:text-right">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A7682] block font-medium">
              VERIFIED GOOGLE REVIEWS
            </span>
            <a
              href={GOOGLE_REVIEWS_META.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#3B1457] hover:text-[#0284C7] font-semibold transition-colors group"
            >
              <span>VIEW GOOGLE MAPS REVIEWS ({GOOGLE_REVIEWS_META.totalReviews}+)</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Testimonial Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_CARDS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#DCE5DF] rounded-3xl p-8 sm:p-9 space-y-6 flex flex-col justify-between shadow-xs hover:border-[#3B1457]/30 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#F59E0B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#7A7682] font-light">
                    {item.date}
                  </span>
                </div>

                <p className="font-serif-luxury text-xl sm:text-2xl italic text-[#16141A] leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2E6E2] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#16141A] font-medium block">{item.author}</span>
                  <span className="text-[#7A7682] text-[11px] font-light">{item.service}</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD] px-3 py-1 rounded-full font-medium">
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
