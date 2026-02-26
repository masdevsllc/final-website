
import React, { useState } from 'react';
import { Star, Mail } from 'lucide-react';
import { PrimaryButton } from '../PrimaryButton';
import { siteConfig } from '../../siteConfig';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { hero } = siteConfig;
  const [email, setEmail] = useState('');

  return (
    <section className="relative pt-32 pb-16 md:pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center z-10">
      {/* Visual Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
        <div className="absolute top-10 md:top-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-[#30f797] rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-600 rounded-full blur-[100px] md:blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Social Proof Stack 1 - Top Left Branding */}
        <div className="flex justify-start mb-8 animate-float">
          <div className="bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 flex items-center gap-3">
             <div className="flex text-[#30f797]">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/80">
              {hero.eyebrow}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-8 italic uppercase">
              {hero.headline.split(' ').map((word, i) => (
                <span key={i} className={word.includes('35%') || word.includes('Automation') ? 'text-[#30f797]' : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-2xl text-white/60 mb-10 font-medium leading-relaxed max-w-2xl border-l-2 border-[#30f797]/30 pl-6">
              {hero.subheadline}
            </p>

            {/* Progressive Disclosure CTA */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-8 max-w-3xl">
              <div className="relative flex-grow w-full sm:w-auto">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#30f797] opacity-60">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter Work Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl py-4 md:py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#30f797]/50 transition-all text-base md:text-lg font-bold backdrop-blur-sm"
                />
              </div>
              <PrimaryButton 
                onClick={onCtaClick} 
                className="w-full sm:w-auto min-w-[240px]"
                subText="15-min call • Zero setup fees"
              >
                {hero.ctaText}
              </PrimaryButton>
            </div>

            <div className="flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-12">
              <span>15-minute strategy call</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span>No credit card</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span>No obligation</span>
            </div>

            {/* Social Proof Stack 2 - Trust Bar */}
            <div className="pt-10 border-t border-white/5">
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 italic">Trusted by industry leaders in:</p>
              <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                {['Law', 'Real Estate', 'Healthcare', 'Home Services'].map((industry) => (
                  <span key={industry} className="text-white font-black text-xs md:text-sm uppercase tracking-widest">{industry}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
             <div className="relative group">
                {/* Background Glows */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#30f797]/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="relative bg-[#1A1D2D]/80 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-2xl overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#30f797]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

                  <div className="flex flex-col gap-10 relative z-10">
                    {/* Step 1: Leads */}
                    <div className="flex items-center gap-6 group/item">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-[#30f797]/20 rounded-2xl blur-md opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover/item:text-[#30f797] group-hover/item:border-[#30f797]/50 transition-all duration-500">
                          <Star size={28} />
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-black uppercase tracking-widest text-sm mb-1 group-hover/item:text-[#30f797] transition-colors">Leads</div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                          <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Incoming Inquiries</div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Connector 1 */}
                    <div className="ml-8 relative h-10 w-px bg-white/5">
                      <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#30f797] to-transparent animate-[flowDown_2s_linear_infinite]" style={{ height: '40%' }}></div>
                    </div>

                    {/* Step 2: Follow-up */}
                    <div className="flex items-center gap-6 group/item">
                      <div className="relative">
                        <div className="absolute -inset-3 bg-[#30f797]/30 rounded-2xl blur-xl animate-pulse"></div>
                        <div className="relative w-16 h-16 rounded-2xl bg-[#30f797]/10 border border-[#30f797]/40 flex items-center justify-center text-[#30f797] shadow-[0_0_30px_rgba(48,247,151,0.2)]">
                          <Mail size={28} className="animate-bounce-subtle" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#30f797] font-black uppercase tracking-widest text-sm mb-1">AI Follow-up</div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#30f797] animate-ping"></div>
                          <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Under 30 Seconds</div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Connector 2 */}
                    <div className="ml-8 relative h-10 w-px bg-white/5">
                      <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#30f797] to-transparent animate-[flowDown_2s_linear_infinite_0.5s]" style={{ height: '40%' }}></div>
                    </div>

                    {/* Step 3: Appointments */}
                    <div className="flex items-center gap-6 group/item">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-[#30f797]/40 rounded-2xl blur-2xl opacity-50"></div>
                        <div className="relative w-16 h-16 rounded-2xl bg-[#30f797] flex items-center justify-center text-[#121420] shadow-[0_0_40px_rgba(48,247,151,0.5)] transform group-hover/item:scale-110 transition-transform duration-500">
                          <Star size={28} fill="currentColor" />
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-black uppercase tracking-widest text-sm mb-1">Booked Jobs</div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#30f797]"></div>
                          <div className="text-[#30f797] text-[10px] font-bold uppercase tracking-widest">Revenue Secured</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Status Indicator */}
                  <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-[#1A1D2D] bg-white/10 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" className="w-full h-full object-cover opacity-50" />
                          </div>
                        ))}
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Live Activity</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#30f797]/10 rounded-full border border-[#30f797]/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#30f797] animate-pulse"></div>
                      <span className="text-[#30f797] text-[8px] font-black uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
