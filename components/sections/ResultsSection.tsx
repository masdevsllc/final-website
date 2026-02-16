
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

/**
 * ResultsSection - Customer testimonials and success stories.
 * Refined as an attractive 4+4 carousel set layout for higher conversion.
 */
export const ResultsSection: React.FC = () => {
  const { results } = siteConfig;
  const [activeSet, setActiveSet] = useState(0); // 0 for first 4, 1 for next 4

  const totalSets = Math.ceil(results.testimonials.length / 4);
  const currentTestimonials = results.testimonials.slice(activeSet * 4, (activeSet * 4) + 4);

  return (
    <section id="results" className="relative py-24 md:py-32 px-6 bg-white/[0.02] scroll-mt-20 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tight italic">
            {results.title} <span className="text-[#30f797]">{results.highlight}</span>
          </h2>
          <p className="text-white/40 text-sm md:text-lg font-black uppercase tracking-[0.4em]">Proven ROI Across Industries</p>
        </div>

        {/* Success Grid - Set View */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-500 ease-in-out">
            {currentTestimonials.map((t, i) => (
              <div 
                key={`${activeSet}-${i}`} 
                className="p-8 md:p-10 rounded-[2rem] border border-white/5 bg-[#1A1D2D] hover:border-[#30f797]/20 transition-all group shadow-2xl flex flex-col justify-between animate-[fadeIn_0.5s_ease-out]"
              >
                <div>
                  <div className="flex text-[#30f797] mb-6">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg md:text-xl italic mb-8 leading-relaxed font-light text-white/80 tracking-tight">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-4 pt-6 border-t border-white/5">
                  <div className="text-base font-black group-hover:text-[#30f797] transition-colors uppercase italic tracking-tight">
                    — {t.name}
                  </div>
                  <div className="text-[9px] text-white/30 font-black uppercase tracking-[0.3em] mt-1">
                    {t.niche}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attractive Carousel Navigation */}
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveSet(prev => (prev === 0 ? totalSets - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#30f797] hover:border-[#30f797]/50 hover:bg-[#30f797]/5 transition-all shadow-xl"
                aria-label="Previous Set"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-3">
                {Array.from({ length: totalSets }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSet(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSet === idx 
                        ? 'w-10 bg-[#30f797] shadow-[0_0_10px_rgba(48,247,151,0.5)]' 
                        : 'w-2 bg-white/10 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setActiveSet(prev => (prev === totalSets - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#30f797] hover:border-[#30f797]/50 hover:bg-[#30f797]/5 transition-all shadow-xl"
                aria-label="Next Set"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] italic">
              Displaying Case Studies {activeSet * 4 + 1}-{Math.min((activeSet + 1) * 4, results.testimonials.length)} of {results.testimonials.length}
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};
