import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { isSupabaseConfigured, submitWaitlistEntry } from '@/lib/supabase';

interface EarlyAccessSectionProps {
  selectedPlan: string | null;
}

const ROLES = [
  'Full-Stack Engineer',
  'Systems / Rust / C++ Engineer',
  'AI / ML Engineer',
  'DevOps / Platform Engineer',
  'Founder / Technical Lead',
];

const OPERATING_SYSTEMS = ['macOS (Apple Silicon)', 'Linux', 'Windows (WSL2)', 'Multi-OS'];

export function EarlyAccessSection({ selectedPlan }: EarlyAccessSectionProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(ROLES[0]);
  const [primaryOs, setPrimaryOs] = useState(OPERATING_SYSTEMS[0]);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setFeedback({ ok: false, message: 'Please enter a valid developer email address.' });
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    try {
      const result = await submitWaitlistEntry({
        email,
        role,
        primary_os: primaryOs,
        selected_plan: selectedPlan,
      });
      setFeedback({ ok: result.ok, message: result.message });
      if (result.ok) {
        setEmail('');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="early-access"
      className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8"
    >
      <div className="hairline-divider mb-20" />

      <div className="glass-panel-electric mx-auto max-w-4xl rounded-3xl p-7 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-electric-400">
              Early Access Cohort
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white">
              Reserve your seat in KerniqOS.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              We onboard developers in hardware-matched waves to guarantee performance and
              gesture calibration quality from day one.
            </p>

            {selectedPlan && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-electric-400/35 bg-electric-500/15 px-3 py-1 text-xs text-electric-200">
                Selected tier: <strong className="font-semibold">{selectedPlan}</strong>
              </div>
            )}

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-electric-400" />
              <span>
                {isSupabaseConfigured
                  ? 'Protected by Supabase Row Level Security.'
                  : 'Supabase-ready waitlist form (connect anon key to persist).'}
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 lg:col-span-7" noValidate>
            <div>
              <label
                htmlFor="waitlist-email"
                className="block text-xs font-medium uppercase tracking-wider text-slate-300"
              >
                Work or Personal Email
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.dev"
                className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-obsidian-950/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-electric-400 focus:outline-none focus:ring-2 focus:ring-electric-500/30"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="waitlist-role"
                  className="block text-xs font-medium uppercase tracking-wider text-slate-300"
                >
                  Primary Discipline
                </label>
                <select
                  id="waitlist-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-obsidian-950/90 px-3.5 py-3 text-sm text-white focus:border-electric-400 focus:outline-none focus:ring-2 focus:ring-electric-500/30"
                >
                  {ROLES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="waitlist-os"
                  className="block text-xs font-medium uppercase tracking-wider text-slate-300"
                >
                  Primary OS
                </label>
                <select
                  id="waitlist-os"
                  value={primaryOs}
                  onChange={(e) => setPrimaryOs(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-obsidian-950/90 px-3.5 py-3 text-sm text-white focus:border-electric-400 focus:outline-none focus:ring-2 focus:ring-electric-500/30"
                >
                  {OPERATING_SYSTEMS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric-500 px-6 py-3.5 text-sm font-semibold text-white shadow-electric-glow transition hover:bg-electric-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Reserving your spot...' : 'Request Early Access'}
              <ArrowRight className="h-4 w-4" />
            </button>

            {feedback && (
              <div
                role="status"
                className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs ${
                  feedback.ok
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-200'
                }`}
              >
                {feedback.ok && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />}
                <span>{feedback.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
