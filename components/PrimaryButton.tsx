
import React from 'react';

interface PrimaryButtonProps {
  /** Callback function triggered on click */
  onClick?: () => void;
  /** Primary label text of the button */
  children?: React.ReactNode;
  /** Optional tailwind classes for customization */
  className?: string;
  /** Supporting text displayed below the main label */
  subText?: string;
}

/**
 * PrimaryButton - Standardized neon green CTA button.
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  onClick, 
  children, 
  className = "", 
  subText 
}) => (
  <button 
    onClick={onClick}
    className={`bg-[#30f797] text-[#121420] py-4 px-8 rounded-2xl md:rounded-3xl transform transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(48,247,151,0.3)] flex flex-col items-center justify-center gap-0.5 group ${className}`}
  >
    <span className="text-sm md:text-xl font-black tracking-tight leading-tight uppercase">{children}</span>
    {subText && (
      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider opacity-70">{subText}</span>
    )}
  </button>
);
