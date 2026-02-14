
import React from 'react';
import { siteConfig } from '../siteConfig';

/**
 * TargetNiches - Specialized section for vertical industry messaging.
 * Optimized for mobile: centered cards on small screens, improved vertical rhythm.
 */
export const TargetNiches: React.FC = () => {
  const { niches } = siteConfig;

  return (
    <section id="niches" className="py-24 px-6 scroll-mt-20 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#30f797] font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-6 block">
            {niches.eyebrow}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight leading-tight italic">
            {niches.headline}
          </h2>
          <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed">
            {niches.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {niches.items.map((niche, i) => (
            <div key={i} className="p-10 md:p-12 rounded-[2.5rem] bg-[#1A1D2D] border border-white/5 flex flex-col items-center text-center lg:items-start lg:text-left hover:border-[#30f797]/20 transition-all group shadow-2xl h-full">
              {/* Icon Section */}
              <div className="text-5xl mb-8 h-12 flex items-center justify-center lg:justify-start">{niche.icon}</div>
              
              {/* Title Section */}
              <div className="min-h-[5rem] flex items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#30f797] transition-colors leading-tight uppercase italic tracking-tight">
                  {niche.title}
                </h3>
              </div>
              
              {/* Tag Section */}
              <div className="mb-10 h-10 flex items-center">
                <div className="inline-block px-4 py-2 border border-[#30f797]/30 bg-[#30f797]/5 rounded-full">
                  <span className="text-[#30f797] font-black text-[10px] md:text-xs uppercase tracking-widest leading-none">
                    {niche.tag}
                  </span>
                </div>
              </div>

              {/* Description Section */}
              <div className="flex-grow">
                <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-10">
                  {niche.description}
                </p>
              </div>

              {/* Footer Section */}
              <div className="mt-auto w-full">
                <div className="w-full h-px bg-white/10 mb-8 opacity-50"></div>
                <div className="min-h-[4.5rem]">
                  <span className="text-white/30 font-black text-[10px] md:text-xs uppercase tracking-widest block mb-3">Key Impact</span>
                  <p className="text-white font-black text-lg md:text-xl leading-tight">
                    {niche.impactValue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
