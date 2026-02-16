
import React from 'react';
import { PhoneOff, Clock3, Users, Database, TrendingDown, CheckCircle2, Timer, LucideIcon, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

const ICON_MAP: Record<string, LucideIcon> = {
  PhoneOff,
  Clock3,
  Users,
  Database,
  TrendingDown,
  CheckCircle2,
  ShieldAlert
};

/**
 * ProblemSection - Visualizes the "Leaky Bucket" pain points with high agitation copy.
 * Updated with new 40% lead attrition metric and agitation bullets.
 */
export const ProblemSection: React.FC = () => {
  const { problem } = siteConfig;

  return (
    <section id="problem" className="relative py-20 md:py-32 px-6 bg-white/[0.01] border-y border-white/5 scroll-mt-20 z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* HIGH IMPACT STAT BANNER */}
        {problem.statCallout && (
          <div className="mb-20 md:mb-32">
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#30f797]/50 to-[#30f797]/10 rounded-[2rem] blur-xl opacity-20 animate-pulse"></div>
              <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 rounded-[2rem] bg-[#121420] border border-[#30f797]/20 shadow-2xl">
                <div className="flex-shrink-0 w-20 h-20 bg-[#30f797]/10 rounded-2xl flex items-center justify-center border border-[#30f797]/20 shadow-[0_0_20px_rgba(48,247,151,0.1)]">
                  <Timer className="text-[#30f797] w-10 h-10" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tighter leading-tight italic uppercase">
                    {problem.statCallout.stat}
                  </h4>
                  <p className="text-[#30f797]/70 text-lg md:text-xl font-bold uppercase tracking-wide leading-snug">
                    {problem.statCallout.subtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight italic leading-tight">
            {problem.headline} <span className="text-[#30f797]">{problem.highlight}</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-white/60 mb-8 font-medium leading-relaxed">
              {problem.subheadline}
            </p>
            <div className="flex flex-col items-center gap-4 text-red-500/60 font-black uppercase tracking-widest text-[10px] md:text-xs italic bg-red-500/5 py-4 rounded-2xl border border-red-500/10">
              <span>Agitate: Every missed call is a lost customer.</span>
              <span className="w-1 h-1 rounded-full bg-red-500/30"></span>
              <span>Every late reply sends your lead to a competitor.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problem.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || CheckCircle2;
            return (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center sm:items-start sm:text-left p-8 md:p-10 rounded-3xl border ${item.isSolution ? 'border-[#30f797]/30 bg-[#30f797]/5' : 'border-white/10 bg-white/5'} backdrop-blur-sm transition-all hover:bg-white/[0.07]`}
              >
                <div className="mb-6">
                  <Icon className={item.isSolution ? "text-[#30f797]" : "text-red-500/50"} size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight italic leading-tight">{item.title}</h3>
                <p className="text-base md:text-lg text-white/40 leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
            <p className="text-white/60 text-lg md:text-xl font-medium italic">
              Stop paying for marketing while your <span className="text-white font-black italic underline decoration-[#30f797]">infrastructure is leaking money</span> every day.
            </p>
        </div>
      </div>
    </section>
  );
};
