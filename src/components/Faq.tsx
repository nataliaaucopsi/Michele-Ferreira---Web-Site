import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

export const Faq: React.FC = () => {
  // First item open by default as in the screenshot
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 md:py-28 bg-[#f8f3ec]/40 border-b border-[#c3c8c0]/30" id="duvidas">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block mb-3 font-semibold">
            Esclarecimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] mb-4 font-normal">
            Dúvidas Frequentes
          </h2>
          <p className="font-sans text-base text-[#434842]">
            Entenda como funcionam as sessões, formas de pagamento e orientações éticas do Conselho de Psicologia.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#c3c8c0]/50 p-6 transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#485e4a] rounded-lg"
                >
                  <h3 className="font-serif text-xl sm:text-[22px] text-[#1d1b17] font-medium pr-4 group-hover:text-[#485e4a] transition-colors">
                    {item.question}
                  </h3>
                  <div className="p-1 rounded-full text-[#485e4a] transition-transform duration-200">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#485e4a]' : 'text-[#737972]'
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-[#c3c8c0]/30 animate-in fade-in duration-200">
                    <p className="font-sans text-base text-[#434842] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
