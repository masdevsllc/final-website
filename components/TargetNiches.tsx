
import React from 'react';
import { siteConfig } from '../siteConfig';

/**
 * TargetNiches - Specialized section for vertical industry messaging.
 * Optimized for mobile: centered cards on small screens, improved vertical rhythm.
 * Updated: Enforced strictly consistent container heights for titles and footers 
 * to align green tags and grey impact lines across all cards in a row.
 */
export const TargetNiches: React.FC = () => {
  const { niches } = siteConfig;

  return (
    <section id="niches" className="py-20 md:py-28 px-6 scroll-mt-20 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#30f797] font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4 block">
            {niches.eyebrow}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight leading-tight italic">
            {niches.headline}
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            {niches.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {niches.items.map((niche, i) => (
            <div key={i} className="p-8 md:p-10 rounded-[2rem] bg-[#1A1D2D] border border-white/5 flex flex-col items-center text-center lg:items-start lg:text-left hover:border-[#30f797]/20 transition-all group shadow-2xl h-full">
              {/* Icon Section */}
              <div className="text-4xl mb-6 h-10 flex items-center justify-center lg:justify-start transform group-hover:scale-110 transition-transform">
                {niche.icon}
              </div>
              
              {/* Title Section - Fixed height to align tags below */}
              <div className="mb-4 h-16 md:h-24 flex items-end justify-center lg:justify-start">
                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#30f797] transition-colors leading-tight uppercase italic tracking-tighter">
                  {niche.title}
                </h3>
              </div>
              
              {/* Tag Section - Height fixed by Title container above */}
              <div className="mb-6 h-8 flex items-center">
                <div className="inline-block px-3 py-1.5 border border-[#30f797]/20 bg-[#30f797]/5 rounded-full">
                  <span className="text-[#30f797] font-black text-[9px] md:text-[10px] uppercase tracking-widest leading-none">
                    {niche.tag}
                  </span>
                </div>
              </div>

              {/* Description Section */}
              <div className="flex-grow mb-8">
                <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed">
                  {niche.description}
                </p>
              </div>

              {/* Footer Section - Fixed height and mt-auto ensures top border (grey line) aligns */}
              <div className="mt-auto w-full pt-6 border-t border-white/5 h-28 md:h-32 flex flex-col justify-start">
                <span className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] block mb-2">
                  Key Impact
                </span>
                <p className="text-white font-black text-lg md:text-xl leading-tight italic tracking-tight">
                  {niche.impactValue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
