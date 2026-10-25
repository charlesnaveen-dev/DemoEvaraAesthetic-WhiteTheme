import { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQAccordion({ items = FAQS, limit }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const displayItems = limit ? items.slice(0, limit) : items;

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-t border-[#E6E2ED]">
      <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
            <Sparkles className="w-3 h-3 text-[#4A1571]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
              CLEAR ANSWERS
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5B5566] font-light max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our consultations, treatments, clinic location, and patient guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E6E2ED] border-y border-[#E6E2ED]">
          {displayItems.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 sm:py-7 transition-colors">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-xl sm:text-2xl text-[#14101A] group-hover:text-[#4A1571] transition-colors pr-6 leading-snug">
                    <span className="font-mono text-sm text-[#0284C7] font-semibold mr-3">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-full border transition-all duration-300 flex items-center justify-center shrink-0 ${
                    isOpen
                      ? "border-[#4A1571] bg-[#4A1571] text-white"
                      : "border-[#E6E2ED] bg-[#FAF9FC] group-hover:border-[#4A1571] text-[#14101A]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 sm:mt-5 pr-8 sm:pr-12 text-sm sm:text-base text-[#5B5566] font-light leading-relaxed animate-fadeIn">
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
