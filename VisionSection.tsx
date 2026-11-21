import { Cpu, Globe, Terminal } from 'lucide-react';

const PHASES = [
  {
    phase: 'Phase 01',
    status: 'In Active Development',
    title: 'Cross-Platform Desktop Application',
    description:
      'A high-craft, device-aware desktop environment for macOS, Linux, and Windows that profiles your hardware, provisions toolchains, and personalises every workspace automatically.',
    icon: Terminal,
  },
  {
    phase: 'Phase 02',
    status: 'Ecosystem Expansion',
    title: 'Unified Developer Ecosystem',
    description:
      'Encrypted state handoff across workstations, composable gesture macros, shared team blueprints, and deep runtime telemetry that eliminates environment drift.',
    icon: Globe,
  },
  {
    phase: 'Phase 03',
    status: 'Long-Term Horizon',
    title: 'Proprietary Linux-Based OS',
    description:
      'A purpose-built Linux operating system engineered from deep obsidian to silicon — combining deterministic kernel scheduling, native gesture compositing, and zero-friction developer ergonomics.',
    icon: Cpu,
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="hairline-divider mb-20" />

      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-electric-400">
          Architecture & Roadmap
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Engineered in three deliberate stages — from desktop app to operating system.
        </h2>
        <p className="mt-4 text-base text-slate-400">
          Every layer of KerniqOS is built to earn trust on the machine you already use today,
          while laying the architectural foundation for a dedicated developer OS.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PHASES.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.phase}
              className="glass-panel flex flex-col justify-between rounded-2xl p-6 transition hover:border-electric-400/35"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-electric-400">
                    {item.phase}
                  </span>
                  <span className="rounded-full border border-slate-700/80 bg-obsidian-950/80 px-2.5 py-0.5 font-mono text-[11px] text-slate-300">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-electric-500/25 bg-electric-500/10 text-electric-300">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
