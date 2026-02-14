
import React from 'react';

/**
 * Interface for a single testimonial card.
 */
export interface Testimonial {
  name: string;
  niche: string;
  quote: string;
}

/**
 * Interface for a value proposition or benefit item.
 */
export interface ValueProp {
  title: string;
  description: string;
  icon: string; // Key for ICON_MAP
}

/**
 * Interface for a row in the comparison table.
 */
export interface ComparisonRow {
  feature: string;
  typical: string;
  masdevs: string;
}

/**
 * Interface for a quiz question in the ROI calculator.
 */
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

/**
 * Interface for a target industry niche card.
 */
export interface TargetNiche {
  title: string;
  tag: string;
  description: string;
  impactValue: string;
  icon: string | React.ReactNode;
}

/**
 * Interface for an AI system service item.
 */
export interface AISystemService {
  title: string;
  description: string;
  icon: string; // Key for ICON_MAP
}

/**
 * The root configuration object for the entire landing page.
 * Updating this object updates the site content globally.
 */
export interface SiteConfig {
  brand: {
    name: string;
    firstName: string;
    lastName: string;
    logoUrl?: string;
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
  };
  problem: {
    headline: string;
    highlight: string;
    subheadline: string;
    items: {
      icon: string; // Key for ICON_MAP
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
  aiSystems: {
    headline: string;
    highlight: string;
    services: AISystemService[];
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
  howItWorks: {
    title: string;
    highlight: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  results: {
    title: string;
    highlight: string;
    testimonials: Testimonial[];
  };
  trust: {
    items: {
      icon: string; // Key for ICON_MAP
      text: string;
    }[];
    guarantee: {
      label: string;
      text: string;
    };
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
}
