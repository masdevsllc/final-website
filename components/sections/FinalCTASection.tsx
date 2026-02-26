
import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { siteConfig } from '../../siteConfig';

interface FinalCTASectionProps {
  onCtaClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onCtaClick }) => {
  const { finalCta } = siteConfig;

  return (
    <section id="final-cta" className="relative py-24 md:py-32 px-6 scroll-mt-20 z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-8 md:p-24 rounded-[3rem] md:rounded-[5rem] overflow-hidden text-center border border-[#30f797]/20 bg-gradient-to-b from-[#1A1D2D] to-transparent shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#30f797]/10 blur-[120px] pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-8xl font-black mb-10 relative z-10 leading-none uppercase italic tracking-tighter">
            {finalCta.headline} <br />
            <span className="text-[#30f797]">{finalCta.highlight}</span>
          </h2>

          <div className="relative z-10 max-w-xl mx-auto mb-16">
            <p className="text-base md:text-2xl text-[#30f797] font-black uppercase tracking-[0.2em] mb-8 italic">
              {finalCta.subheadline}
            </p>
            <p className="text-sm md:text-lg text-white/30 font-medium leading-relaxed px-4">
              24/7 Response • 60% No-Show Reduction • 100% Hands-Free.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-10 relative z-10">
            <PrimaryButton onClick={onCtaClick} className="w-full sm:w-auto text-lg md:text-xl py-5 md:py-8 px-8 md:px-16 shadow-[0_0_50px_rgba(48,247,151,0.3)]">
              {finalCta.ctaText}
            </PrimaryButton>
            
            <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              {finalCta.availabilityLabel}: Only {finalCta.slotsRemaining} Strategy Slots Left
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
