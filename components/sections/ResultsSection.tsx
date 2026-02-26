
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

export const ResultsSection: React.FC = () => {
  const { results } = siteConfig;
  
  // Wall of Love: Static 2x2 grid of the highest-impact testimonials
  const wallTestimonials = results.testimonials.slice(0, 4);

  return (
    <section id="results" className="relative py-24 md:py-32 px-6 bg-white/[0.02] scroll-mt-20 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic leading-tight">
            {results.title} <span className="text-[#30f797]">{results.highlight}</span>
          </h2>
          <p className="text-white/40 text-sm md:text-lg font-black uppercase tracking-[0.4em]">Force Multiplier Proof</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {wallTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="relative p-10 md:p-12 rounded-[2.5rem] border border-white/5 bg-[#1A1D2D] transition-all group shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-white">
                <Quote size={120} />
              </div>

              <div>
                {/* Result Badge - Visual Impact */}
                {t.resultBadge && (
                  <div className="inline-block mb-8 px-4 py-1.5 bg-[#30f797]/10 border border-[#30f797]/30 rounded-full">
                    <span className="text-[#30f797] font-black text-[10px] uppercase tracking-widest">{t.resultBadge}</span>
                  </div>
                )}
                
                <p className="text-xl md:text-2xl italic mb-10 leading-relaxed font-light text-white/90 tracking-tight relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5 relative z-10">
                <img 
                  src={t.avatar || `https://i.pravatar.cc/150?u=${t.name}`} 
                  className="w-14 h-14 rounded-full border-2 border-white/10 group-hover:border-[#30f797]/50 transition-colors" 
                  alt={t.name} 
                />
                <div>
                  <div className="text-lg font-black text-white uppercase italic tracking-tight group-hover:text-[#30f797] transition-colors">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em] mt-0.5">
                    {t.niche}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <p className="text-white/30 text-xs font-black uppercase tracking-[0.5em] italic">Undeniable growth data from real partners.</p>
        </div>
      </div>
    </section>
  );
};
