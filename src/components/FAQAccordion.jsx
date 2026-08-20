import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQAccordion({ items = FAQS, limit }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const displayItems = limit ? items.slice(0, limit) : items;

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E5E3DC]">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            CLEAR ANSWERS
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#555555] font-light max-w-xl mx-auto">
            Everything you need to know about our consultations, treatments, clinic location, and patient guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E5E3DC] border-y border-[#E5E3DC]">
          {displayItems.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-xl sm:text-2xl text-[#111111] group-hover:text-[#B89B5E] transition-colors pr-4">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}. {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-none border border-[#E5E3DC] group-hover:border-[#111111] flex items-center justify-center text-[#111111] shrink-0 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B89B5E]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm text-[#555555] font-light leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
