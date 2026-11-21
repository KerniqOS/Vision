import { useState } from 'react';
import { CheckCircle2, Cpu, Hand, Sliders, Terminal } from 'lucide-react';

interface OnboardingStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: typeof Cpu;
  terminalLines: string[];
  metrics: { label: string; value: string }[];
}

const STEPS: OnboardingStep[] = [
  {
    id: 'hardware',
    stepNumber: '01',
    title: 'Hardware & Silicon Profiling',
    subtitle:
      'KerniqOS inspects CPU topology, GPU acceleration, memory bandwidth, and display refresh rate to calibrate local performance.',
    icon: Cpu,
    terminalLines: [
      '$ kerniq init --profile-hardware',
      '→ Detected 12-core Apple Silicon / 36GB Unified Memory',
      '→ GPU Metal acceleration verified (120Hz ProMotion)',
      '✓ Thermal & thread-pool limits tuned automatically',
    ],
    metrics: [
      { label: 'Scan Time', value: '0.8s' },
      { label: 'Build Speedup', value: '+28%' },
    ],
  },
  {
    id: 'stack',
    stepNumber: '02',
    title: 'Toolchain & Repo Discovery',
    subtitle:
      'Automatically identifies your languages, package managers, containers, and SSH/Git identity without overwriting dotfiles.',
    icon: Terminal,
    terminalLines: [
      '$ kerniq discover --workspace ~/dev',
      '→ Found Node 22, Rust 1.84, Python 3.12, Docker Engine',
      '→ Linked 4 active repositories & environment schemas',
      '✓ Zero-conflict isolated profiles generated',
    ],
    metrics: [
      { label: 'Runtimes Mapped', value: '14+' },
      { label: 'Dotfile Risk', value: '0%' },
    ],
  },
  {
    id: 'gestures',
    stepNumber: '03',
    title: 'Hand-Gesture Calibration',
    subtitle:
      'Optional camera-local hand-tracking maps intuitive spatial gestures to pane splitting, workspace switching, and focus mode.',
    icon: Hand,
    terminalLines: [
      '$ kerniq gesture --calibrate --local-only',
      '→ On-device vision pipeline initialized (0 bytes uploaded)',
      '→ Bound: Pinch → Split Pane | Sweep → Switch Space',
      '✓ Gesture latency locked at 4.1ms',
    ],
    metrics: [
      { label: 'Processing', value: '100% Local' },
      { label: 'Latency', value: '4.1ms' },
    ],
  },
  {
    id: 'ready',
    stepNumber: '04',
    title: 'Personalised Workspace Ready',
    subtitle:
      'Your obsidian glass workspace launches with synchronized keybindings, telemetry HUD, and one-click environment snapshots.',
    icon: Sliders,
    terminalLines: [
      '$ kerniq launch --profile obsidian-core',
      '→ Restored editor layout, terminal multiplex & local DBs',
      '→ Encrypted snapshot backed up to workspace vault',
      '✓ Ready to build',
    ],
    metrics: [
      { label: 'Cold Start', value: '1.2s' },
      { label: 'State Parity', value: '100%' },
    ],
  },
];

export function OnboardingWalkthrough() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = STEPS[activeIndex];

  return (
    <section
      id="onboarding"
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="hairline-divider mb-20" />

      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-electric-400">
          Device-Aware Onboarding
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          From fresh install to flow state in under two minutes.
        </h2>
        <p className="mt-4 text-base text-slate-400">
          Select each stage below to see how KerniqOS configures itself around your hardware
          and engineering workflow.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <div className="space-y-3 lg:col-span-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-2xl p-4 text-left transition ${
                  isActive
                    ? 'glass-panel-electric text-white'
                    : 'glass-panel text-slate-300 hover:border-electric-500/30'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                      isActive
                        ? 'border-electric-400/50 bg-electric-500/20 text-electric-300'
                        : 'border-slate-800 bg-obsidian-950/70 text-slate-400'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-electric-400">
                        Step {step.stepNumber}
                      </span>
                      {index < activeIndex && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      )}
                    </div>
                    <p className="mt-0.5 font-display text-base font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <div className="glass-panel-electric flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-electric-400" />
                </div>
                <span className="font-mono text-xs text-slate-400">
                  kerniq-onboarding :: step-{current.stepNumber}
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-slate-800/90 bg-obsidian-950/90 p-5 font-mono text-xs sm:text-sm">
                <div className="space-y-2.5">
                  {current.terminalLines.map((line, i) => (
                    <p
                      key={i}
                      className={
                        line.startsWith('$')
                          ? 'text-electric-300'
                          : line.startsWith('✓')
                            ? 'text-emerald-400'
                            : 'text-slate-300'
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {current.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-800/80 bg-obsidian-950/70 p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
