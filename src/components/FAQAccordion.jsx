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
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E6E2]">
      <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#7A7682] font-medium block">
            CLEAR ANSWERS
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#4E4B54] font-light max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our consultations, treatments, clinic location, and patient guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E2E6E2] border-y border-[#E2E6E2]">
          {displayItems.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 sm:py-7 transition-colors">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-xl sm:text-2xl text-[#16141A] group-hover:text-[#3B1457] transition-colors pr-6 leading-snug">
                    <span className="font-mono text-sm text-[#0284C7] font-semibold mr-3">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-full border transition-all duration-300 flex items-center justify-center shrink-0 ${
                    isOpen
                      ? "border-[#3B1457] bg-[#3B1457] text-white"
                      : "border-[#E2E6E2] bg-[#FAF9F7] group-hover:border-[#3B1457] text-[#16141A]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 sm:mt-5 pr-8 sm:pr-12 text-sm sm:text-base text-[#4E4B54] font-light leading-relaxed">
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
