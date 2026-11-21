-- KerniqOS Early Access Waitlist Migration
-- Uses strict Row Level Security (RLS): anonymous users can only INSERT.

create table if not exists public.early_access_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null default 'Full-Stack Engineer',
  primary_os text not null default 'macOS',
  selected_plan text,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

alter table public.early_access_waitlist enable row level security;

-- Allow public waitlist signups only
drop policy if exists "Allow anonymous waitlist inserts" on public.early_access_waitlist;
create policy "Allow anonymous waitlist inserts"
  on public.early_access_waitlist
  for insert
  to anon, authenticated
  with check (
    char_length(trim(email)) >= 5
    and position('@' in email) > 1
  );
