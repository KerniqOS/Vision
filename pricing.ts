export type BillingCycle = 'monthly' | 'annual';

export interface PricingTier {
  id: 'core' | 'pro' | 'studio';
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  badge?: string;
  highlighted?: boolean;
  ctaLabel: string;
  features: string[];
}

export const ANNUAL_DISCOUNT_PERCENT = 20;

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'core',
    name: 'Core',
    tagline: 'For individual developers exploring device-aware workspaces.',
    monthlyPrice: 0,
    annualPrice: 0,
    ctaLabel: 'Join Free Cohort',
    features: [
      'Cross-platform desktop application (macOS, Linux, Windows)',
      'Automated hardware & toolchain profiling',
      'Up to 3 personalised workspace profiles',
      'Local-first encrypted configuration sync',
      'Community gesture presets & keyboard telemetry',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Full adaptive engineering environment with gesture intelligence.',
    monthlyPrice: 18,
    annualPrice: 14,
    badge: 'Most Popular',
    highlighted: true,
    ctaLabel: 'Reserve Pro Access',
    features: [
      'Everything in Core, plus unlimited workspace profiles',
      'Real-time hand-gesture interaction engine',
      'Hardware-aware build & container resource tuning',
      'Cross-device state handoff & cloud profile vault',
      'Priority access to KerniqOS Linux preview builds',
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    tagline: 'For high-velocity engineering teams standardizing their stack.',
    monthlyPrice: 44,
    annualPrice: 35,
    ctaLabel: 'Request Team Onboarding',
    features: [
      'Everything in Pro for multi-seat engineering teams',
      'Shared deterministic onboarding blueprints',
      'Zero-trust policy controls & SSO / SAML readiness',
      'Fleet telemetry & hardware-normalized CI parity',
      'Dedicated onboarding engineer & SLA support',
    ],
  },
];

export function formatTierPrice(tier: PricingTier, cycle: BillingCycle): string {
  const amount = cycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
  if (amount === 0) return '$0';
  return `$${amount}`;
}
