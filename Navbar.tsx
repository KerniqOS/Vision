import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Vision', href: '#vision' },
  { label: 'Onboarding', href: '#onboarding' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Early Access', href: '#early-access' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-obsidian-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 rounded-lg"
        >
          <img
            src="/kerniqos-logo.png"
            alt="KerniqOS Logo"
            className="h-9 w-9 rounded-lg object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Kerniq<span className="text-electric-400">OS</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Developer Ecosystem
            </span>
          </div>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-electric-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#early-access"
            className="inline-flex items-center gap-1.5 rounded-full bg-electric-500 px-4 py-2 text-sm font-medium text-white shadow-electric-glow transition hover:bg-electric-400"
          >
            Request Access
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-obsidian-900/80 p-2 text-slate-200 transition hover:border-electric-500/50 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-obsidian-950/95 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-obsidian-800 hover:text-electric-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-electric-500 px-4 py-2.5 text-sm font-medium text-white shadow-electric-glow"
            >
              Request Access
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
