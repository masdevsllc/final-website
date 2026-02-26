
import React from 'react';

export interface Testimonial {
  name: string;
  niche: string;
  quote: string;
  resultBadge?: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  typical: string;
  masdevs: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface TargetNiche {
  title: string;
  tag: string;
  description: string;
  impactValue: string;
  icon: string | React.ReactNode;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    firstName: string;
    lastName: string;
    logoUrl: string;
    faviconUrl: string;
    ceo: string;
    location: string;
  };
  navigation: {
    label: string;
    targetId: string;
  }[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    socialProofText: string;
    trustLogos: string[];
  };
  problem: {
    headline: string;
    highlight: string;
    subheadline: string;
    statCallout: {
      stat: string;
      subtext: string;
    };
    items: {
      icon: string;
      title: string;
      desc: string;
      isSolution?: boolean;
    }[];
  };
  niches: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: TargetNiche[];
  };
  valueProps: {
    headline: string;
    highlight: string;
    subheadline: string;
    items: ValueProp[];
  };
  howItWorks: {
    title: string;
    highlight: string;
    steps: HowItWorksStep[];
  };
  results: {
    title: string;
    highlight: string;
    testimonials: Testimonial[];
  };
  faqs: {
    title: string;
    items: FAQItem[];
  };
  finalCta: {
    headline: string;
    highlight: string;
    subheadline: string;
    ctaText: string;
    slotsRemaining: number;
    availabilityLabel: string;
  };
  quiz: {
    title: string;
    subheadline: string;
    ctaText: string;
    questions: QuizQuestion[];
  };
  // Adding missing site config properties for extended sections
  aiSystems: {
    headline: string;
    highlight: string;
    services: {
      icon: string;
      title: string;
      description: string;
    }[];
    stats: {
      value: string;
      label: string;
      description: string;
    };
  };
  techStack: {
    title: string;
    subtitle: string;
    items: string[];
  };
  comparison: {
    title: string;
    highlight: string;
    rows: ComparisonRow[];
  };
  trust: {
    items: {
      icon: string;
      text: string;
    }[];
    guarantee: {
      label: string;
      text: string;
    };
  };
}
