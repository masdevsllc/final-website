
import React from 'react';
import { siteConfig } from '../siteConfig';

interface NavbarProps {
  /** Callback to trigger smooth scroll to a target section ID */
  onScrollTo: (id: string) => void;
}

/**
 * Navbar component - Sticky navigation with backdrop blur.
 * Uses siteConfig.navigation for menu items.
 */
export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const { brand, navigation, hero } = siteConfig;

  // Clean the CTA text for the navbar
  const shortCtaText = hero.ctaText.split(' (')[0];
  // Even shorter text for mobile to prevent layout breakage
  const mobileCtaText = "Book Call";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121420]/60 backdrop-blur-2xl border-b border-white/5 py-3">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="flex items-center">
            <div className="relative w-6 h-6 md:w-8 md:h-8 mr-1.5 md:mr-2">
               <div className="absolute inset-0 bg-[#30f797] rotate-45 scale-75 rounded-sm"></div>
               <div className="absolute inset-0 bg-[#121420] rotate-45 scale-[0.45] rounded-sm flex items-center justify-center">
                  <div className="w-full h-1 bg-[#30f797] -rotate-45"></div>
               </div>
            </div>
            <span className="text-lg md:text-2xl font-black tracking-tight flex items-center">
              <span className="text-white">{brand.firstName}</span>
              <span className="text-[#30f797] ml-0.5 md:ml-1 hidden xs:inline">{brand.lastName}</span>
            </span>
          </div>
        </div>
        
        {/* Navigation Links - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <button 
              key={item.targetId}
              onClick={() => onScrollTo(item.targetId)} 
              className="text-xs font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#30f797] transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button - Refined sizing for mobile balance */}
        <button 
          onClick={() => onScrollTo('final-cta')}
          className="bg-[#30f797] text-[#121420] px-3.5 py-1.5 md:px-6 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(48,247,151,0.3)] active:scale-95 shrink-0"
        >
          <span className="md:hidden">{mobileCtaText}</span>
          <span className="hidden md:inline">{shortCtaText}</span>
        </button>
      </div>
    </nav>
  );
};
