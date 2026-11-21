import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Hand, Layers, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3.5 py-1.5 text-xs font-medium text-electric-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="font-mono uppercase tracking-wider">
              Phase 01 · Cross-Platform Desktop App
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Personalised{' '}
            <span className="text-gradient-electric">Developer Ecosystem</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            KerniqOS adapts to your silicon, stack, and workflow from the first second.
            Starting as a device-aware cross-platform desktop application, expanding into a
            unified developer ecosystem, and advancing toward a proprietary Linux-based
            operating system.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#early-access"
              className="inline-flex items-center gap-2 rounded-full bg-electric-500 px-6 py-3 text-sm font-semibold text-white shadow-electric-glow transition hover:bg-electric-400"
            >
              Join Early Access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#onboarding"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-obsidian-900/70 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-electric-400/50 hover:text-white"
            >
              Explore Onboarding
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-6 sm:max-w-lg">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Targets
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-white">
                macOS · Linux · Win
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Interaction
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-white">
                Hand-Gesture Ready
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Horizon
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-electric-300">
                KerniqOS Linux
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel-electric rounded-2xl p-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2.5">
                <img
                  src="/kerniqos-logo.png"
                  alt="KerniqOS"
                  className="h-7 w-7 rounded object-contain"
                />
                <span className="font-mono text-xs text-slate-300">
                  kerniq-daemon :: live telemetry
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SYNCED
              </span>
            </div>

            <div className="mt-5 space-y-3.5">
              <div className="rounded-xl border border-slate-800/80 bg-obsidian-950/70 p-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-electric-300">
                    <Cpu className="h-4 w-4" />
                    Device-Aware Profile
                  </span>
                  <span className="font-mono text-xs text-slate-400">ARM64 · 36GB RAM</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Allocated 10 performance cores to local Rust & container toolchains; thermal
                  envelope balanced for silent compilation.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-obsidian-950/70 p-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-electric-300">
                    <Hand className="h-4 w-4" />
                    Gesture Engine
                  </span>
                  <span className="font-mono text-xs text-slate-400">120Hz · 4ms latency</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Pinch-to-split terminal panes, palm-sweep workspace switch, and air-scroll
                  documentation without leaving flow.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-obsidian-950/70 p-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-electric-300">
                    <Layers className="h-4 w-4" />
                    Active Workspace
                  </span>
                  <span className="font-mono text-xs text-electric-300">obsidian-core</span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {['TypeScript', 'Rust', 'Docker', 'Supabase', 'Neovim Bridge'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-electric-500/20 bg-electric-500/10 px-2 py-0.5 font-mono text-[11px] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
