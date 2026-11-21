import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

export interface WaitlistPayload {
  email: string;
  role: string;
  primary_os: string;
  selected_plan?: string | null;
}

export async function submitWaitlistEntry(
  payload: WaitlistPayload
): Promise<{ ok: boolean; mode: 'live' | 'preview'; message: string }> {
  const normalizedEmail = payload.email.trim().toLowerCase();

  if (!supabase) {
    return {
      ok: true,
      mode: 'preview',
      message:
        'Preview mode active — connect VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to persist signups.',
    };
  }

  const { error } = await supabase.from('early_access_waitlist').insert({
    email: normalizedEmail,
    role: payload.role,
    primary_os: payload.primary_os,
    selected_plan: payload.selected_plan ?? null,
    source: 'website',
  });

  if (error) {
    if (error.code === '23505') {
      return {
        ok: true,
        mode: 'live',
        message: 'You are already registered on the KerniqOS early access waitlist.',
      };
    }
    return {
      ok: false,
      mode: 'live',
      message: 'Unable to complete registration right now. Please try again shortly.',
    };
  }

  return {
    ok: true,
    mode: 'live',
    message: 'Welcome to KerniqOS Early Access. Your seat in the developer cohort is reserved.',
  };
}
