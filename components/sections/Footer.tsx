
import React, { useState } from 'react';
import { siteConfig } from '../../siteConfig';

export const Footer: React.FC = () => {
  const { brand } = siteConfig;
  const currentYear = new Date().getFullYear();
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="relative pt-24 pb-12 px-6 border-t border-white/5 z-10 bg-[#0B0D14]">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-[#30f797]/[0.02] blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Logo Section */}
          <div 
            className="flex items-center mb-10 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            {brand.logoUrl && !imgError ? (
              <img 
                src={brand.logoUrl} 
                alt={brand.name} 
                onError={() => setImgError(true)}
                className="h-10 md:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="text-4xl font-black tracking-tighter flex items-center">
                <span className="text-white">{brand.firstName}</span>
                <span className="text-[#30f797] ml-1">{brand.lastName}</span>
              </div>
            )}
          </div>
          
          <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed max-w-xl mb-12">
            AI Marketing Automation that turns inquiries into booked appointments automatically. <br className="hidden md:block" />
            No generic follow-ups. No missed opportunities. Just pure revenue infrastructure.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 max-w-4xl mx-auto"></div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto gap-8">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
              © {currentYear} {brand.name}. All rights reserved. {brand.location}.
            </p>
            <div className="flex items-center gap-6 text-white/10 text-[9px] font-black uppercase tracking-[0.2em] italic">
              <span className="hover:text-white/30 transition-colors cursor-default">Secure Systems</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span className="hover:text-white/30 transition-colors cursor-default">Proprietary AI Engine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
