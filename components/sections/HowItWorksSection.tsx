
import React from 'react';
import { siteConfig } from '../../siteConfig';

export const HowItWorksSection: React.FC = () => {
  const { howItWorks } = siteConfig;

  return (
    <section id="how-it-works" className="relative py-24 px-6 z-10 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
            {howItWorks.title} <span className="text-[#30f797]">{howItWorks.highlight}</span>
          </h2>
          <p className="text-white/40 font-black uppercase tracking-[0.5em] text-xs">A Simple 4-Step Engagement</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorks.steps.map((item, i) => (
            <div key={i} className="bg-[#1A1D2D] p-10 rounded-[2.5rem] border border-white/5 relative shadow-xl hover:border-[#30f797]/30 transition-all group h-full flex flex-col">
              <div className="text-6xl font-black text-[#30f797]/10 mb-8 group-hover:text-[#30f797]/20 transition-all italic">{item.step}</div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight text-white/90">{item.title}</h3>
              <p className="text-white/40 leading-relaxed font-medium text-base mb-8">{item.desc}</p>
              <div className="mt-auto pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#30f797] text-[10px] font-black uppercase tracking-widest">Efficiency Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
