
import { SiteConfig } from './types';

/**
 * CENTRAL SITE CONFIGURATION - Refined AI Marketing Automation Flow
 */
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
    { label: "Industries", targetId: "niches" },
    { label: "Value", targetId: "value-props" },
    { label: "Our System", targetId: "solution" },
    { label: "Results", targetId: "results" }
  ],
  hero: {
    eyebrow: "Trusted by SMBs in Law, Real Estate, Healthcare & Home Services",
    headline: "Stop Losing High-Value Leads. Increase Booked Appointments by up to 35% with AI Marketing Automation.",
    subheadline: "Stop relying on slow follow-ups and manual systems. Start using AI-powered marketing automation that responds in under 30 seconds, nurtures every lead, and books appointments around the clock.",
    ctaText: "Book Free Strategy Call",
    socialProofText: "Rated by Growing Businesses"
  },
  problem: {
    headline: "Your Business is Generating Leads...",
    highlight: "But Losing Revenue.",
    subheadline: "You're paying for marketing — but your system is leaking money every day. Over 40% of leads contact another company if they don’t get a fast reply.",
    statCallout: {
      stat: "The Leaky Bucket Problem",
      subtext: "It can cost service businesses thousands per month in lost opportunities."
    },
    items: [
      { icon: "ShieldAlert", title: "40% Lead Attrition", desc: "Leads contact another company immediately if they don't get a fast reply." },
      { icon: "PhoneOff", title: "Unanswered After-Hours", desc: "Calls go completely unanswered once the office closes for the day." },
      { icon: "Clock3", title: "Hours/Days Wait Time", desc: "Form leads often wait hours or days for a response, losing interest." },
      { icon: "Users", title: "Follow-ups Forgotten", desc: "Manually keeping track of prospects is impossible. Leads die in your CRM." },
      { icon: "Database", title: "Ghosted Appointments", desc: "High no-show rates because reminder systems are manual or non-existent." },
      { icon: "TrendingDown", title: "Admin Overload", desc: "Your team wastes 90% of their time on admin tasks instead of closing." }
    ]
  },
  niches: {
    eyebrow: "Built for Service Businesses",
    headline: "Industries We Scale",
    subheadline: "If your business depends on leads and appointments, this system is built for you.",
    items: [
      { title: "Personal Injury Lawyers", tag: "24/7 INTAKE", description: "Instant speed-to-lead for high-value accident cases before they call the next firm.", impactValue: "Never miss high-value cases.", icon: "⚖️" },
      { title: "Real Estate Agents", tag: "NURTURE FLOWS", description: "Automated nurturing that turns cold leads into listings in days, not months.", impactValue: "listings in days, not months.", icon: "🏡" },
      { title: "Dental & Med Spas", tag: "NO-SHOW REDUCTION", description: "Reduce no-shows by up to 60% with smart multi-channel reminders.", impactValue: "Up to 60% fewer no-shows.", icon: "💉" },
      { title: "HVAC & Roofing", tag: "PRE-QUALIFICATION", description: "Pre-qualify leads so your team avoids junk jobs and focus on big contracts.", impactValue: "Avoid junk jobs automatically.", icon: "🛠️" },
      { title: "Insurance Agencies", tag: "REVENUE RECOVERY", description: "Reactivate old leads and increase close rates with automated follow-ups.", impactValue: "Increase close rates instantly.", icon: "🛡️" },
      { title: "Cleaning Companies", tag: "AUTO-SCHEDULING", description: "Instant response and automated scheduling for more daily bookings.", impactValue: "More daily bookings secured.", icon: "🧹" }
    ]
  },
  valueProps: {
    headline: "Outcome-Driven",
    highlight: "Benefits",
    subheadline: "A complete system that manages leads from first contact to booked appointment.",
    items: [
      { icon: "Zap", title: "Never Miss Another Lead", description: "100% of calls, forms, and messages get an instant response in under 30 seconds." },
      { icon: "UserPlus", title: "Turn Old Leads Into Revenue", description: "Businesses re-engage up to 30–50% of ignored leads with automation." },
      { icon: "Shield", title: "Reduce No-Shows by 60%", description: "Automated reminders via SMS, Email, and WhatsApp ensure high attendance." },
      { icon: "TrendingDown", title: "Save 90% of Admin Work", description: "Your team stops chasing leads and updating spreadsheets — everything is auto-synced." },
      { icon: "BarChart3", title: "See Revenue Clearly", description: "Know exactly how many leads, bookings, and deals you have at any time in one dashboard." },
      { icon: "CheckCircle2", title: "Only Talk to Serious Prospects", description: "Unqualified inquiries are filtered automatically so you only talk to buyers." }
    ]
  },
  aiSystems: {
    headline: "The Complete",
    highlight: "Automation System.",
    services: [
      { title: "Instant 30s Response", description: "AI agents respond to every inquiry instantly, qualifying prospects before they reach your team.", icon: "Cpu" },
      { title: "7-12 Multi-Touch Nurture", description: "Follows up automatically 7–12 times until the lead books or says no.", icon: "Zap" },
      { title: "Autonomous Booking", description: "Books qualified appointments directly into your calendar without a single human phone call.", icon: "Layout" }
    ],
    stats: {
      value: "24/7",
      label: "Digital Assistant",
      description: "A digital sales assistant that never sleeps, never calls in sick, and never misses a follow-up."
    }
  },
  techStack: {
    title: "Capabilities",
    subtitle: "Premium automation tech, custom-built for revenue results.",
    items: ["Instant Booking", "Database Reactivation", "Multi-Channel Nurturing", "Lead Qualification", "Review Automation", "Revenue Dashboards"]
  },
  comparison: {
    title: "Your Business Today",
    highlight: "vs With MasDevs",
    rows: [
      { feature: "Response Speed", typical: "Replies in hours or never", masdevs: "Response in under 30 seconds" },
      { feature: "Follow-up", typical: "Manual follow-ups", masdevs: "Automated follow-ups 24/7" },
      { feature: "Lead Capture", typical: "Missed calls = lost sales", masdevs: "100% of leads captured" },
      { feature: "Organization", typical: "Messy tools & notes", masdevs: "One clear revenue system" },
      { feature: "Attendance", typical: "High no-show rate", masdevs: "Up to 60% fewer no-shows" },
      { feature: "Availability", typical: "Business stops after hours", masdevs: "System runs 24/7" }
    ]
  },
  howItWorks: {
    title: "Our Simple",
    highlight: "3-Step Process",
    steps: [
      { step: "01", title: "Free Strategy Call", desc: "15 minutes to review your current lead flow and growth goals." },
      { step: "02", title: "Diagnose The Leak", desc: "We identify exactly where you're losing the most revenue today." },
      { step: "03", title: "Deploy Your System", desc: "A custom automation system launched in days, not months." }
    ]
  },
  results: {
    title: "Client",
    highlight: "Success Metrics",
    testimonials: [
      { name: "James R.", niche: "Personal Injury Attorney", quote: "We were losing nearly 30% of accident leads. Now we book consultations 24/7. Game changer." },
      { name: "Sarah M.", niche: "Real Estate Broker", quote: "500 dead leads turned into 12 listings in just 10 days. ROI was instant." },
      { name: "Dr. Linda K.", niche: "Aesthetic Clinic Owner", quote: "Our no-show rate dropped by 60%. It’s like having a receptionist who never sleeps." },
      { name: "Mark T.", niche: "HVAC CEO", quote: "We saved dozens of hours every month by stopping junk appointments." },
      { name: "David L.", niche: "Insurance Agency Owner", quote: "We reactivated 400 'ghosted' quotes using the AI bot. We closed 18 policies in the first month alone." },
      { name: "Monica P.", niche: "Commercial Cleaning CEO", quote: "The AI handles instant quotes while my teams are on-site. Booking volume increased by 45%." },
      { name: "Robert H.", niche: "Roofing Contractor", quote: "The AI hits our leads in 5 seconds; we’re winning 3x more jobs from the same marketing spend." },
      { name: "Elena S.", niche: "Med Spa Director", quote: "The AI captures Instagram DMs and books them automatically. 100% hands-free revenue." }
    ]
  },
  trust: {
    items: [
      { icon: "CheckCircle2", text: "Free Strategy Call" },
      { icon: "ShieldCheck", text: "Month-to-Month Partnership" },
      { icon: "ArrowRight", text: "Secure Infrastructure" },
      { icon: "ShieldCheck", text: "Satisfaction Guaranteed" }
    ],
    guarantee: {
      label: "RISK REVERSAL",
      text: "You risk nothing. You gain a system that works 24/7 and grows your revenue automatically. Start plugging your leaks today."
    }
  },
  finalCta: {
    headline: "Ready to Stop Losing",
    highlight: "High-Value Leads?",
    subheadline: "Every day without automation costs you money. Your competitors are already responding faster and booking more appointments.",
    ctaText: "Book Your Free Strategy Call Now",
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
  }
};
