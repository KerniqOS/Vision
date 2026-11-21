import { useState } from 'react';
import { Check } from 'lucide-react';
import {
  ANNUAL_DISCOUNT_PERCENT,
  PRICING_TIERS,
  formatTierPrice,
  type BillingCycle,
  type PricingTier,
} from '@/config/pricing';

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const handleChoose = (tier: PricingTier) => {
    onSelectPlan?.(`${tier.name} (${billingCycle})`);
    const target = document.getElementById('early-access');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="hairline-divider mb-20" />

      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-electric-400">
            Transparent Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start free on your machine. Scale with your team.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Early access cohort members lock in founder pricing across the desktop app and
            upcoming ecosystem releases.
          </p>
        </div>

        <div
          role="group"
          aria-label="Billing cycle"
          className="inline-flex items-center rounded-full border border-slate-800 bg-obsidian-900/90 p-1"
        >
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              billingCycle === 'monthly'
                ? 'bg-electric-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition ${
              billingCycle === 'annual'
                ? 'bg-electric-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Annual
            <span className="rounded-full bg-obsidian-950/60 px-1.5 py-0.5 font-mono text-[10px] text-electric-300">
              -{ANNUAL_DISCOUNT_PERCENT}%
            </span>
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PRICING_TIERS.map((tier) => {
          const price = formatTierPrice(tier, billingCycle);
          return (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-2xl p-7 ${
                tier.highlighted ? 'glass-panel-electric' : 'glass-panel'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {tier.name}
                  </h3>
                  {tier.badge && (
                    <span className="rounded-full border border-electric-400/40 bg-electric-500/15 px-2.5 py-0.5 font-mono text-[11px] text-electric-300">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-slate-400">{tier.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold text-white">{price}</span>
                  <span className="text-sm text-slate-400">
                    {tier.monthlyPrice === 0 ? '/ forever' : '/ month'}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 border-t border-slate-800/80 pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleChoose(tier)}
                className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                  tier.highlighted
                    ? 'bg-electric-500 text-white shadow-electric-glow hover:bg-electric-400'
                    : 'border border-slate-700 bg-obsidian-950/80 text-white hover:border-electric-400/60'
                }`}
              >
                {tier.ctaLabel}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
