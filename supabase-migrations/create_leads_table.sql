-- Create leads table for service inquiry forms
-- Run this in Supabase SQL Editor

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  source text not null check (source in ('design_development', 'digital_marketing', 'smart_accounting_ai')),
  page_path text,
  user_agent text
);

-- Indexes for common queries
create index if not exists idx_leads_created_at on public.leads (created_at desc);
create index if not exists idx_leads_source_created_at on public.leads (source, created_at desc);

-- Enable RLS (service role bypasses this, so no public policies needed)
alter table public.leads enable row level security;

-- No policies needed since all access is via service role through API
comment on table public.leads is 'Service inquiry leads from marketing site. Access via API only (service role).';
