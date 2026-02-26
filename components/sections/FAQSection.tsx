
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

export const FAQSection: React.FC = () => {
  const { faqs } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 bg-white/[0.01] z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
            The <span className="text-[#30f797]">Safety Net</span>
          </h2>
          <p className="text-white/40 text-sm md:text-lg font-black uppercase tracking-[0.4em] italic">Addressing Lingering Doubts</p>
        </div>

        <div className="space-y-4">
          {faqs.items.map((item, i) => (
            <div 
              key={i} 
              className={`rounded-[2rem] border transition-all duration-300 ${openIndex === i ? 'bg-[#1A1D2D] border-[#30f797]/30' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6"
              >
                <span className="text-xl md:text-2xl font-black uppercase italic tracking-tight text-white/90">{item.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${openIndex === i ? 'border-[#30f797] text-[#30f797]' : 'border-white/10 text-white/20'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-10 md:px-10 md:pb-12 animate-[slideDown_0.3s_ease-out]">
                  <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-2 border-[#30f797] pl-6">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};
