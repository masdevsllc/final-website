
import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Layout, 
  Target, 
  UserPlus, 
  BarChart3,
  Cpu,
  MessageSquare,
  Search,
  Users,
  ShieldAlert,
  Award
} from 'lucide-react';
import { Testimonial, ValueProp, ComparisonRow, QuizQuestion, TargetNiche } from './types';

export const COMPANY_NAME = "MasDevs LLC";
export const PRIMARY_CTA_TEXT = "Book Free Strategy Call (No Credit Card Required)";

export const TARGET_NICHES: TargetNiche[] = [
  {
    title: "Personal Injury Lawyers",
    tag: "24/7 INTAKE",
    description: "Instant qualification for accident leads before they call the next firm.",
    impactValue: "Never miss high-value accident cases.",
    icon: "⚖️"
  },
  {
    title: "Real Estate Agents",
    tag: "DATABASE REACTIVATION",
    description: "Turn your old database into fresh listings with intelligent AI follow-ups.",
    impactValue: "12+ fresh listings from 'dead' leads.",
    icon: "🏠"
  },
  {
    title: "Med Spas",
    tag: "NO-SHOW REDUCTION",
    description: "Automated confirmations and rescheduling to maximize your clinic's billable hours.",
    impactValue: "60% reduction in average no-show rates.",
    icon: "🦷"
  }
];

export const TECH_STACK = [
  "AI Booking Agents", "Automated Nurture Engines", "Database Reactivation", 
  "Voice AI Intake", "SMS Automation", "WhatsApp Integration", "CRM Optimization"
];

export const ADDITIONAL_SERVICES = [
  {
    title: "AI Booking Agents",
    description: "24/7 digital employees for marketing qualification & booking that never sleep.",
    icon: <MessageSquare className="w-6 h-6 text-neon" />
  },
  {
    title: "Marketing Dashboards",
    description: "Real-time visibility that shows exactly which ads are booking meetings.",
    icon: <BarChart3 className="w-6 h-6 text-neon" />
  },
  {
    title: "Nurture Engines",
    description: "Autonomous multi-channel follow-ups that stay top-of-mind with prospects.",
    icon: <Zap className="w-6 h-6 text-neon" />
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6 text-neon" />,
  UserPlus: <UserPlus className="w-6 h-6 text-neon" />,
  Layout: <Layout className="w-6 h-6 text-neon" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-neon" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-neon" />,
  Zap: <Zap className="w-6 h-6 text-neon" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-neon" />,
  Target: <Target className="w-6 h-6 text-neon" />,
  Search: <Search className="w-6 h-6 text-neon" />,
  Users: <Users className="w-6 h-6 text-neon" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-neon" />,
  Award: <Award className="w-6 h-6 text-neon" />
};
