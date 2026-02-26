
import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  brand: {
    name: "MasDevs LLC",
    firstName: "MAS",
    lastName: "DEVS",
    logoUrl: "https://iili.io/qJfKdDG.png",
    faviconUrl: "https://drive.google.com/uc?id=17zhWLrmG2nnqszf9E_dGeK1mdE-MgDai",
    ceo: "Waqas Ahmed",
    location: "Missouri, USA"
  },
  navigation: [
    { label: "The Leak", targetId: "problem" },
    { label: "Proof", targetId: "results" },
    { label: "Value", targetId: "value-props" },
    { label: "Process", targetId: "how-it-works" }
  ],
  hero: {
    eyebrow: "Rated 4.9/5 by 100+ Service Businesses",
    headline: "Stop Losing High-Value Leads. Increase Booked Appointments by 35% in 30 Days with AI Marketing Automation.",
    subheadline: "Most businesses reply in hours. Our system replies in under 30 seconds, follows up automatically, and books appointments for you 24/7.",
    ctaText: "Get My Free Lead Audit",
    socialProofText: "⭐⭐⭐⭐⭐ Trust Score",
    trustLogos: [
      "https://iili.io/JpG6t2p.png",
      "https://iili.io/JpG6pBf.png",
      "https://iili.io/JpG63MG.png",
      "https://iili.io/JpG6X4S.png"
    ]
  },
  problem: {
    headline: "Your Business is Getting Leads…",
    highlight: "But Revenue Is Leaking Every Day.",
    subheadline: "You don’t need more ads. You need a system that never forgets and never sleeps.",
    statCallout: {
      stat: "The Reality Check",
      subtext: "40% of customers choose the business that responds first."
    },
    items: [
      { icon: "ShieldAlert", title: "40% Lead Attrition", desc: "Customers choose the business that responds first. Speed is everything." },
      { icon: "PhoneOff", title: "Wasted Paid Leads", desc: "Missed calls mean you are paying for leads that go straight to competitors." },
      { icon: "Clock3", title: "Slow Follow-ups", desc: "Waiting hours or days to reply sends your customers to the next person on Google." },
      { icon: "TrendingDown", title: "Schedule Destruction", desc: "No-shows destroy your schedule and cash flow. Manual reminders aren't enough." }
    ]
  },
  niches: {
    eyebrow: "Built for Service Businesses",
    headline: "Industries We Scale",
    subheadline: "If your business depends on leads and appointments, this system is built for you.",
    items: [
      { title: "Personal Injury Lawyers", tag: "24/7 INTAKE", description: "Instant speed-to-lead for accident cases before they call the next firm.", impactValue: "Never miss high-value cases.", icon: "⚖️" },
      { title: "Real Estate Agents", tag: "DATABASE REACTIVATION", description: "Turn your old database into fresh listings with intelligent AI follow-ups.", impactValue: "12+ fresh listings from 'dead' leads.", icon: "🏡" },
      { title: "Dental & Med Spas", tag: "NO-SHOW REDUCTION", description: "Reduce no-shows by up to 60% with smart multi-channel reminders.", impactValue: "Up to 60% fewer no-shows.", icon: "💉" },
      { title: "HVAC & Roofing", tag: "PRE-QUALIFICATION", description: "Pre-qualify leads so your team avoids junk jobs and focus on big contracts.", impactValue: "Avoid junk jobs automatically.", icon: "🛠️" },
      { title: "Insurance Agencies", tag: "REVENUE RECOVERY", description: "Reactivate old leads and increase close rates with automated follow-ups.", impactValue: "Increase close rates instantly.", icon: "🛡️" },
      { title: "Cleaning Companies", tag: "AUTO-SCHEDULING", description: "Instant response and automated scheduling for more daily bookings.", impactValue: "More daily bookings secured.", icon: "🧹" }
    ]
  },
  results: {
    title: "Undeniable",
    highlight: "Proof",
    testimonials: [
      { name: "James R.", niche: "Attorney", quote: "We were losing 30% of accident leads. Now we book consultations 24/7. ROI was instant.", resultBadge: "60% fewer no-shows in 2 weeks", avatar: "https://i.pravatar.cc/150?u=james" },
      { name: "Sarah M.", niche: "Real Estate", quote: "500 dead leads turned into 12 listings in just 10 days. The AI is smarter than our old follow-up team.", resultBadge: "12 booked jobs from old leads", avatar: "https://i.pravatar.cc/150?u=sarah" },
      { name: "Dr. Linda K.", niche: "Med Spa", quote: "Our no-show rate dropped by 60%. It’s like having a receptionist who never sleeps.", resultBadge: "Now booking appointments 24/7", avatar: "https://i.pravatar.cc/150?u=linda" },
      { name: "Mark T.", niche: "HVAC CEO", quote: "We respond in 5 seconds now. We win the job before the competitor even hears the phone ring.", resultBadge: "Saved 10+ hours per week", avatar: "https://i.pravatar.cc/150?u=mark" }
    ]
  },
  valueProps: {
    headline: "How Our AI Marketing Automation",
    highlight: "System Works",
    subheadline: "Outcome driven results, no tech jargon.",
    items: [
      { icon: "Zap", title: "Instant Response", description: "Every call, form & message gets answered in under 30 seconds." },
      { icon: "MessageSquare", title: "Automatic Follow-Ups", description: "Leads receive 7–12 smart messages until they book or say no." },
      { icon: "CheckCircle2", title: "Smart Filtering", description: "Only serious, high-value customers reach your team." },
      { icon: "Layout", title: "Auto Booking", description: "Customers book directly into your calendar without staff chasing them." }
    ]
  },
  howItWorks: {
    title: "How It",
    highlight: "Works",
    steps: [
      { step: "01", title: "Free Audit", desc: "We analyze exactly where your leads are leaking and find the hidden revenue." },
      { step: "02", title: "Custom Setup", desc: "We build your bespoke AI assistant and automation workflows in under 7 days." },
      { step: "03", title: "Launch", desc: "Your system goes live 24/7. Every single lead is now caught and nurtured instantly." },
      { step: "04", title: "Grow", desc: "You focus on providing world-class service; we handle the bookings automatically." }
    ]
  },
  faqs: {
    title: "Common Questions",
    items: [
      { question: "How long does setup take?", answer: "We can have your custom system built and launched in under 7 days." },
      { question: "Do I need to replace my current system?", answer: "No, we connect directly to what you already use or provide a superior one if needed." },
      { question: "Is my data safe?", answer: "Absolutely. We use bank-level encryption and follow strict data privacy protocols." },
      { question: "Is there a long-term contract?", answer: "No, you can cancel anytime. We believe in earning your business every single month." }
    ]
  },
  finalCta: {
    headline: "Ready to Stop Losing",
    highlight: "High-Value Leads?",
    subheadline: "30-second response • 35% more bookings • 60% fewer no-shows",
    ctaText: "Book Your Free Strategy Call",
    slotsRemaining: 4,
    availabilityLabel: "Available Today"
  },
  quiz: {
    title: "Analysis Complete!",
    subheadline: "Our \"Leaky Bucket\" Score confirms you can increase bookings by 35% within 30 days.",
    ctaText: "Book Free Strategy Call",
    questions: [
      { id: 1, question: "How many inquiries do you get per month?", options: ["0-25", "26-75", "76-200", "200+"] },
      { id: 2, question: "How long does it take you to respond?", options: ["Under 5 mins", "1 hour", "Next day", "Whenever possible"] },
      { id: 3, question: "What is your biggest bottleneck?", options: ["No-shows", "Slow follow-up", "Admin work", "Lead quality"] },
      { id: 4, question: "Would you like a free audit of your lead flow?", options: ["Yes, please", "Tell me more", "I'm not sure", "Absolutely"] }
    ]
  },
  // Data for additional sections to resolve configuration errors
  aiSystems: {
    headline: "Our Core",
    highlight: "AI Systems",
    services: [
      { icon: "Cpu", title: "AI Booking Agents", description: "24/7 digital employees for marketing qualification & booking that never sleep." },
      { icon: "Layout", title: "Marketing Dashboards", description: "Real-time visibility that shows exactly which ads are booking meetings." },
      { icon: "Smartphone", title: "Nurture Engines", description: "Autonomous multi-channel follow-ups that stay top-of-mind with prospects." }
    ],
    stats: {
      value: "35%",
      label: "Average Growth",
      description: "Increase in booked appointments for our partners within the first 30 days of implementation."
    }
  },
  techStack: {
    title: "Stack",
    subtitle: "Powering your infrastructure",
    items: [
      "AI Booking Agents", "Automated Nurture Engines", "Database Reactivation", 
      "Voice AI Intake", "SMS Automation", "WhatsApp Integration", "CRM Optimization"
    ]
  },
  comparison: {
    title: "Typical vs.",
    highlight: "MasDevs",
    rows: [
      { feature: "Speed to Lead", typical: "Missed leads", masdevs: "Instant response" },
      { feature: "Follow-up Consistency", typical: "Manual follow-ups", masdevs: "Automated follow-ups" },
      { feature: "No-Show Rate", typical: "High no-shows", masdevs: "60% fewer no-shows" },
      { feature: "Visibility", typical: "Guessing", masdevs: "Clear visibility" },
      { feature: "Availability", typical: "Business stops at night", masdevs: "Runs 24/7" }
    ]
  },
  trust: {
    items: [
      { icon: "CheckCircle2", text: "Verified Results" },
      { icon: "ShieldCheck", text: "Bank-Grade Security" },
      { icon: "ArrowRight", text: "Proprietary Tech" },
      { icon: "ShieldCheck", text: "ROI Focused" }
    ],
    guarantee: {
      label: "Performance Guarantee",
      text: "If we don't increase your appointment volume within the first 30 days, we work for free until we do. Zero risk to your business."
    }
  }
};
