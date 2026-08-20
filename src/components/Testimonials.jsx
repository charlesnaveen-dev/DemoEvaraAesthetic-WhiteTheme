import { Star, ArrowUpRight } from 'lucide-react';
import { GOOGLE_REVIEWS_META, TESTIMONIAL_CARDS } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#292929] pb-8">
          <div>
            <div className="flex items-center space-x-2 text-[#B89B5E] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs text-[#F8F7F3] font-semibold ml-2">5.0 ★</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#F8F7F3] font-normal">
              Client words.
            </h2>
          </div>
          <div className="space-y-2 text-right md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A4A4A0] block">
              VERIFIED GOOGLE REVIEWS
            </span>
            <a
              href={GOOGLE_REVIEWS_META.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#F8F7F3] hover:text-[#B89B5E] font-semibold transition-colors"
            >
              <span>VIEW GOOGLE MAPS REVIEWS ({GOOGLE_REVIEWS_META.totalReviews}+)</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_CARDS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1A1A1A] border border-[#292929] p-8 space-y-6 flex flex-col justify-between hover:border-[#B89B5E]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#B89B5E]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A4A4A0]">
                    {item.date}
                  </span>
                </div>

                <p className="font-serif-luxury text-lg italic text-[#F8F7F3] leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#292929] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#F8F7F3] font-medium block">{item.author}</span>
                  <span className="text-[#A4A4A0] text-[11px] font-light">{item.service}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#B89B5E] border border-[#292929] px-2.5 py-1">
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
