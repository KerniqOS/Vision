import { useState } from 'react';
import { RainOnGlass } from '@/components/RainOnGlass';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { VisionSection } from '@/components/VisionSection';
import { OnboardingWalkthrough } from '@/components/OnboardingWalkthrough';
import { PricingSection } from '@/components/PricingSection';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';

export function App() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100">
      <RainOnGlass />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <VisionSection />
        <OnboardingWalkthrough />
        <PricingSection onSelectPlan={setSelectedPlan} />
        <EarlyAccessSection selectedPlan={selectedPlan} />
      </main>

      <footer className="relative z-10 border-t border-slate-800/80 bg-obsidian-950/90 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <img
              src="/kerniqos-logo.png"
              alt="KerniqOS"
              className="h-6 w-6 rounded object-contain"
            />
            <span className="font-display font-semibold text-slate-200">KerniqOS</span>
            <span>·</span>
            <span>The Personalised Developer Ecosystem</span>
          </div>
          <p className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} KerniqOS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
